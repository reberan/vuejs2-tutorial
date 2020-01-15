export default {
  SET_STOCKS: (state, stocks) => {
    state.stocks = stocks;
  },
  RND_STOCKS: state => {
    state.stocks.forEach(
      stock => (stock.price = Math.round(1 + Math.random() * 1000))
    );
  }
};
