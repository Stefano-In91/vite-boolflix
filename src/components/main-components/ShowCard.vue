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
  },
};
</script>

<template>
  <h1>{{ show.title }}{{ show.name }}</h1>
  <h2>{{ show.original_title }}{{ show.original_name }}</h2>
  <span :class="`fi fi-${enFlag(show.original_language)}`"></span>
  <h4>{{ show.vote_average }}</h4>
</template>

<style></style>
