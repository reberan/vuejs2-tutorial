import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter/";
import stocks from "./../components/projects/stocktrader/store/modules/stocks";
import portfolio from "./../components/projects/stocktrader/store/modules/portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { counter, stocks, portfolio }
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
