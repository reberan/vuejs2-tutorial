<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End of Day' to begin a new day</h6>
    <hr />
    <p>Funds {{ funds | asCurrency }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("portfolio", ["funds"])
  }
};
</script>
