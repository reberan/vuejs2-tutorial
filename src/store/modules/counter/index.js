import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  clicks: 0,
  counter: 0
};

export default { namespaced: true, state, actions, mutations, getters };
