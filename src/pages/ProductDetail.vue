<template>
    <div
      v-if="product"
      class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h1 class="text-2xl font-bold mb-4">{{ product.title }}</h1>
      <img
        :src="product.thumbnail"
        alt="Image du produit"
        class="w-full h-64 object-cover rounded-md mb-4"
      />
      <p class="text-lg font-semibold">{{ product.price }}€</p>
      <p class="text-gray-600 mt-2">{{ product.description }}</p>
      <p class="text-sm text-gray-500 mt-2">Stock : {{ product.stock }}</p>
    </div>
    <p v-else class="text-center text-gray-500">Produit non trouvé.</p>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import productsDB from "../assets/productsDB.json";
  
  // Récupération de la route active pour obtenir l'ID du produit
  const route = useRoute();
  const product = ref(null);  // Initialiser à `null` pour v-if
  
  // Récupère le produit correspondant à l'ID passé dans l'URL
  onMounted(() => {
    const productId = parseInt(route.params.id, 10);
    product.value = productsDB.products.find((p) => p.id === productId) || null;
  });
  </script>
  