<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/project/stocktrader"
          >Stock Trader</router-link
        >
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link
            active-class="active"
            tag="li"
            to="/project/stocktrader/portfolio"
            ><a>Portfolio</a></router-link
          >
          <router-link
            active-class="active"
            tag="li"
            to="/project/stocktrader/stocks"
            ><a>Stocks</a></router-link
          >
        </ul>
        <strong class="navbar-text navbar-right"
          >Funds: {{ funds | asCurrency }}</strong
        >
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="randomizeStocks">End Day</a></li>
          <li
            class="dropdown"
            :class="{ open: isDropdownOpened }"
            @click="isDropdownOpened = !isDropdownOpened"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpened: false
    };
  },
  computed: {
    ...mapGetters("portfolio", ["funds", "stockPortfolio"]),
    ...mapGetters("stocks", ["stocks"])
  },
  methods: {
    ...mapActions("stocks", ["randomizeStocks", "initStocks"]),
    ...mapActions("portfolio", ["initPortfolio"]),
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks
      };
      this.$http.put("data.json", data).then(response => {
        return response.json();
      });
    },
    loadData() {
      this.$http
        .get("data.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { funds, stockPortfolio, stocks } = data;
          this.initStocks(stocks);
          this.initPortfolio({ funds, stocks: stockPortfolio || [] });
        }),
        error => {
          console.err("loadData -> error ", error);
        };
    }
  }
};
</script>
