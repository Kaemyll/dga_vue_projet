<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4 text-center">
      Bienvenue sur DGA Market
    </h1>

    <!-- Section "De quoi s'agit-il ?" -->
    <section
      class="bg-blue-100 p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500 max-w-2xl mx-auto"
    >
      <h2 class="text-2xl font-semibold mb-2 text-gray-800">
        De quoi s'agit-il ?
      </h2>
      <p class="text-gray-700 text-sm leading-relaxed">
        Ce projet est le fil rouge de la formation Vue 3 organisée par Orsys du
        04 au 06 novembre 2024. Il a été développé sous la supervision de notre
        formateur, Yohann Loic Ravino, et a pour objectif de mettre en pratique
        les concepts clés de Vue 3, ainsi que d'explorer des fonctionnalités
        avancées telles que la gestion d'état, les stores, les navigation
        guards, le routing et les bonnes pratiques de développement.
      </p>
    </section>

    <!-- Section des liens utiles -->
    <section
      class="bg-blue-100 p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500 max-w-2xl mx-auto"
    >
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Liens Utiles</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          v-for="link in usefulLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition"
        >
          <h3 class="text-lg font-semibold text-blue-600 hover:underline">
            {{ link.title }}
          </h3>
          <p class="text-gray-600 text-sm">{{ link.description }}</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Liens utiles pour Vue et ses bibliothèques associées
const usefulLinks = ref([
  {
    title: "Vue 3 Documentation",
    url: "https://v3.vuejs.org/",
    description: "Documentation officielle de Vue 3.",
  },
  {
    title: "Awesome Vue 3",
    url: "https://github.com/vuejs/awesome-vue",
    description: "Une collection de ressources et projets Vue 3.",
  },
  {
    title: "Pinia - Vue Store",
    url: "https://pinia.vuejs.org/",
    description: "Gestion d'état avec Pinia pour Vue 3. (a.k.a. Vuex5)",
  },
  {
    title: "Vuex",
    url: "https://vuex.vuejs.org/",
    description: "Gestion d'état officielle pour Vue. (dernière version: 4)'",
  },
  {
    title: "W3Schools - Vue 3",
    url: "https://www.w3schools.com/vue/",
    description: "Tutoriels pour apprendre Vue 3 sur W3Schools.",
  },
  {
    title: "Vue 3 API Reference",
    url: "https://vuejs.org/api/",
    description: "Référence API complète de Vue 3.",
  },
  {
    title: "ORSYS espace administratif",
    url: "https://docadmin.orsys.fr/",
    description: "Pour émarger.",
  },
  {
    title: "Google meet",
    url: "https://meet.google.com/landing",
    description: "Accès à l'espace visio collaboratif.",
  },
]);
</script>
  