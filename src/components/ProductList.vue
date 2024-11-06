<!-- src/components/ProductList.vue -->
<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded-lg shadow-md">
      <img :src="product.thumbnail" alt="Image du produit" class="w-full h-32 object-cover rounded-md" />
      <h3 class="text-lg font-semibold mt-2">{{ product.title }}</h3>
      <p class="text-gray-700">{{ product.price }}€</p>

      <!-- Lien vers la fiche produit avec router-link -->
      <router-link
        :to="{ name: 'ProductDetail', params: { id: product.id } }"
        class="text-blue-500 hover:underline mt-2 block"
      >
        Fiche produit
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>
