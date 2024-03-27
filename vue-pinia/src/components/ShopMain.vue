<script setup>
import { useShopStore } from '../stores/shop.js';

const store = useShopStore();
</script>

<template>
    <p3>상품목록</p3>
    <ul>
        <li v-for="product in store.products">{{ product }}</li>
    </ul>
</template>