import Vue from "vue";
import VueResource from "vue-resource";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./components/exercises/exercise11/mixin";

Vue.config.productionTip = false;

// With VueResource
Vue.use(VueResource);
Vue.http.options.root = "https://vuejs2-tutorial-1a9a6.firebaseio.com";

// Global Interceptors
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   next(response => {
//     response.json = () => {
//       return { messages: response.body };
//     };
//   });
// });

// With Axios
// @link https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
// @link https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
axios.defaults.baseURL = "https://vuejs2-tutorial-axios.firebaseio.com";
axios.defaults.headers.common["Autjhorization"] = "something";
axios.defaults.headers.get["Accepts"] = "application/json";

// Creating axios interceptors
const requestInterceptor = axios.interceptors.request.use(config => {
  // eslint-disable-next-line no-console
  console.log("TCL: axios.interceptors.request.use", config);
  return config;
});
const responseInterceptor = axios.interceptors.response.use(res => {
  // eslint-disable-next-line no-console
  console.log("TCL: axios.interceptors.response.use", res);
  return res;
});
// removing the previously added interceptors
axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

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
