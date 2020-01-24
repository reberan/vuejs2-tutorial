<template>
  <div id="app">
    <div class="row text-center">
      <div class="nav navbar-form">
        <router-link to="/">Home</router-link> |
        <router-link to="/exercises">Exercises</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/extras">Extras</router-link>
      </div>
    </div>
    <div class="row text-left">
      <router-view />
    </div>
  </div>
</template>

<style lang="stylus">
#app
  font-family "Courier New", Courier, monospace
  font-size 14px
  color #00000A
  margin-top 60px
</style>
