<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <Header />
      </div>
    </div>
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
  components: { Header, Body, Footer }
};
</script>
