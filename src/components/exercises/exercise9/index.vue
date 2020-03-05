<template>
  <div class="container">
    <h1>Exercise 9 (Forms)</h1>

    <div class="row">
      <div class="col-xs-12">
        <p class="task">
          1) Create a Signup Form where you retrieve the following Information
        </p>
        <p class="task">Full Name (First Name + Last Name)</p>
        <p class="task">Mail</p>
        <p class="task">Password</p>
        <p class="task">Store Data? Yes/No</p>
        <hr />

        <p class="task">
          2) Only display the Form if it has NOT been submitted
        </p>
        <p class="task">
          Display the Data Summary ONCE the Form HAS been submitted
        </p>

        <hr />

        <p class="task">
          3) Edit the Example from above and create a custom "Full Name" Control
        </p>
        <p class="task">
          which still holds the First Name and Last Name Input Field
        </p>
      </div>
    </div>

    <hr />
    <div class="row">
      <div class="col-xs-12 solution">
        <div class="panel panel-default" v-if="!isSubmitted">
          <div class="panel-heading">
            <h4>Form</h4>
          </div>
          <div class="panel-body">
            <form @submit.prevent="submitForm">
              <div>
                <fullname v-model="formData.fullname"></fullname>
              </div>
              <div class="item">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="formData.email" />
              </div>
              <div class="item">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  v-model="formData.password"
                />
              </div>
              <div class="item">
                <label for="storeData">Store Data ?</label>
                <input
                  id="storeData"
                  type="checkbox"
                  v-model="formData.shouldStore"
                />
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="panel panel-default" v-if="isSubmitted">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ formData.fullname }}</p>
            <p>Mail: {{ formData.email }}</p>
            <p>Password:{{ formData.password }}</p>
            <p>Store in Database?: {{ formData.shouldStore }}</p>
            <button class="btn btn-primary" @click="resetForm">Reset</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fullname from "./components/Fullname.vue";
export default {
  components: { Fullname },
  data() {
    return {
      formData: {
        fullname: "FNAME LNAME",
        email: "",
        password: "",
        shouldStore: false
      },
      isSubmitted: false
    };
  },
  methods: {
    submitForm() {
      this.isSubmitted = true;
    },
    resetForm() {
      this.formData = {
        fullname: "",
        email: "",
        password: "",
        shouldStore: false
      };
      this.isSubmitted = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.solution {
  color: green;
}
</style>
