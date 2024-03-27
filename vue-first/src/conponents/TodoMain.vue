<script setup>
defineProps(['todos']);
</script>

<template>
 <button @click="getTodoButtonClicked">할일 목록 가져오기</button>
  <h3>할일 목록</h3>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
      {{ todo.completed ? '완료' : '진행중' }}
    </li>
  </ul>
</template>

<style>
</style>