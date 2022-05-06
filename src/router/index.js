import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";
import About from "../views/about.vue";
import Contact from "../views/contact.vue";
import Products from "../views/products.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
  ],
});

export default router;
