import Vue from "vue";
import VueRouter from "vue-router";
import Exercises from "../views/Exercises.vue";
import Exercise1 from "../components/exercises/Exercise1.vue";
import Exercise2 from "../components/exercises/Exercise2.vue";
import Exercise3 from "../components/exercises/Exercise3.vue";
import Exercise4 from "../components/exercises/Exercise4.vue";
import Exercise5 from "../components/exercises/Exercise5.vue";
import Exercise6 from "../components/exercises/exercise6";
import Exercise7 from "../components/exercises/exercise7";
import Exercise8 from "../components/exercises/exercise8";
import Exercise9 from "../components/exercises/exercise9";
import Exercise10 from "../components/exercises/exercise10";
import Exercise11 from "../components/exercises/exercise11";
import Projects from "../views/Projects.vue";
import TheMonsterSlayer from "../components/projects/monsterslayer";
import Quotes from "../components/projects/quotes";
// import Quotes from "../components/projects/quotes";
import Extras from "../views/Extras.vue";
import Animations from "../components/extras/animations";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/extras",
    component: Extras,
    children: [
      {
        path: "/extras/animations/",
        component: Animations
      }
    ]
  },
  {
    path: "/projects",
    component: Projects,
    children: [
      {
        path: "/projects/monsterslayer",
        component: TheMonsterSlayer
      },
      {
        path: "/projects/quotes",
        component: Quotes
      }
    ]
  },
  {
    path: "/exercises",
    component: Exercises,
    children: [
      {
        path: "/exercise/1",
        component: Exercise1
      },
      {
        path: "/exercise/2",
        component: Exercise2
      },
      {
        path: "/exercise/3",
        component: Exercise3
      },
      {
        path: "/exercise/4",
        component: Exercise4
      },
      {
        path: "/exercise/5",
        component: Exercise5
      },

      {
        path: "/exercise/6",
        component: Exercise6
      },
      {
        path: "/exercise/7",
        component: Exercise7
      },
      {
        path: "/exercise/8",
        component: Exercise8
      },
      { path: "/exercise/9", component: Exercise9 },
      { path: "/exercise/10", component: Exercise10 },
      { path: "/exercise/11", component: Exercise11 }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
