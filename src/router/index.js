import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalenderView from "../views/CalendarView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
      /*       children:[
        {path:'/calender', component: CalenderView},
      ] */
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/calender",
      name: "calender",
      component: CalenderView,
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
    {
      path: "/123",
      name: "test",
      component: () =>
        import(/* webpackChunkName: "teSt" */ "../views/123/teSt.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  console.log("isLogin", isLogin);
  if (isLogin || to.name === "LoginView" || to.name === "RegisterView") {
    next();
  } else {
    next({ name: "LoginView" });
  }
});
export default router;
