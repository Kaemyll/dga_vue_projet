<!-- src/components/FormProduct.vue -->
<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-md mx-auto"
  >
    <h2 class="text-lg font-bold mb-4 text-center underline uppercase">
      Enrichir le stock
    </h2>

    <!-- Champ Nom du produit -->
    <div>
      <label for="title" class="block text-gray-700 font-semibold"
        >Nom du produit</label
      >
      <input
        v-model="product.title"
        type="text"
        id="title"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Nom du produit"
        required
      />
      <p v-if="!product.title" class="text-red-500 text-sm mt-1">Titre requis !</p>

    </div>

    <!-- Champ Description -->
    <div>
      <label for="description" class="block text-gray-700 font-semibold"
        >Description</label
      >
      <textarea
        v-model="product.description"
        id="description"
        rows="3"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description du produit"
      ></textarea>
      <p v-if="!product.description" class="text-red-500 text-sm mt-1">Description requise !</p>

    </div>

    <!-- Champ Prix -->
    <div>
      <label for="price" class="block text-gray-700 font-semibold"
        >Prix (€)</label
      >
      <input
        v-model="product.price"

        id="price"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Prix en euros"
        required
      />
      <!-- <p v-if="!product.price" class="text-red-500 text-sm mt-1">Prix requis !</p>
      <p v-if="product.price && (isNaN(product.price) || Number(product.price) <= 0)" class="text-red-500 text-sm mt-1">
        Le prix doit être un nombre positif valide.
      </p> -->
      <p v-if="errors.price" class="text-red-500 text-sm mt-1">{{ errors.price }}</p>


    </div>

    <!-- Champ Pourcentage de réduction -->
    <div>
      <label for="discountPercentage" class="block text-gray-700 font-semibold"
        >Pourcentage de réduction (%)</label
      >
      <input
        v-model="discountPercentage"
        type="number"
        id="discountPercentage"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Pourcentage de réduction"
      />
    </div>

    <!-- Champ Note -->
    <div>
      <label for="rating" class="block text-gray-700 font-semibold">Note</label>
      <input
        v-model="product.rating"
        type="number"
        step="0.01"
        id="rating"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Note"
      />
    </div>

    <!-- Champ Stock -->
    <div>
      <label for="stock" class="block text-gray-700 font-semibold">Stock</label>
      <input
        v-model="product.stock"
        type="number"
        id="stock"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Quantité en stock"
        required
      />
    </div>

    <!-- Champ Marque -->
    <div>
      <label for="brand" class="block text-gray-700 font-semibold"
        >Marque</label
      >
      <input
        v-model="product.brand"
        type="text"
        id="brand"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Marque du produit"
      />
    </div>

    <!-- Champ Catégorie -->
    <div>
      <label for="category" class="block text-gray-700 font-semibold"
        >Catégorie</label
      >
      <input
        v-model="product.category"
        type="text"
        id="category"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Catégorie"
        required
      />
      <p v-if="!product.category" class="text-red-500 text-sm mt-1">Catégorie requise !</p>

    </div>

    <!-- Champ Thumbnail -->
    <div>
      <label for="thumbnail" class="block text-gray-700 font-semibold"
        >Image miniature (URL)</label
      >
      <input
        v-model="product.thumbnail"
        type="url"
        id="product.thumbnail"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="URL de l'image miniature"
      />
    </div>

    <!-- Champ Images -->
    <div>
      <label for="image" class="block text-gray-700 font-semibold"
        >Image (URL)</label
      >
      <input
        v-model="product.imageInput"
        type="text"
        id="image"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="URL de l'image"
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
import { reactive, watch } from "vue";

// ***** DATA *****
// Création de l'objet réactif product avec des valeurs par défaut
const product = reactive({
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail: "https://via.placeholder.com/800x600",
  image: "https://via.placeholder.com/600",
});

// Utilisé pour saisir les URLs des images sous forme de texte
const imageInput = ref("https://via.placeholder.com/600x600");

// Objet réactif pour les messages d'erreur
const errors = reactive({
  title: "",
  description: "",
  price: ""
});

// ***** WATCHERS *****
// Watchers pour la validation en temps réel

// Watcher pour le champ `price`
watch(
  () => product.price,
  (newValue) => {
    if (!newValue) {
      errors.price = "Le prix est requis !";
    } else if (isNaN(newValue)) {
      errors.price = "Le prix doit être un nombre !";
    } else if (Number(newValue) <= 0) {
      errors.price = "Le prix doit être un nombre positif !";
    } else {
      errors.price = ""; // Réinitialise l'erreur si le prix est valide
    }
  }
);

// ***** METHODES *****
// Méthode de soumission du formulaire
const handleSubmit = () => {

  // Convertit imageInput en tableau d'URLs
  product.image = imageInput.value.split(",").map((url) => url.trim());

  const messageAlert = `Produit ajouté : ${JSON.stringify(product, null, 2)}`;
  alert(messageAlert);

  // Réinitialisation de l'objet product et de imagesInput
  Object.assign(product, {
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "https://via.placeholder.com/800x600",
    image: [],
  });
  imageInput.value =
    "https://via.placeholder.com/600x600, https://via.placeholder.com/600x600";
};
</script>
