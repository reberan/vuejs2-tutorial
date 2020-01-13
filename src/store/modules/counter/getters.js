export default {
  counter: state => state.counter,
  clicks: state => state.clicks,
  doubleCounter: state => state.counter * 2,
  stringCounter: state => state.counter + " Clicks"
};
