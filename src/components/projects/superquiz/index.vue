<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">Super Quiz</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <transition name="flip" mode="out-in">
          <trial
            v-if="!gameIsOver && !selectedAnswer"
            :trial="currentTrialObject"
            :index="currentTrial + 1"
            @answerSelected="processAnswer"
          ></trial>
          <response
            v-if="selectedAnswer"
            :trial="currentTrialObject"
            :isCorrect="selectedAnswer.isCorrect"
            @nextTrial="proceedToNextTrial"
          ></response>
          <game-over
            v-if="gameIsOver"
            :correctAnswers="correctAnswers"
            :totalAnswers="trials.length"
            @restartGame="restartGame"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Trial from "./components/Trial.vue";
import Response from "./components/Response.vue";
import GameOver from "./components/GameOver.vue";
export default {
  components: { Trial, Response, GameOver },
  data() {
    return {
      currentTrial: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      selectedAnswer: null,
      trials: [
        {
          question: "What is the capital of Switzerland ?",
          answers: [
            {
              text: "Bern",
              isCorrect: true
            },
            {
              text: "Chur",
              isCorrect: false
            },
            {
              text: "Zürich",
              isCorrect: false
            },
            {
              text: "Lausanne",
              isCorrect: false
            }
          ]
        },
        {
          question: "What is the result of 5! ?",
          answers: [
            {
              text: 120,
              isCorrect: true
            },
            {
              text: 25,
              isCorrect: false
            },
            {
              text: 5,
              isCorrect: false
            },
            {
              text: 20,
              isCorrect: false
            }
          ]
        },
        {
          question: "What is the color of the white horse of Napoleon ?",
          answers: [
            {
              text: "Brown",
              isCorrect: false
            },
            {
              text: "White",
              isCorrect: true
            },
            {
              text: "Black",
              isCorrect: false
            }
          ]
        },
        {
          question:
            "San Bernardino is the name of a place that can be found in both of the following countries: Switzerland and USA.",
          answers: [
            {
              text: "True",
              isCorrect: true
            },
            {
              text: "False",
              isCorrect: false
            }
          ]
        }
      ]
    };
  },
  computed: {
    amountOfTrials() {
      return this.trials.length;
    },
    currentTrialObject() {
      return this.trials[this.currentTrial];
    },
    gameIsOver() {
      return this.currentTrial >= this.amountOfTrials;
    }
  },
  methods: {
    restartGame() {
      this.currentTrial = 0;
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      this.selectedAnswer = null;
    },
    processAnswer(answer) {
      answer.isCorrect ? this.correctAnswers++ : this.wrongAnswers++;
      this.selectedAnswer = answer;
    },
    proceedToNextTrial() {
      this.currentTrial++;
      this.selectedAnswer = null;
    }
  }
};
</script>

<style scoped lang="css">
.flip-enter {
  opacity: 0;
}
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}
.flip-leave {
}
.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
