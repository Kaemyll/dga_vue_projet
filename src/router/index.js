import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import FormProduct from "../components/FormProduct.vue";
import User from "../components/User.vue";
import MainView from "../components/MainView.vue";

const routes = [
    { path: "/", name: "Accueil", component: Home},
    { path: "/shop", name: "Boutique", component: MainView},
    { path: "/formproduct", name: "Produits", component: FormProduct},
    { path: "/user", name: "Utilisateur", component: User}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;