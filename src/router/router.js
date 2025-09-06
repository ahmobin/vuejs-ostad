import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "aboutus",
    component: About,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/contact",
    component: Contact
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes, // also can write only routes, it array name is routes
});

export default router