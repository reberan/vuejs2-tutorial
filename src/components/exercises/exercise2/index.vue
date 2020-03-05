<template>
  <div class="container">
    <h1>Exercise 2</h1>
    <div class="row">
      <div class="col-xs-12">
        <div>
          <p class="task">1) Show an alert when the Button gets clicked</p>
          <button class="solultion" @click="alertMe">Show Alert</button>
        </div>
        <hr />
        <p class="task">
          2) Listen to the "keydown" event and store the value in a data
          property (hint: event.target.value gives you the value)
        </p>
        <div class="solution">
          <input type="text" @keydown="updateValue" />
          <p>{{ value }}</p>
        </div>
        <hr />
        <p class="task">
          3) Adjust the example from 2) to only fire if the "key down" is the
          ENTER key
        </p>
        <div class="solution">
          <input type="text" @keydown.enter="updateValue" />
          <p>{{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exercise2",

  data: function() {
    return { value: "" };
  },
  methods: {
    alertMe: () => alert("Alert Me!"),
    updateValue(event) {
      this.value = event.target.value;
    }
  }
};
</script>

<style scoped lang="stylus">
.task {
  color: blue;
}

.solution {
  color: green;
}
</style>
