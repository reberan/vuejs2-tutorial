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
import Superquiz from "../components/projects/superquiz";
import StockTrader from "../components/projects/stocktrader";
import StockTraderHome from "../components/projects/stocktrader/components/Home.vue";
import StockTraderPortfolio from "../components/projects/stocktrader/components/portfolio/Portfolio.vue";
import StockTraderStocks from "../components/projects/stocktrader/components/stocks/Stocks.vue";
import Extras from "../views/Extras.vue";
import Animations from "../components/extras/animations";
import Http from "../components/extras/http";
import Router from "../components/extras/routes";
import RoutingHeader from "../components/extras/routes/components/Header.vue";
import RoutingHome from "../components/extras/routes/components/Home.vue";
import Vuex from "../components/extras/vuex";
import Axios from "../components/extras/axios";
import WelcomePage from "../components/extras/axios/components/welcome/welcome.vue";
import DashboardPage from "../components/extras/axios/components/dashboard/dashboard.vue";
import SignupPage from "../components/extras/axios/components/auth/signup.vue";
import SigninPage from "../components/extras/axios/components/auth/signin.vue";

import store from "../store";

Vue.use(VueRouter);

// const User = resolve => {
//   require.ensure(
//     ["../components/extras/routes/components/user/User.vue"],
//     () => {
//       resolve(require("../components/extras/routes/components/user/User.vue"));
//     },
//     "user"
//   );
// };

// const UserStart = resolve => {
//   require.ensure(
//     ["../components/extras/routes/components/user/UserStart.vue"],
//     () => {
//       resolve(
//         require("../components/extras/routes/components/user/UserStart.vue")
//       );
//     },
//     "user"
//   );
// };

// const UserEdit = resolve => {
//   require.ensure(
//     ["../components/extras/routes/components/user/UserEdit.vue"],
//     () => {
//       resolve(
//         require("../components/extras/routes/components/user/UserEdit.vue")
//       );
//     },
//     "user"
//   );
// };

// const UserDetail = resolve => {
//   require.ensure(
//     ["../components/extras/routes/components/user/UserDetail.vue"],
//     () => {
//       resolve(
//         require("../components/extras/routes/components/user/UserDetail.vue")
//       );
//     },
//     "user"
//   );
// };

// Alternative Lazy Loading Syntax (for pörojects created with CLI 3+)
const User = () =>
  import("../components/extras/routes/components/user/User.vue");
const UserStart = () =>
  import("../components/extras/routes/components/user/UserStart.vue");
const UserEdit = () =>
  import("../components/extras/routes/components/user/UserEdit.vue");
const UserDetail = () =>
  import("../components/extras/routes/components/user/UserDetail.vue");

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
    redirect: "/extras/animations",
    children: [
      {
        path: "animations",
        component: Animations
      },
      {
        path: "http",
        component: Http
      },
      {
        path: "routing",
        component: Router,
        children: [
          {
            path: "home",
            component: RoutingHome,
            name: "routingHome"
          },
          {
            path: "user",
            components: {
              default: User,
              "header-bottom": RoutingHeader
            },
            children: [
              {
                path: "",
                component: UserStart
              },
              {
                path: "/extras/routing/user/:id",
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                  next();
                }
              },
              {
                path: "/extras/routing/user/:id/edit",
                component: UserEdit,
                name: "userEdit"
              }
            ]
          }
        ]
      },
      {
        path: "vuex",
        component: Vuex
      },
      {
        path: "axios",
        redirect: "/extras/axios/welcome",
        component: Axios,
        children: [
          { path: "welcome", component: WelcomePage },
          { path: "signup", component: SignupPage },
          { path: "signin", component: SigninPage },
          {
            path: "dashboard",
            component: DashboardPage,
            beforeEnter(to, from, next) {
              store.getters["auth/isAuthenticated"] ? next() : next(false);
            }
          }
        ]
      }
    ]
  },
  {
    path: "/projects",
    component: Projects,
    redirect: "/project/monsterslayer",
    children: [
      {
        path: "/project/monsterslayer",
        component: TheMonsterSlayer
      },
      {
        path: "/project/quotes",
        component: Quotes
      },
      {
        path: "/project/superquiz",
        component: Superquiz
      },
      {
        path: "/project/stocktrader",
        component: StockTrader,
        redirect: "/project/stocktrader/home",
        children: [
          { path: "home", component: StockTraderHome },
          {
            path: "portfolio",
            component: StockTraderPortfolio
          },
          {
            path: "stocks",
            component: StockTraderStocks
          }
        ]
      }
    ]
  },
  {
    path: "/exercises",
    component: Exercises,
    redirect: "/exercise/1",
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
      { path: "/exercise/11", component: Exercise11 },
      // In case nothing matches, go back to the root initial page
      { path: "*", redirect: "/" }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

// this happens before every transition
router.beforeEach((to, from, next) => {
  next();
});

export default router;
