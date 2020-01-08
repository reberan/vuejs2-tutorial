<template>
  <div class="item" @click="serverSelected">
    <span>This is the server with id: {{ server.id }}</span>
  </div>
</template>

<script>
import { eventBus } from "../../../../../main";
export default {
  props: ["server"],
  data: function() {
    return {};
  },
  methods: {
    serverSelected() {
      eventBus.$emit("server:selected", this.server);
    }
  }
};
</script>

<style scoped lang="stylus">
.item
  cursor pointer
  height 30px
  border 1px solid black
  border-radius 5px
  background lightgrey
  padding 5px
  margin-top 5px
</style>
