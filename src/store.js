import { reactive } from "vue";

export const store = reactive({
  searchQuery: "",
  movies: [],
  series: [],
});
