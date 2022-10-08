import { createRouter, createWebHistory } from "vue-router";
import CalenderView from "../views/CalendarView.vue";
import TodaytaskView from "../views/TodaytaskView.vue";
import RecentView from "../views/RecentView.vue";
import FutureView from "../views/FutureView.vue";
import TypeView from "../views/TypeView.vue";
import AllView from "../views/AllView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      redirect: "/todaytask",
    },
    {
      path: "/calender",
      name: "calender",
      component: CalenderView,
    },
    {
      path: "/todaytask",
      name: "todaytask",
      component: TodaytaskView,
    },
    {
      path: "/recent",
      name: "recent",
      component: RecentView,
    },
    {
      path: "/future",
      name: "future",
      component: FutureView,
    },
    {
      path: "/all",
      name: "all",
      component: AllView,
    },
    {
      path: "/type/:type",
      name: "type",
      component: TypeView,
      props: true,
    },
    {
      path: "/login",
      name: "LoginView",
      component: () =>
        import(
          /* webpackChunkName: "LoginView" */ "../views/Login/LoginView.vue"
        ),
    },
    {
      path: "/register",
      name: "RegisterView",
      component: () =>
        import(
          /* webpackChunkName: "RegisterView" */ "../views/register/registerView.vue"
        ),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  console.log("isLogin", isLogin);
  console.log(to.name);
  if (isLogin || to.name === "LoginView" || to.name === "RegisterView") {
    next();
  } else {
    console.log("aaaa");
    next({ name: "LoginView" });
  }
});
export default router;
