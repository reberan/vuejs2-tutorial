<template>
  <div>
    <p>Current Stock Value: {{ currentStocksValue | asCurrency }}</p>
    <Stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  components: { Stock },
  computed: {
    ...mapGetters("portfolio", ["currentStocksValue", "stockPortfolio"])
  }
};
</script>
