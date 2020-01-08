<template>
  <div class="container">
    <h1>Exercise 6</h1>
    <div class="row">
      <div class="col-xs-12">
        <Header />
      </div>
    </div>
    <hr />
    <div class="row">
      <Body />
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "Exercise6",
  components: {
    Header,
    Body,
    Footer
  },
  data: function() {
    return {};
  }
};
</script>
