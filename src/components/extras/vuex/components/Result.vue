<template>
  <div>
    <p>counter is: {{ counter }}</p>
    <p>doubleCounter is: {{ doubleCounter }}</p>
    <p>Number of clicks is: {{ clicks }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("counter", [
      "doubleCounter",
      "stringCounter",
      "counter",
      "clicks"
    ])
  }
};
</script>
