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
          <router-link to="/"> Accueil </router-link>
        </button>
        <button
          class="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 hover:text-white transition-colors duration-200"
        >
          <router-link :to="{ name: 'Boutique' }"> Boutique </router-link>
        </button>
        <button
          class="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 hover:text-white transition-colors duration-200"
        >
          <router-link to="/formproduct"> Ajout Produit </router-link>
        </button>
        <button
          class="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 hover:text-white transition-colors duration-200"
        >
          <router-link to="/user"> Utilisateur </router-link>
        </button>
      </div>

      <!-- Bouton de connexion/déconnexion aligné à droite -->
      <div class="flex space-x-4 col-start-8 col-end-9">
        <button
          @click="toggleAuth"
          :class="[
            'px-4 py-2 rounded font-semibold text-white transition-colors duration-200',
            isAuthenticated
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-blue-500 hover:bg-blue-600',
          ]"
        >
          {{ isAuthenticated ? "Déconnexion" : "Connexion" }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, inject } from "vue";

const isAuthenticated = inject("isAuthenticated");
const toggleAuth = inject("toggleAuth");
</script>