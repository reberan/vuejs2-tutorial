<template>
  <div class="exercise5">
    <h1>TheMonsterSlayer</h1>
    <div class="game">
      <div id="participants">
        <div id="player" :style="{ width: `${playerLife}%` }">
          Player: {{ playerLife }}
        </div>
        <div id="monster" :style="{ width: `${monsterLife}%` }">
          Monster : {{ monsterLife }}
        </div>
      </div>
      <div id="commands">
        <button
          v-if="status !== 'in_progress'"
          class="action"
          @click="handleAction(0)"
        >
          Start a new game
        </button>
        <div v-else>
          <button class="action" @click="handleAction(1)">Attack</button>
          <button class="action" @click="handleAction(2)">Special Skill</button>
          <button class="action" @click="handleAction(3)">Heal</button>
          <button class="action" @click="handleAction(4)">Resign</button>
        </div>
      </div>
      <div id="logs">
        <div v-if="battleLog.length > 0">
          <div
            v-for="(action, index) of battleLog"
            :key="index"
            :style="{ color: index % 2 === 0 ? 'blue' : 'red' }"
          >
            {{ action }}
          </div>
        </div>
        <div v-else>No logs for the moment</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      playerLife: 100,
      monsterLife: 100,
      status: "new",
      battleLog: []
    };
  },
  methods: {
    handleAction(action) {
      if (action === 0) {
        this.battleLog = [];
        this.status = "in_progress";
        this.playerLife = 100;
        this.monsterLife = 100;
      } else if (action === 4) {
        this.status = "lost";
      } else if (action === 3) {
        this.playerLife = Math.min(
          100,
          this.playerLife + action + this.generateRandomValue()
        );
        this.monsterLife = Math.min(
          100,
          this.monsterLife + action + this.generateRandomValue()
        );
      } else {
        this.playerLife -= action + this.generateRandomValue();
        this.monsterLife -= action + this.generateRandomValue();
      }
      this.updateGameStatus();
    },

    generateRandomValue() {
      return Math.round(Math.random(1, 10) * 10);
    },

    updateGameStatus() {
      if (this.playerLife <= 0 && this.monsterLife <= 0) {
        this.status = "draw";
      }
      if (this.playerLife > 0 && this.monsterLife < 0) {
        this.status = "won";
      }
      if (this.playerLife <= 0 && this.monsterLife > 0) {
        this.status = "lost";
      }
    }
  },

  watch: {
    playerLife(current, old) {
      this.battleLog.push(
        old > current
          ? `The monster hits the player dealing ${old - current} damages.`
          : `The player healed for ${current - old} points.`
      );
    },
    monsterLife(current, old) {
      this.battleLog.push(
        old > current
          ? `The player hits the monster dealing ${old - current} damages.`
          : `The monster healed for ${current - old} points.`
      );
    },
    status(current) {
      switch (current) {
        case "won":
        case "lost":
        case "draw":
          alert(current);
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped lang="stylus">
#participants
 color white
#monster
  background red
#player
  background blue
.task
  color blue
.solution
  color green
</style>
