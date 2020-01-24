<template>
  <div class="container">
    <h1>Exercise 4</h1>
    <div class="row">
      <div class="col-xs-12">
        <p class="task">
          1) Start the Effect with the Button. The Effect should alternate the
          "highlight" or "shrink" class on each new setInterval tick (attach
          respective class to the div with id "effect" below)
        </p>
        <div class="solution">
          <button @click="startEffect">Start Effect</button>
          <div id="effect" :class="effectClass"></div>
        </div>
        <hr />
        <p class="task">
          2) Create a couple of CSS classes and attach them via the array syntax
        </p>
        <div class="solution" :class="arrayClasses">I got no class :(</div>
        <hr />
        <p class="task">
          3) Let the user enter a class (create some example classes) and attach
          it
        </p>
        <div class="solution">
          <input
            type="text"
            placeholder="e.g., 1, 2, 3, 4 or 5"
            @input="attachClass"
          />
          <div class="solution" :class="attachedClass">Loren ipsum...</div>
        </div>
        <hr />
        <p class="task">
          4) Let the user enter a class and enter true/ false for another class
          (create some example classes) and attach the classes
        </p>
        <div class="solution">
          <input
            type="text"
            v-model="enteredClassName"
            placeholder="e.g., testClass1"
          />
          <input type="checkbox" v-model="isEnteredClassActive" />
          <div
            class="solution"
            :class="[isEnteredClassActive ? enteredClassName : '']"
          ></div>
        </div>
        <hr />
        <p class="task">
          5) Repeat 3) but now with values for styles (instead of class names).
          Attach the respective styles.
        </p>
        <div class="solution">
          <input
            type="text"
            :style="attachedStyle"
            placeholder="e.g., 1, 2, 3, 4 or 5"
            @input="attachStyle"
          />
        </div>
        <hr />
        <p class="task">
          6) Create a simple progress bar with setInterval and style bindings.
          Start it by hitting the below button.
        </p>
        <div class="solution">
          <button @click="isProgressBarRunning = !isProgressBarRunning">
            Start Progress
          </button>
          <div class="progressbar" :style="progressbarStatus">
            {{ currentProgress / 10 }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exercise4",
  data: function() {
    return {
      isEffectRunning: false,
      effectClass: null,
      attachedClass: "",
      attachedStyle: {},
      enteredClassName: "",
      isEnteredClassActive: false,
      isProgressBarRunning: false,
      currentProgress: 0
    };
  },
  computed: {
    arrayClasses() {
      return [
        "testClass1",
        "testClass2",
        {
          shrink: this.effectClass === "shrink",
          highlight: this.effectClass === "hightlight"
        }
      ];
    },
    progressbarStatus() {
      return {
        color: "yellow",
        fontWeigh: "bolder",
        background: "red",
        textAlign: "center",
        borderRadius: "15px",
        height: "25px",
        width: `${this.currentProgress}px`
      };
    }
  },
  methods: {
    startEffect() {
      this.isEffectRunning = true;
    },
    attachStyle(event) {
      this.attachedStyle = {
        width: `${event.target.value + 50}px`,
        height: `${event.target.value + 50}px`,
        background: "red",
        borderRadius: `${event.target.value * 5}px`,
        border: `${event.target.value / 100}px`
      };
    },
    attachClass(event) {
      this.attachedClass = `testClass${event.target.value}`;
    }
  },
  watch: {
    isProgressBarRunning: function() {
      setInterval(() => {
        if (this.currentProgress >= 1000) {
          this.currentProgress = 0;
        } else {
          const increment = 1 + Math.round(Math.random() * 100);
          if (this.currentProgress + increment < 1000) {
            this.currentProgress += increment;
          } else {
            this.currentProgress = 1000;
          }
        }
      }, 1000);
    },

    isEffectRunning: function() {
      setInterval(
        () =>
          (this.effectClass =
            !this.effectClass || this.effectClass === "shrink"
              ? "hightlight"
              : "shrink"),
        1000
      );
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

#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background: blue;
  width: 200px !important;
}

.shrink {
  background: gray;
  width: 50px !important;
}

.testClass1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 100;
  font-size: 10px;
  font-style: normal;
  width: 100px;
  color: azure;
  background: blue;
  height: 30px;
}

.testClass2 {
  font-family: 'Times New Roman', Times, serif;
  font-weight: 200;
  font-size: 12;
  font-style: italic;
  width: 150px;
  color: pink;
  background: red;
  height: 30px;
}

.testClass3 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 300;
  font-size: 14;
  font-style: oblique;
  width: 200px;
  color: tomato;
  background: yellow;
  height: 30px;
}

.testClass4 {
  font-family: Verdana, Tahoma, sans-serif;
  font-weight: 400;
  font-size: 16;
  font-style: initial;
  width: 250px;
  color: olive;
  background: brown;
  height: 30px;
}

.testClass5 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  font-size: 18;
  font-style: inherit;
  width: 300px;
  color: orange;
  background: black;
  height: 30px;
}
</style>
