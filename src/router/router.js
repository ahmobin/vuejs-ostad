import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes, // also can write only routes, it array name is routes
});