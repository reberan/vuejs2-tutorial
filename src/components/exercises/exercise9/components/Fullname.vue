<template>
  <div>
    <div>
      <label>First Name</label>
      <input
        type="text"
        v-bind:value="firstName"
        v-on:input="onFirstNameChange"
      />
    </div>
    <div>
      <label>Last Name</label>
      <input
        type="text"
        v-bind:value="lastName"
        v-on:input="onLastNameChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    onFirstNameChange(event) {
      this.value = event.target.value + " " + this.lastName;
      this.$emit("input", this.value);
    },
    onLastNameChange(event) {
      this.value = this.firstName + " " + event.target.value;
      this.$emit("input", this.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0] || "";
    },
    lastName() {
      return this.value.split(" ")[1] || "";
    }
  }
};
</script>
