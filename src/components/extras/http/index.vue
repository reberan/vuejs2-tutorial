<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <div class="form-group">
          <label>Node</label>
          <input type="text" class="form-control" v-model="node" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <button class="btn-primary btn" @click="fetchData">Fetch</button>
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, n, i) in users" :key="i">
            {{ i + 1 }}. {{ u.username }} - {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: null,
      resource: {},
      node: "data"
    };
  },
  methods: {
    created() {
      const customActions = {
        saveAlt: { method: "POST", url: "alternative.json" },
        getData: { method: "GET" }
      };
      this.resource = this.$resource("{node}.json", {}, customActions);
    },
    submit() {
      this.$http.post(`${this.node}.json`, this.user).then(
        response => {
          console.log("TCL: submit -> response", response);
        },
        error => {
          console.log("TCL: submit -> error", error);
        }
      );
      // Alternative using this.resource
      // this.resource.saveAlt(this.user);
    },
    fetchData() {
      this.$http
        .get(`${this.node}.json`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.users = data;
        }),
        error => {
          console.log("TCL: fetchData -> error", error);
        };

      // Alternative using this.resource
      /*
      this.resource
        .getData({ node: this.node })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.users = data;
        });
        */
    }
  }
};
</script>

<style scoped lang="css"></style>
