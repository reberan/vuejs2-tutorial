//import stocks from "../../../data/stocks";

export default {
  initStocks: ({ commit }, stocks) => commit("SET_STOCKS", stocks),
  setStocks: ({ commit }, stocks) => commit("SET_STOCKS", stocks),
  buyStock: (context, order) => context.commit("BUY_STOCK", order),
  randomizeStocks: ({ commit }) => commit("RND_STOCKS")
};
