<template>
  <div class="container">
    <h1>Exercise 11 (Filters & Mixin)</h1>
    <div class="row">
      <div class="col-xs-12">
        <p class="task">
          1) Build a local Filter which reverses the Text it is applied on
        </p>
        <p class="solution">
          {{ textData | reversed }}
        </p>
        <hr />
        <p class="task">
          2) Build a global Filter which counts the length of a word and it
          appends it
        </p>
        <p class="task">Like this: "Test" => Gets Filtered to => "Test (4)"</p>
        <p class="solution">
          {{ textData | addLength }}
        </p>
        <hr />
        <p class="task">
          3) Do the same as in Exercises 1 & 2, now with Computed Properties
        </p>
        <div class="solution">
          <p>{{ reversedTextData }}</p>
          <p>{{ addLengthToTextData }}</p>
        </div>
        <hr />
        <p class="task">
          4) Share the Computed Property rebuilding Exercise 2 via a Mixin
        </p>
        <div class="solution">
          <p>{{ reversedTextDataMixin }}</p>
          <p>{{ addLengthToTextDataMixin }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textData: "This is my textData"
    };
  },
  filters: {
    reversed(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reversedTextData() {
      return this.textData
        .split("")
        .reverse()
        .join("");
    },
    addLengthToTextData() {
      return `${this.textData} (${this.textData.length})`;
    }
  }
};
</script>

<style scoped lang="stylus">
.solution {
  color: green;
}

.task {
  color: blue;
}
</style>
