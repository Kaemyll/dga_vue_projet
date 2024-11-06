<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useManageProducts, productKey } from './composables/manageProducts';

// État d'authentification
const isAuthenticated = ref(localStorage.getItem("auth") === "true");

// Fonction pour basculer l'état d'authentification
function toggleAuth() {
  isAuthenticated.value = !isAuthenticated.value;
  if (isAuthenticated.value) {
    localStorage.setItem("auth", "true");
  } else {
    localStorage.removeItem("auth");
  }
}

// Fournir l'état d'authentification et la fonction de bascule
provide("isAuthenticated", isAuthenticated);
provide("toggleAuth", toggleAuth);

// Fournit l’état des produits au niveau de l'application
useManageProducts();  // Cette fonction fait déjà `provide(productKey, ...)`

</script>
