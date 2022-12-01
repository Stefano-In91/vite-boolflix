<script>
import { store } from "../store.js";
import ShowCard from "./main-components/ShowCard.vue";

export default {
  name: "PageMain",
  components: {
    ShowCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="carousel">
    <ShowCard v-for="movie in store.movies" :show="movie" />
    <ShowCard v-for="serie in store.series" :show="serie" />
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: darkgray;
}
.carousel {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
}
</style>
