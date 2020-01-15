export default {
  BUY_STOCK: (state, order) => {
    const { stockId, quantity, stockPrice } = order;
    const record = state.stocks.find(stock => stock.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({ id: stockId, quantity: quantity });
    }
    state.funds -= quantity * stockPrice;
  },

  SELL_STOCK: (state, order) => {
    const { stockId, quantity, stockPrice } = order;
    const record = state.stocks.find(stock => stock.id === stockId);
    if (record && record.quantity >= quantity) {
      record.quantity -= quantity;
      if (record.quantity === 0) {
        state.stocks = state.stocks.filter(stock => stock.id !== record.id);
      }
    } else {
      console.err(
        "Cannot sell stock: either quantify is low or stock is missing"
      );
    }
    state.funds += quantity * stockPrice;
  },

  INIT_PORTFOLIO: (state, payload) => {
    const { stocks, funds } = payload;
    state.stocks = stocks;
    state.funds = funds;
  }
};
