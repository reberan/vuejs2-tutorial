<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">The Stock Trader</h1>
        <app-header />
      </div>
    </div>
    <transition name="fade" mode="out-in"
      ><router-view></router-view
    ></transition>
  </div>
</template>
<script>
import Vue from "vue";
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  },
  created() {
    Vue.http.options.root = "https://vuejs2-tutorial-1a9a6.firebaseio.com/";
  }
};
</script>

<style lang="stylus" scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave {
  /* opacity 1 */
}

.fade-leave-active {
  transition: opacity 0.3s;
}
</style>
