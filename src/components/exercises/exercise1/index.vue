<template>
  <div class="container">
    <h1>Exercise 1</h1>
    <div class="row">
      <div class="col-xs-12">
        <p class="task">
          1) Fill the below with your Name and Age - using Interpolation --
        </p>
        <p class="solution">{{ myName + " and my age is " + myAge }}</p>
        <hr />

        <p class="task">2) Output your age, multiplied by 3</p>
        <p class="solution">{{ myAge * 3 }}</p>
        <hr />

        <p class="task">
          3) Call a function to output a random float between 0 and 1
          (Math.random()) />
        </p>
        <p class="solution">{{ getRandomNumber }}</p>
        <hr />

        <p class="task">
          4) Search any image on Google and output it here by binding the "src"
          attribute
        </p>
        <div class="solution">
          <img
            style="width:100px;height:100px"
            v-bind:src="myPictureUrl"
            alt="My Picture"
          />
        </div>
        <hr />

        <p class="task">
          5) Pre-Populate this input with your name (set the "value" attribute)
        </p>
        <div class="solution">
          <input type="text" v-bind:value="myAge" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exercise1",

  data: function() {
    return {
      myName: "Andrea",
      myAge: 37,
      myPictureUrl:
        "https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"
    };
  },
  computed: {
    myAgeMultiplied() {
      return this.myAge * 3;
    },
    getRandomNumber() {
      return Math.random(0, 1);
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
