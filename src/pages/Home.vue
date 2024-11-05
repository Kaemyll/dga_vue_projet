<script setup>
import { ref } from "vue";
import MainNavbar from "../components/Navbar.vue";
import MainView from "../components/MainView.vue";
import MainFooter from "../components/Footer.vue";

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
    <MainNavbar />
    <MainView />
    <MainFooter />
    <!-- Affiche le message de l'enfant -->
  </div>
</template>

  