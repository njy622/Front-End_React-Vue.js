<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();

const id = route.params.id;
</script>

<template>
    <h1>{{ id }}번 Todo 상세보기</h1>
</template>