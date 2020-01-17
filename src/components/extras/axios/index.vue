<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Axios</h1>
        <app-header />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
export default {
  name: "app",
  components: {
    "app-header": Header
  },
  created() {
    this.$store.dispatch("auth/tryAutoLogin");
  }
};
</script>

<style>
body,
html {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
