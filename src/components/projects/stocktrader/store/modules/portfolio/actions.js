export default {
  sellStocks: (context, order) => context.commit("SELL_STOCK", order),
  buyStock: (context, order) => context.commit("BUY_STOCK", order),
  initPortfolio: (context, portfolio) =>
    context.commit("INIT_PORTFOLIO", portfolio)
};
