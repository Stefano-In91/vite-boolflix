<script>
export default {
  name: "ShowCard",
  props: {
    show: Object,
  },
  methods: {
    enFlag(string) {
      if (string === "en") {
        return "gb";
      } else return string;
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
      <h1>{{ show.title }}{{ show.name }}</h1>
    </div>
    <div class="on-hover">
      <h2
        v-if="
          show.original_title !== show.title || show.name !== show.original_name
        "
      >
        {{ show.original_title }} {{ show.original_name }}
      </h2>
      <span :class="`fi fi-${enFlag(show.original_language)}`"></span>
      <h4>{{ round(show.vote_average) }}</h4>
    </div>
  </div>
</template>

<style></style>
