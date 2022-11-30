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
            language: "it-IT",
            query: this.store.searchQuery,
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        });
    },
    searchSeries() {
      this.store.series = [];
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "e02ccfdaadf1d52eb482ac6f985a52cd",
            language: "it-IT",
            query: this.store.searchQuery,
          },
        })
        .then((resp) => {
          this.store.series = resp.data.results;
        });
    },
    search() {
      this.searchMovies();
      this.searchSeries();
      this.store.searchQuery = "";
    },
  },
};
</script>

<template>
  <header>
    <PageHeader @searchFor="search" />
  </header>
  <main>
    <PageMain />
  </main>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
