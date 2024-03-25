<script setup>
  const title = '상품목록..';
  const products = ['아이폰', '갤럭시', '아이패드', '에어팟'];
  const copyright = 'Copyright 2023 Vue.js';
</script>

<template>
  
  <h1>안녕 뷰.. 안녕 에반 유</h1>
  <hr>
  <h3>{{ title }}</h3>
  <ul>
    <li>{{ products[0] }}</li>
    <li>{{ products[1] }}</li>
    <li>{{ products[2] }}</li>
    <li>{{ products[3] }}</li>
  </ul>
  <h3>{{ copyright }}</h3>

</template>

<!-- scoped: App 컴포넌트 안에서만 CSS적용이 되겠다 -->
<style scoped>
  h1 {
    color: brown;
  }
</style>
