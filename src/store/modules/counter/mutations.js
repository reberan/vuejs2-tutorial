export default {
  increment: (state, payload) => {
    state.counter += payload;
    state.clicks++;
  },

  decrement: (state, payload) => {
    state.counter -= payload;
    state.clicks++;
  }
};
