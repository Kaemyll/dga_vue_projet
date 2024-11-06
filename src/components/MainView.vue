<script setup>
import MainHero from "../components/Hero.vue";
import ProductList from "../components/ProductList.vue";
import productsDB from "../assets/productsDB.json";
import { mainDB } from "../assets/mainDB";

// Déclaration des données en tant que constantes
const products = productsDB.products;
const heroBackgroundImage = mainDB.heroBackgroundImage;
const headerNavLinks = mainDB.headerNavLinks;

</script>

<template>
  <section class="flex-grow p-3 overflow-y-auto bg-slate-500">
    <MainHero :backgroundImage="heroBackgroundImage" :navLinks="headerNavLinks" />
    <ProductList :products="products" />
  </section>
</template>