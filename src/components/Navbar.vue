<template>
    <!-- Header -->
    <header class="bg-green-500 p-6 text-center text-white">
      <h1 class="text-2xl font-bold">{{ message }}</h1>
      <button @click="emitEvent">Envoyer un message au parent</button>
    </header>
  </template>
  
  <script>
  export default {
    props: {
      message: String
    },
    emits: ['childEvent'],
    methods: {
      emitEvent() {
        this.$emit('childEvent', 'Bonjour du composant enfant !');
      }
    }
  };
  </script>
  

 