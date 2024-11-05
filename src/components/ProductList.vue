<template>
  <section class="bg-red-300 p-6 m-2 text-justify flex-grow overflow-y-auto">
    <h2 class="text-lg underline m-2 font-semibold text-center">
      Liste de produits
    </h2>
    <ul class="ml-10 list-disc prose prose-slate">
      <!-- Boucle pour afficher chaque produit -->
      <li v-for="(product, index) in products" :key="index">
        Modèle : {{ product.title }}, Fabricant : {{ product.brand }},
        Description : {{ product.description }}, Prix: {{ product.price }},
        Catégorie: {{ product.category }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

// Déclaration de la prop pour recevoir la liste des produits
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>