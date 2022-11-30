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
  <ShowCard />
  <ShowCard />
</template>

<style></style>
