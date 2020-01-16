<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <select v-model="alertAnimation" class="form-control">
          <option value="slide">Slide</option>
          <option value="fade">Fade</option>
        </select>
        <br /><br />
        <button class="btn btn-primary" @click="show = !show">
          Show Alert
        </button>
        <br /><br />
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition :name="alertAnimation" type="animation" appear>
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition
          enter-active-class="animated bounce"
          leave-active-class="animated shake"
        >
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">
            This is some Info
          </div>
          <div class="alert alert-warning" v-else key="warning">
            This is some Warning
          </div>
        </transition>

        <hr />

        <button class="btn-primary btn" @click="load = !load">
          Load / Renmove Element
        </button>
        <br /><br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @:css="false"
        >
          <div
            style="width: 300px; height: 100px; background-color: lightgreen"
            v-if="load"
          ></div>
        </transition>

        <hr />

        <button
          class="btn btn-primary"
          @click="
            selectedComponent =
              selectedComponent === 'success' ? 'danger' : 'success'
          "
        >
          Toggle components
        </button>
        <br /><br />
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr />
        <button class="btn btn-success" @click="addItem">
          Add
        </button>
        <br /><br />
        <ul class="list-group">
          <transition-group name="slide" mode="in-out">
            <li
              class="list-group-item"
              v-for="(n, index) in numbers"
              :key="n"
              style="cursor: pointer"
              @click="removeItem(index)"
            >
              {{ n }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Danger from "./components/DangerAlert";
import Success from "./components/SuccessAlert";
export default {
  components: { Danger, Success },
  data() {
    return {
      load: false,
      show: false,
      alertAnimation: "slide",
      elementWidth: 100,
      selectedComponent: "success",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    addItem() {
      const position = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(position, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(element) {
      this.elementWidth = 100;
      element.style.width = this.elementWidth + "px";
    },
    enter(element, done) {
      let round = 1;
      const interval = setInterval(() => {
        element.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter() {},
    enterCancelled() {},
    beforeLeave(element) {
      this.elementWidth = 300;
      element.style.width = this.elementWidth + "px";
    },
    leave(element, done) {
      let round = 1;
      const interval = setInterval(() => {
        element.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave() {},
    leaveCancelled() {}
  }
};
</script>

<style scoped lang="css">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity 1 */
}
.fade-leave-active {
  transition: opacity 1s;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
