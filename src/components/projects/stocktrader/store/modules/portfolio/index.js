import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  funds: 10000,
  stocks: []
};

export default { namespaced: true, state, actions, mutations, getters };
