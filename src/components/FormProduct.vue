<!-- src/components/FormProduct.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 m-3 rounded-lg shadow-lg space-y-4 max-w-md mx-auto">
    <h2 class="text-lg font-bold mb-4 text-center underline">Enrichir le stock</h2>

    <!-- Champ Nom du produit -->
    <div>
      <label for="name" class="block text-gray-700 font-semibold">Nom du produit</label>
      <input
        v-model="name"
        type="text"
        id="name"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Nom du produit"
        required
      />
    </div>

    <!-- Champ Description -->
    <div>
      <label for="description" class="block text-gray-700 font-semibold">Description</label>
      <textarea
        v-model="description"
        id="description"
        rows="3"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description du produit"
        required
      ></textarea>
    </div>

    <!-- Champ Prix -->
    <div>
      <label for="price" class="block text-gray-700 font-semibold">Prix (€)</label>
      <input
        v-model="price"
        type="number"
        id="price"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Prix en euros"
        required
      />
    </div>

    <!-- Champ Catégorie -->
    <div>
      <label for="category" class="block text-gray-700 font-semibold">Catégorie</label>
      <input
        v-model="category"
        type="text"
        id="category"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Catégorie"
        required
      />
    </div>

    <!-- Champ Stock -->
    <div>
      <label for="stock" class="block text-gray-700 font-semibold">Stock</label>
      <input
        v-model="stock"
        type="number"
        id="stock"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Quantité en stock"
        required
      />
    </div>

    <!-- Bouton Ajouter le produit -->
    <button
      type="submit"
      class="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
    >
      Ajouter le produit
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

// ***** DATA *****
const name = ref("");
const description = ref("");
const price = ref(0);
const category = ref("");
const stock = ref(0);

// ***** METHODES *****
// Méthode de soumission du formulaire
const handleSubmit = () => {
  // Simulation de l'ajout du produit
  const product = {
    name: name.value,
    description: description.value,
    price: parseFloat(price.value),
    category: category.value,
    stock: parseInt(stock.value)
  };
  alert(`Produit ajouté (virtuellement) : ${JSON.stringify(product, null, 2)}`);

  // Réinitialisation des champs du formulaire
  name.value = "";
  description.value = "";
  price.value = 0;
  category.value = "";
  stock.value = 0;
};
</script>
