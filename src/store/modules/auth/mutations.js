export default {
  AUTH: (state, payload) => {
    state.idToken = payload.idToken;
    state.userId = payload.localId || payload.userId;
    state.email = payload.email;
  },

  "SIGN-OUT": state => {
    state.idToken = null;
    state.userId = null;
    state.email = null;
    state.user = null;
  },

  "SET-USER": (state, user) => {
    state.user = user;
  }
};
