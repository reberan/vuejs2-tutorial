export default {
  userId: state => state.userId,
  user: state => state.user,
  isAuthenticated: state => state.idToken !== null
};
