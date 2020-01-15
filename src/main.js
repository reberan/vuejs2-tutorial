import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./components/exercises/exercise11/mixin";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = "https://vuejs2-tutorial-1a9a6.firebaseio.com";
/*
// Global Interceptors
Vue.http.interceptors.push((request, next) => {
  console.log(request);

  next(response => {
    response.json = () => {
      return { messages: response.body };
    };
  });
});
*/
Vue.filter("addLength", value => `${value} (${value.length})`);
Vue.filter("asCurrency", value => `${value} CHF`);
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
