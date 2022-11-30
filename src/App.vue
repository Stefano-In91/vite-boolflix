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
};
</script>

<template>
  <div class="container">
    <PageHeader />
    <PageMain />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
