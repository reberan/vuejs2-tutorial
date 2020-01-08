<template>
  <div class="container">
    <h1>Exercise 3</h1>
    <div class="row">
      <div class="col-xs-12">
        <p class="task">
          1) Show a "result" of 'not there yet' as long as "value" is not equal
          to 37 - you can change "value" with the buttons. Print 'done' once you
          did it
        </p>
        <div class="solution">
          <p>Current Value: {{ value }}</p>
          <button @click="value += 5">Add 5</button>
          <button @click="value += 1">Add 1</button>
          <p>{{ result }}</p>
        </div>
        <hr />
        <p class="task">
          2) Watch for changes in the "result" and reset the "value" after 5
          seconds (hint: setTimeout(..., 5000)
        </p>
        <div class="solution">
          <input type="text" placeholder="do we need this ?" />
          <p>{{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exercise3",
  data: function() {
    return {
      value: 0
    };
  },
  computed: {
    result: function() {
      return this.value !== 37 ? "not there yet" : "done";
    }
  },
  watch: {
    value: function() {
      setTimeout(() => (this.value = 0), 5000);
    }
  }
};
</script>

<style scoped lang="stylus">
.task
  color blue
.solution
  color green
</style>
