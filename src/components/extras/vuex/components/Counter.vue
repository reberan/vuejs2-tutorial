<template>
  <div>
    <button class="btn btn-primary " @click="increment(1)">
      Increment
    </button>
    <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
    <button
      class="btn btn-primary"
      @click="asyncIncrement({ by: 1, wait: 1000 })"
    >
      AsyncIncrement
    </button>
    <button
      class="btn btn-primary"
      @click="asyncDecrement({ by: 1, wait: 1000 })"
    >
      AsyncDecrement
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("counter", [
      "increment",
      "decrement",
      "asyncIncrement",
      "asyncDecrement"
    ])
  }
};
</script>
