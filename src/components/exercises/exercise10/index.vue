<template>
  <div class="container">
    <h1>Exercise 10 (Directives)</h1>
    <div class="row">
      <div class="col-xs-12">
        <p class="task">
          1) Build a Custom Directive which works like v-on (Listen for Events)
        </p>
        <button
          v-myOnDirective:click="clicked"
          v-myOnDirective:mouseenter="mouseEnter"
          v-myOnDirective:mouseleave="mouseLeave"
          v-myOnDirective:mousemove="mouseMove"
          class="btn solution"
        >
          Click Me
        </button>
        &nbsp;
        <button v-myOnDirective:click="clear" class="btn btn-primary">
          Erase
        </button>
      </div>
      <div class="row solution">
        <div class="col-xs-12">
          <ul>
            <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: []
    };
  },
  directives: {
    myOnDirective: {
      bind(element, binding) {
        const event = binding.arg;
        const handler = binding.value;
        element.addEventListener(event, handler);
      }
    }
  },
  methods: {
    clear() {
      this.logs = [];
    },
    clicked() {
      this.logs.push("clicked");
    },
    mouseEnter() {
      this.logs.push("entered");
    },
    mouseLeave() {
      this.logs.push("left");
    },
    mouseMove() {
      this.logs.push("moved");
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
