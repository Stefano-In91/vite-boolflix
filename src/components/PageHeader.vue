<script>
import { store } from "../store.js";

export default {
  name: "PageHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <form @submit.prevent="$emit(`searchFor`)">
    <input type="text" v-model="store.searchQuery" />
    <button type="submit">Cerca</button>
  </form>
</template>

<style></style>
