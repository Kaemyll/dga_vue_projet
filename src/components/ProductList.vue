<template>
  <section class="bg-red-900 rounded-lg p-6 m-2 flex-grow overflow-y-auto">
    <h2 class="text-lg underline m-2 font-semibold text-center">
      Liste de produits
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Boucle pour afficher chaque produit sous forme de card avec une ombre -->
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out flex flex-col"
      >
        <!-- Image miniature -->
        <img
          :src="product.thumbnail"
          alt="Product image"
          class="w-full h-48 object-cover rounded-t-lg"
        />

        <!-- Contenu de la card -->
        <div class="flex-1 p-4 flex flex-col">
          <!-- Titre et marque -->
          <h3 class="text-lg font-bold text-gray-800">{{ product.title }}</h3>
          <p class="text-sm text-gray-500 mb-2">Marque: {{ product.brand }}</p>

          <!-- Description -->
          <p class="text-gray-700 text-sm mb-4 flex-1">
            {{ product.description }}
          </p>

          <!-- Prix et réduction -->
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold text-gray-800"
              >{{ product.price }}€</span
            >
            <span class="text-sm text-red-500"
              >-{{ product.discountPercentage }}%</span
            >
          </div>
        </div>

        <!-- Informations supplémentaires : note et stock -->
        <div
          class="flex items-center justify-between mt-4 p-2 bg-gray-100 rounded-b-lg"
        >
          <span class="text-yellow-500 font-medium"
            >★ {{ product.rating }}</span
          >
          <span
            :class="{
              'text-green-600': product.stock > 0,
              'text-red-500': product.stock === 0,
            }"
          >
            Stock : {{ product.stock > 0 ? product.stock : "Rupture de stock" }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
