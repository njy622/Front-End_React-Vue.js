<script setup>
defineProps(['title']);
</script>
<template>
    <h1>{{ title }}</h1>
    <hr>
    <slot>아무 컨텐츠도 전달 안될때 나오는 값</slot>
</template>
<style>
</style>