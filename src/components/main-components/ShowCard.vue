<script>
export default {
  name: "ShowCard",
  props: {
    show: Object,
  },
};
</script>

<template>
  <h1>{{ show.title }}{{ show.name }}</h1>
  <h2>{{ show.original_title }}{{ show.original_name }}</h2>
  <h3>{{ show.original_language }}</h3>
  <h4>{{ show.vote_average }}</h4>
</template>

<style></style>
