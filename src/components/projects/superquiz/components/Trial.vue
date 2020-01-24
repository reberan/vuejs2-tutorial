<template>
  <div class="row text-center">
    <h3>Question {{ index }}</h3>
    <p>{{ trial.question }}</p>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="answer in trial.answers"
        :key="answer.text"
        style="cursor: pointer"
        @click="selectAnswer(answer)"
      >
        {{ answer.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    trial: {
      question: String,
      answers: Array
    }
  },
  methods: {
    selectAnswer(answer) {
      this.$emit("answerSelected", answer);
    }
  }
};
</script>

<style scoped></style>
