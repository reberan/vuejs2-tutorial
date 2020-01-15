import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  stocks: []
};

export default { namespaced: true, state, actions, mutations, getters };
