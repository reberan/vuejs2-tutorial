<template>
  <div class="container">
    <div class="row text-center">
      <h1>Projects</h1>
      <div class="nav navbar-form">
        <router-link to="/project/monsterslayer">The Monster Slayer</router-link
        >| <router-link to="/project/quotes">Quotes</router-link> |
        <router-link to="/project/superquiz">Super Quiz</router-link> |
        <router-link to="/project/stocktrader">The Stock Trader</router-link>
      </div>
    </div>
    <div class="row">
      <router-view />
    </div>
  </div>
</template>
