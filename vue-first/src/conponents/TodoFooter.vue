<script setup>
defineProps(['year', 'name']);
</script>

<template>
    <hr>
    <button @click="yearButtonClicked">연도를 1년 증가시키기</button>
    <h3>Copyright {{ year }}  by {{ name }}</h3>
</template>

<style>
</style>