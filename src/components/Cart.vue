<template>
    <section class="bg-gray-100 p-6 m-2 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold mb-4">Panier</h2>
  
      <!-- Affichage des articles du panier -->
      <ul class="space-y-2">
        <li v-for="(item, index) in cart" :key="index" class="flex justify-between">
          <span>{{ item.title }}</span>
          <span>{{ item.price }}€</span>
        </li>
      </ul>
  
      <!-- Affichage de la valeur totale -->
      <div class="mt-4 font-bold text-lg">
        Valeur totale : {{ totalValue }}€
      </div>
    </section>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    cart: {
      type: Array,
      required: true
    },
    totalValue: {
      type: Number,
      required: true
    }
  });
  </script>
  