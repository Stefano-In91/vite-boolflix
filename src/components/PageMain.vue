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
  <h1>PageMain</h1>
  <ShowCard v-for="movie in store.movies" :show="movie" />
  <ShowCard v-for="serie in store.series" :show="serie" />
</template>

<style></style>
