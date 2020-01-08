<template>
  <div class="wrapper">
    <h1>Projects</h1>
    <div id="nav">
      <router-link to="/project/monsterslayer">The Monster Slayer</router-link>
      |
      <router-link to="/project/quotes">Quotes</router-link>
      |
      <router-link to="/project/superquiz">Super Quiz</router-link>
    </div>
    <div class="projects">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "projects"
};
</script>

<style scoped lang="stylus">
.exercises
  font-family 'Courier New', Courier, monospace
  text-align left
</style>
