<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>Your mail address is {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("auth/fetchUser");
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    }
  }
};
</script>
<style scoped>
h1,
p {
  text-align: center;
}
</style>
