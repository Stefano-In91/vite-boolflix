<script>
export default {
  name: "ShowCard",
  props: {
    show: Object,
  },
  methods: {
    checkFlag(language) {
      if (language === "en") {
        return "gb";
      } else if (language === "ko") {
        return "kr";
      }
      return language;
    },
    round(number) {
      return Math.round(number / 2);
    },
  },
};
</script>

<template>
  <div class="card" v-if="show.poster_path">
    <div class="item">
      <img
        :src="`https://image.tmdb.org/t/p/w300/${show.poster_path}`"
        :alt="(show.title, show.name)"
      />
    </div>
    <div class="on-hover">
      <h4><b>Titolo: </b>{{ show.title }}{{ show.name }}</h4>
      <h4 v-if="show.original_title !== show.title || show.name !== show.original_name">
        <b>Titolo originale: </b> {{ show.original_title }}{{ show.original_name }}
      </h4>
      <h4>
        <b>Lingua originale: </b><span :class="`fi fi-${checkFlag(show.original_language)}`"></span>
      </h4>
      <h4>
        <b>Voto: </b>
        <i class="fa-solid fa-star" v-for="n in round(show.vote_average)"></i>
        <i class="fa-regular fa-star" v-for="n in 5 - round(show.vote_average)"></i>
      </h4>
      <h4 class="overview" v-if="show.overview"><b>Sinossi: </b>{{ show.overview }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: darkgray;
  position: relative;
  margin: 0.5rem;
  border: 2px solid black;
  .on-hover {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    h4 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  &:hover {
    border: 2px solid darkgray;
  }
  &:hover img {
    opacity: 0;
  }
  &:hover .on-hover {
    display: block;
  }
}
</style>
