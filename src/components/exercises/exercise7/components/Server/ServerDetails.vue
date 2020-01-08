<template>
  <div class="col-xs-12 col-sm-6 item">
    <h1>Server Details</h1>
    <p>
      The server (id: {{ server.id }}) is in the current status:
      <span :class="server.status">{{ server.status }}</span>
    </p>
    <button v-show="server.status !== 'Normal'" @click="resetStatus(id)">
      Change back to normal
    </button>
  </div>
</template>

<script>
import { eventBus } from "../../../../../main";
export default {
  props: ["server"],
  methods: {
    resetStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    eventBus.$on("server:selected", server => {
      this.server = server;
    });
  }
};
</script>

<style scoped lang="stylus">
.item
  border 1px solid black
  border-radius 5px
  background lightgrey
  padding 5px
  margin-top 5px
span
    font-weight bolder
.Normal
  color green
.Critical
    color red
.Unknown
    color brown
</style>
