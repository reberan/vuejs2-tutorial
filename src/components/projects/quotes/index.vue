<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">Quotes</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <Header :quoteCount="quoteCount" :maxQuotes="maxQuotes" />
        <hr />
        <new-quote @quoteAdded="newQuote" />
        <hr />
        <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: click on a quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  components: { QuoteGrid, NewQuote, Header },

  data: function() {
    return {
      maxQuotes: 10,
      quotes: ["Just a sample Quote"]
    };
  },
  computed: {
    quoteCount() {
      return this.quotes.length;
    }
  },
  methods: {
    newQuote(quote) {
      if (this.quoteCount < this.maxQuotes) {
        this.quotes.push(quote);
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style></style>
