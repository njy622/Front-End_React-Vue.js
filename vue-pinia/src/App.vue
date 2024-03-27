<script setup>
import { useShopStore } from './stores/shop.js';
import ShopMain from './components/ShopMain.vue';

const store = useShopStore();

function addButtonClicked() {
  store.addProduct();
}
</script>

<template>
  <div>
      <h1>{{ store.title }}</h1>
      <hr>
      <shop-main />
      <input type="text" v-model="store.newProduct" />
      <button @click="addButtonClicked">상품 추가</button>
      <br>{{ store.newProduct }}
      <h3>copyright {{ store.year }} by {{ store.developer }}</h3>
  </div>
</template>

<style scoped>

</style>
