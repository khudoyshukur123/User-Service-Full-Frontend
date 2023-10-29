import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/users",
      name: "users",
      component: () => import("./components/users")
    },
    {
      path: "/users/:id",
      name: "users-editing",
      component: () => import("./components/editingUser")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/addUser")
    }
  ]
});
