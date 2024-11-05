<script setup>
import { ref } from 'vue';

// État réactif pour suivre l'état de connexion
const isLoggedIn = ref(false);

// Méthode pour basculer l'état de connexion
const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};
</script>

<template>
  <section class="bg-gray-800 p-4 sticky top-0">
    <div class="container mx-auto grid grid-cols-9 gap-4 items-center">
      <!-- Logo ou Titre (colonne 1, aligné à gauche) -->
      <div class="text-white text-lg font-bold col-start-1 col-end-2">
        DGA Market
      </div>

      <!-- Liens de navigation centrés (colonne 2) -->
      <div class="flex justify-center space-x-4 col-start-3 col-end-7">
        <button
          class="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 hover:text-white transition-colors duration-200"
        >
          Accueil
        </button>
        <button
          class="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 hover:text-white transition-colors duration-200"
        >
          A propos
        </button>
        <button
          class="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 hover:text-white transition-colors duration-200"
        >
          Utilisateur
        </button>
        <button
          class="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 hover:text-white transition-colors duration-200"
        >
          Produits
        </button>
      </div>

      <!-- Bouton de connexion/déconnexion aligné à droite -->
      <div class="flex space-x-4 col-start-8 col-end-9">
        <button
          v-if="!isLoggedIn"
          @click="toggleLogin"
          class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          Connexion
        </button>
        <button
          v-else
          @click="toggleLogin"
          class="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Connecté
        </button>
      </div>
    </div>
  </section>
</template>
