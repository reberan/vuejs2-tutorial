export default {
  increment: (context, payload) => context.commit("increment", payload),

  decrement: ({ commit }, payload) => commit("decrement", payload),

  asyncIncrement: (context, payload) => {
    const { by, wait } = payload;
    setTimeout(() => {
      context.commit("increment", by);
    }, wait);
  },

  asyncDecrement: ({ commit }, payload) => {
    const { by, wait } = payload;
    setTimeout(() => {
      commit("increment", by);
    }, wait);
  }
};
