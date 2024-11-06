<template>
  <footer
    class="bg-gray-800 p-6 text-center text-white mt-auto sticky bottom-0"
  >
    <p>DGA, 2024 - Formation ORSYS vue.js</p>
    <a
      href="https://github.com/Kaemyll/dga_vue_projet/tree/main"
      target="_blank"
      class="text-blue-400 hover:text-blue-500 underline"
    >
      Voir le projet sur GitHub
    </a>
    <p
      class="inline-block px-4 py-2 bg-gray-700 text-sm font-semibold rounded-full shadow-md"
    >
      {{
        isAuthenticated ? "Utilisateur connecté" : "Pas d'utilisateur connecté"
      }}
    </p>
  </footer>
</template>

<script setup>
import { inject } from "vue";

const isAuthenticated = inject("isAuthenticated");
</script>