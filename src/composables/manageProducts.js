// src/composables/manageProducts.js
import { reactive, provide, inject } from 'vue';
import productsData from '../assets/productsDB.json'; // Import du fichier JSON pour l'initialisation

// Clé pour injecter l'état global des produits
export const productKey = Symbol('productKey');

// Charge les produits du localStorage ou utilise ceux de productsDB.json
function loadProducts() {
  const savedProducts = localStorage.getItem('products');
  console.log('savedProduct --> ', savedProducts);
  return savedProducts ? JSON.parse(savedProducts) : productsData.products;
}

// Fonction pour gérer les produits
export function useManageProducts() {
  const state = reactive({
    products: loadProducts()
  });

  // Méthode pour ajouter un produit et le sauvegarder dans le localStorage
  const addProduct = (product) => {
    state.products.push(product); // Ajout du produit dans l'état
    localStorage.setItem('products', JSON.stringify(state.products)); // Sauvegarde dans le localStorage
  };

  // Méthode pour supprimer un produit (si besoin)
  const removeProduct = (productId) => {
    state.products = state.products.filter(p => p.id !== productId);
    localStorage.setItem('products', JSON.stringify(state.products)); // Mise à jour du localStorage
  };

  // Fournir l'état et les méthodes
  provide(productKey, {
    products: state.products,
    addProduct,
    removeProduct
  });
}

// Fonction pour injecter les produits dans les composants enfants
export function useProducts() {
  const productsManager = inject(productKey);

  if (!productsManager) {
    throw new Error('useProducts() must be used within a provider.');
  }

  return productsManager;
}
