import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import FormProduct from "../components/FormProduct.vue";
import User from "../components/User.vue";
import MainView from "../components/MainView.vue";
import ProductDetail from "../pages/ProductDetail.vue";

const routes = [
  { path: "/", name: "Accueil", component: Home },
  { path: "/shop", name: "Boutique", component: MainView },
  { path: "/formproduct", name: "Produits", component: FormProduct },
  {
    path: "/user",
    name: "Utilisateur",
    component: User,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Fonction de simulation d'authentification
function isUserAuthentificated() {
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // return true
  return localStorage.getItem("auth") === "true";
}

// Navigation Guard global
router.beforeEach((to, from, next) => {
  // Vérifie l'accès à la route "Utilisateur" nécessitant une authentification
  if (to.name === "Utilisateur" && !isUserAuthentificated()) {
    alert("Vous devez être connecté pour accéder à cette page.");
    next({ name: "Accueil" });
  } else {
    next();
  }
});

export default router;
