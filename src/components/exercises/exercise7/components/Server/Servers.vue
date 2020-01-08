<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <ServerItem v-for="server in servers" :server="server" :key="server.id">
      </ServerItem>
    </ul>
  </div>
</template>

<script>
import ServerItem from "./ServerItem.vue";
export default {
  components: { ServerItem },
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Unknown" },
        { id: 3, status: "Critical" },
        { id: 4, status: "Unknown" },
        { id: 5, status: "Normal" },
        { id: 6, status: "Critical" },
        { id: 7, status: "Unknown" },
        { id: 8, status: "Normal" }
      ]
    };
  }
};
</script>
