 
<template>
  <section class="flex-grow p-3 overflow-y-auto bg-slate-500">
    <div
      v-if="product"
      class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <!-- Titre du produit -->
      <h1 class="text-2xl font-bold mb-4">{{ product.title }}</h1>

      <!-- Image principale du produit -->
      <img
        :src="product.thumbnail"
        alt="Image du produit"
        class="w-full h-64 object-cover rounded-md mb-4"
      />

      <!-- Prix et réduction -->
      <p class="text-lg font-semibold">
        {{ product.price }}€
        <span
          v-if="product.discountPercentage"
          class="text-red-500 text-sm ml-2"
        >
          -{{ product.discountPercentage }}%
        </span>
      </p>

      <!-- Description du produit -->
      <p class="text-gray-600 mt-2">{{ product.description }}</p>

      <!-- Stock disponible -->
      <p class="text-sm text-gray-500 mt-2">Stock : {{ product.stock }}</p>

      <!-- Évaluation du produit avec une étoile -->
      <p class="text-yellow-500 mt-4 flex items-center">
        <span class="mr-1">★</span>
        <!-- Étoile Unicode pour la note -->
        <span>{{ product.rating }}</span>
      </p>

      <!-- Informations supplémentaires : Marque et Catégorie -->
      <p class="text-sm text-gray-500 mt-2">Marque : {{ product.brand }}</p>
      <p class="text-sm text-gray-500 mt-2">
        Catégorie : {{ product.category }}
      </p>

      <!-- Galerie d'images supplémentaires -->
      <div v-if="product.images && product.images.length" class="mt-4">
        <h2 class="text-lg font-semibold mb-2">Images supplémentaires</h2>
        <div class="flex space-x-2">
          <img
            v-for="(image, index) in product.images"
            :key="index"
            :src="image"
            alt="Image du produit supplémentaire"
            class="w-20 h-20 object-cover rounded"
          />
        </div>
      </div>
    </div>
    <div v-else class="max-w-lg mx-auto p-6 bg-white text-center text-red-700 font-bold rounded-lg shadow-md">Produit non trouvé.</div>
  </section>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProducts } from "../composables/manageProducts";
import productsDB from "../assets/productsDB.json";

// Récupération de la route active pour obtenir l'ID du produit
const route = useRoute();
const product = ref(null); // Initialiser à `null` pour v-if

// Injection de l'état des produits
const { products } = useProducts();

// Récupère le produit correspondant à l'ID passé dans l'URL
onMounted(() => {
  const productId = parseInt(route.params.id, 10);
  product.value = productsDB.products.find((p) => p.id === productId) || null;
});
</script>
 