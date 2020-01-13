import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { counter }
});

// Originally this was exported, so either you modularize everything and then reimport them here, or
// just write everything here the exported object.

// export default {
//   state: {},
//   actions: {},
//   mutations: {},
//   getters: {},
//   modules: {}
// }
