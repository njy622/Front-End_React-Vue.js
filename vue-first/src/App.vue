<script setup>
import { ref } from 'vue';

  const title = ref('상품목록..');
  const products = ref(['아이폰', '갤럭시', '아이패드', '에어팟']);
  const copyright = ref('Copyright 2023 Vue.js');
  const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png';
  const imgWidth = 50;

  function buttonClicked(){
    alert('hi button clicked..')
  }
  function greetButtonClicked(){
    console.log('안녕하세요')
  }
</script>

<template>
  
  <h1>안녕 뷰.. 안녕 에반 유</h1>
  <hr>
  <!-- <img v-bind:src ="imgSrc" width="100"> 
      이렇게 쓰는게 정석이지만 v-bind는 생략하여 아래처럼 사용 가능 -->
  <img :src ="imgSrc" :width="imgWidth">
  <!-- HTML에서 onclick => Vue에서 @click 으로 사용 -->
  <button @click="buttonClicked">눌러주세요</button>
  <button @click="greetButtonClicked">누르면 콘솔로 인사를 합니다</button>
  <h3>{{ title }}</h3>
  <!-- <ul>
    <li>{{ products[0] }}</li>
    <li>{{ products[1] }}</li>
    <li>{{ products[2] }}</li>
    <li>{{ products[3] }}</li>
  </ul> 
  해당 배열의 리스트를 v-for 반복문을 통해 이용
  product in products : products의 리스트를 하나씩 product에 넣는다
   (Vue에서만 쓰는 문법)-->
  <ul>
    <li v-for="product in products">{{ product }}</li>
  </ul>

  <h3>{{ copyright }}</h3>

</template>

<!-- scoped: App 컴포넌트 안에서만 CSS적용이 되겠다 -->
<style scoped>
  h1 {
    color: brown;
  }
</style>
