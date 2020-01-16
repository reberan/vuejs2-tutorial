<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title text-left">
          <b>{{ stock.name }} </b>
          <small>Price: {{ stock.price | asCurrency }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: !isAffordable || quantity < 0 }"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="!isPositiveQuantity || !isAffordable"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    stock: {
      id: Number,
      name: String,
      price: Number
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters("portfolio", ["funds"]),
    selectedQuantity() {
      return parseInt(this.quantity || 0);
    },
    isPositiveQuantity() {
      return (
        this.selectedQuantity > 0 && Number.isInteger(this.selectedQuantity)
      );
    },
    isAffordable() {
      return this.funds >= this.selectedQuantity * this.stock.price;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.selectedQuantity
      };
      this.$store.dispatch("portfolio/buyStock", order);
    }
  }
};
</script>

<style lang="stylus" scoped>
.danger {
  border: 1px solid red;
}
</style>
