<template>
  <div>
    <List />
    <Details />
  </div>
</template>

<script>
import List from "./ServerList";
import Details from "./ServerDetails";
export default {
  components: { List, Details }
};
</script>
