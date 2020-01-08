<template>
  <div>
    <h3>Game Over</h3>
    <p>
      You answered correctly to {{ correctAnswers }} over {{ totalAnswers }} ({{
        getPercentageOfCorrectAnswers
      }}%).
    </p>
    <br />
    <br />
    <button class="btn btn-primary" @click="restartGame">Restart</button>
  </div>
</template>

<script>
export default {
  props: {
    correctAnswers: Number,
    totalAnswers: Number
  },

  computed: {
    getPercentageOfCorrectAnswers() {
      return this.totalAnswers
        ? (100 * this.correctAnswers) / this.totalAnswers
        : 0;
    }
  },
  methods: {
    restartGame() {
      this.$emit("restartGame");
    }
  }
};
</script>

<style scoped></style>
