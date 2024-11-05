<template>
  <div className="flex flex-col min-h-screen bg-gray-300">
    <MainNavbar />
    <FormProduct />
    <MainFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MainNavbar from "../components/Navbar.vue";
import FormProduct from "../components/FormProduct.vue";
import MainFooter from "../components/Footer.vue";

</script>