<script>
import { store } from "./store.js";
import axios from "axios";
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";

export default {
  components: {
    PageHeader,
    PageMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchMovies() {
      this.store.movies = [];
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "e02ccfdaadf1d52eb482ac6f985a52cd",
            query: this.store.searchQuery,
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        });
      this.store.searchQuery = "";
    },
    search() {
      this.searchMovies();
    },
    logga() {
      console.log(this.store.movies);
    },
  },
};
</script>

<template>
  <header>
    <PageHeader @searchFor="search" />
  </header>
  <main @click="logga">
    <PageMain />
  </main>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
