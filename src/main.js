import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./components/exercises/exercise11/mixin";

Vue.config.productionTip = false;

Vue.filter("addLength", value => `${value} (${value.length})`);
Vue.mixin(mixin);

export const eventBus = new Vue();

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  data: {
    title: "Hello World!"
  },
  methods: {
    sayHello: () => "Hellooooo"
  }
});
