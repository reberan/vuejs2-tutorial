<template>
  <div class="container">
    <div class="row text-center">
      <h1>Extras</h1>
      <div class="nav navbar-form">
        <router-link to="/extras/animations">Animations</router-link> |
        <router-link to="/extras/http">HTTP</router-link> |
        <router-link to="/extras/routing">Routing</router-link> |
        <router-link to="/extras/vuex">Vuex</router-link> |
        <router-link to="/extras/axios">Axios & Auth</router-link>
      </div>
    </div>
    <div class="row">
      <router-view />
    </div>
  </div>
</template>
