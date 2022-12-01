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
  <div class="flex">
    <div>
      <h1>BOOLFLEX</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Serie TV</a></li>
        <li><a href="#">Film</a></li>
        <li><a href="#">Originali</a></li>
        <li><a href="#">Aggiunti di recente</a></li>
        <li><a href="#">La mia lista</a></li>
      </ul>
    </div>
    <form @submit.prevent="$emit(`searchFor`)">
      <input type="text" v-model="store.searchQuery" />
      <button type="submit">Cerca</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    h1 {
      color: red;
      margin-right: 1rem;
    }
    ul {
      display: flex;
      list-style: none;
      li {
        margin-right: 0.5rem;
      }
      a {
        color: darkgray;
        text-decoration: none;
        cursor: pointer;
        &.active {
          color: white;
        }
      }
    }
  }
  input,
  button {
    padding: 0.25rem;
    border: 1px solid black;
    border-radius: 4px;
  }
}
</style>
