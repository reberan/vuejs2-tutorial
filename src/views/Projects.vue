<template>
  <div class="wrapper">
    <h1>Projects</h1>
    <div id="nav">
      <router-link to="/projects/monsterslayer">The monster slayer</router-link>
      |
      <router-link to="/projects/quotes">Quotes</router-link>
      |
      <router-link to="/projects/superquiz">Super Quiz</router-link>
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
