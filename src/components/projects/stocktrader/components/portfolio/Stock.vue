<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title text-left">
          <b>{{ stock.name }} </b>
          <small
            >Price: {{ stock.price | asCurrency }} | Quantity:
            {{ stock.quantity }}</small
          >
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{
              danger: insufficientQuantity || quantity < 0
            }"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-info"
            @click="sellStock"
            :disabled="insufficientQuantity || !isValidPositiveInteger"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    stock: {
      id: String,
      quantity: Number,
      price: Number,
      name: String
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    isValidPositiveInteger() {
      return (
        this.selectedQuantity <= 0 || Number.isInteger(this.selectedQuantity)
      );
    },
    insufficientQuantity() {
      return this.selectedQuantity > this.stock.quantity;
    },
    selectedQuantity() {
      return parseInt(this.quantity) || 0;
    }
  },
  methods: {
    ...mapActions("portfolio", ["sellStocks"]),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.selectedQuantity
      };
      this.sellStocks(order);
      this.quantity = 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
.danger {
  border: 1px solid red;
}
</style>
