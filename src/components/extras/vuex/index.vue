<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <Result />
        <hr />
        <Counter />
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Result from "./components/Result";

export default {
  components: {
    Counter,
    Result
  }
};
</script>
