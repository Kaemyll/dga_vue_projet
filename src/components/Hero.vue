
<template>
  <section class="bg-yellow-600 rounded-lg p-6 m-2 text-justify flex-grow overflow-y-auto">
    <h2 class="text-lg text-center underline m-2 font-bold">BLACK FRIDAY !!!</h2>
    <img :src="backgroundImage" alt="Hero Background" class="mx-auto" />
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

// Déclaration de la prop pour recevoir l'image de fond
const props = defineProps({
  backgroundImage: {
    type: String,
    required: true
  }
});
</script>
