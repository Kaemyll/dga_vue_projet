<script setup>
import { ref } from "vue";
import MainNavbar from "../components/Navbar.vue";
import MainView from "../components/MainView.vue";
import MainFooter from "../components/Footer.vue";

</script>

<template>
  <div className="flex flex-col min-h-screen">
    <MainNavbar />
    <MainView />
    <MainFooter />
  </div>
</template>

  