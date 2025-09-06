import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";
import InfoComponent from "../Component/InfoComponent.vue";

const routes = [
  {
    path: "/",
    name: "home", // named route
    component: Home
  },
  {
    path: "/home",
    redirect: "/"
    //redirect: {name:"home"}
  },
//  {
//    path: "/about",
//    name: "aboutus",
//    component: About,
//  },
  {
    path: "/about",
    name: "aboutus",
    components: {
      default: About,
      "info-section": InfoComponent // named component
    },
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