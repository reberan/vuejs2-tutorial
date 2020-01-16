<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your mail address {{ email }}</p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: ""
    };
  },
  async created() {
    const response = await axios.get("/users.json").catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
    const { data } = response;
    const users = [];
    for (let key in data) {
      const user = Object.assign({}, data[key], { id: key });
      users.push(user);
    }
    // eslint-disable-next-line no-console
    console.log("TCL: created -> users", users);
    this.email = users.length ? users[0].email : "";
  }
};
</script>
<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>
