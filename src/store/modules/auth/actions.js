import { auth, request } from "../../../components/extras/axios/requests";
import router from "../../../router";

const API_KEY = "AIzaSyB-lzo0Ceh06Z6bePi8v86amrWNORtHunE";

export default {
  setLogoutTimer({ dispatch }, expirationTime) {
    setTimeout(() => {
      dispatch("logout");
    }, expirationTime * 1000);
  },
  signup({ commit, dispatch }, authData) {
    const payload = { ...authData, returnSecureToken: true };
    auth
      .post("/accounts:signUp?key=" + API_KEY, payload)
      .then(response => {
        commit("AUTH", response.data);
        dispatch("storeUser", authData);
        dispatch("setLogoutTimer", response.data.expiresIn);
      })
      .catch(error => alert(error.message));
  },

  signin({ commit, dispatch }, formData) {
    const payload = { ...formData, returnSecureToken: true };
    auth
      .post("/accounts:signInWithPassword?key=" + API_KEY, payload)
      .then(response => {
        commit("AUTH", response.data);
        dispatch("setLogoutTimer", response.data.expiresIn);
        router.replace("/extras/axios/dashboard");
      })
      .catch(error => alert(error.message));
  },

  logout({ commit }) {
    commit("SIGN-OUT");
    router.replace("/extras/axios/welcome");
  },

  storeUser({ commit, state }, userData) {
    if (!state.idToken) {
      return;
    }
    request
      .post("/users.json" + "?auth=" + state.idToken, userData)
      .then(response => commit("SET-USER", response.data))
      .catch(error => alert(error.message));
  },

  fetchUser({ commit, state }) {
    if (!state.idToken) {
      return;
    }
    request
      .get("/users.json" + "?auth=" + state.idToken)
      .then(response => {
        const data = response.data;
        const users = Object.keys(data).map(key => ({
          ...data[key],
          id: key
        }));
        commit(
          "SET-USER",
          users.find(element => element.email === state.email)
        );
      })
      .catch(error => alert(error.message));
  }
};
