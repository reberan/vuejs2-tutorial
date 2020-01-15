<template>
  <div>
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></Stock>
  </div>
</template>
<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";
export default {
  components: { Stock },
  computed: {
    ...mapGetters("stocks", ["stocks"])
  }
};
</script>
