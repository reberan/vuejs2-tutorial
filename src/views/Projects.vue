<template>
  <div class="wrapper">
    <h1>Projects</h1>
    <div id="nav">
      <router-link to="/project/monsterslayer">The Monster Slayer</router-link>
      | <router-link to="/project/quotes">Quotes</router-link> |
      <router-link to="/project/superquiz">Super Quiz</router-link> |
      <router-link to="/project/stocktrader">The Stock Trader</router-link>
    </div>
    <div class="projects">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="stylus">
.projects
  font-family 'Courier New', Courier, monospace
</style>
