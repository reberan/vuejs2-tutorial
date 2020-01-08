<template>
  <div>
    <h3>Response</h3>
    <p v-if="isCorrect">Congrats your answer is correct</p>
    <p v-else>
      Nope! That's wrong. The correct answer is {{ getCorrectAnswerText }}
    </p>
    <button class="btn btn-primary" @click="nextQuestion">Proceed</button>
  </div>
</template>

<script>
export default {
  props: {
    trial: {
      question: String,
      answers: Array
    },
    isCorrect: Boolean
  },
  computed: {
    getCorrectAnswerText() {
      const answer = this.trial.answers.filter(answer => answer.isCorrect)[0];
      return answer.text || "N/A";
    }
  },
  methods: {
    nextQuestion() {
      this.$emit("nextTrial");
    }
  }
};
</script>

<style scoped></style>
