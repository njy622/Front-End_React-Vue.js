<script setup>
defineProps(['year', 'name']);
const emit = defineEmits(['invreaseYear']);
</script>

<template>
    <hr>
    <button @click="$event => emit('increaseYear', 1)">연도를 1년 증가시키기</button>
    <h3>Copyright {{ year }}  by {{ name }}</h3>
</template>

<style>
</style>