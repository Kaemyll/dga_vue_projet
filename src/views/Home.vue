<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import ProductList from "../components/ProductList.vue";
import Footer from "../components/Footer.vue";

// Déclaration des données réactives
const parentMessage = ref("Message du parent");
const childMessage = ref("");

// Méthode pour gérer l'événement enfant
function handleChildEvent(data) {
  childMessage.value = data;
}
</script>

<template>
  <div className="flex flex-col min-h-screen">
    <Navbar :message="parentMessage" @childEvent="handleChildEvent" />
    <p className="text-center">{{ childMessage }}</p>
    <Hero />
    <ProductList />
    <Footer />
    <!-- Affiche le message de l'enfant -->

  </div>
</template>

  