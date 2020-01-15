export default {
  funds(state) {
    return state.funds;
  },
  currentStocksValue(state, getters, rootState, rootGetters) {
    return state.stocks.reduce((total, stock) => {
      const record = rootGetters["stocks/stocks"].find(
        element => element.id === stock.id
      );
      return total + stock.quantity * record.price;
    }, 0);
  },
  stockPortfolio(state, getters, rootState, rootGetters) {
    return state.stocks.map(stock => {
      const record = rootGetters["stocks/stocks"].find(
        element => element.id === stock.id
      );
      const portfolio = {
        ...record,
        ...stock,
        totalValue: record.price * stock.quantity
      };
      return portfolio;
    });
  }
};
