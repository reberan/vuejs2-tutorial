<template>
  <div class="container">
    <div class="row text-center">
      <h1>Exercises</h1>
      <div class="nav navbar-form">
        <router-link to="/exercise/1">Exercise 1</router-link> |
        <router-link to="/exercise/2">Exercise 2</router-link> |
        <router-link to="/exercise/3">Exercise 3</router-link> |
        <router-link to="/exercise/4">Exercise 4</router-link> |
        <router-link to="/exercise/5">Exercise 5</router-link> |
        <router-link to="/exercise/6">Exercise 6</router-link> |
        <router-link to="/exercise/7">Exercise 7</router-link> |
        <router-link to="/exercise/8">Exercise 8</router-link> |
        <router-link to="/exercise/9">Exercise 9</router-link> |
        <router-link to="/exercise/10">Exercise 10</router-link> |
        <router-link to="/exercise/11">Exercise 11</router-link>
      </div>
    </div>
    <div class="row">
      <router-view />
    </div>
  </div>
</template>
