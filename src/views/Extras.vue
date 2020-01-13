<template>
  <div class="wrapper">
    <h1>Extras</h1>
    <div id="nav">
      <router-link to="/extras/animations">Animations</router-link> |
      <router-link to="/extras/http">HTTP</router-link> |
      <router-link to="/extras/routing">Routing</router-link> |
      <router-link to="/extras/vuex">Vuex</router-link>
    </div>
    <div class="extras">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "extras"
};
</script>

<style scoped lang="stylus">
.extras
  font-family 'Courier New', Courier, monospace
  text-align left
  padding-left 50px
</style>
