export default {
  /**
   * @link https://vuex.vuejs.org/guide/actions.html
   * Action handlers receive a context object which exposes the same set of
   * methods/properties on the store instance, so you can call
   * - context.commit to commit a mutation, or access the state and getters via
   * - context.state and
   * - context.getters.
   * We can even call other actions with
   * - context.dispatch.
   * Inside module actions, context.state will expose the local state, and root state will be exposed as
   * - context.rootState
   */
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
      commit("decrement", by);
    }, wait);
  }
};
