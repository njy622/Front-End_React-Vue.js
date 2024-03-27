<!-- <script setup>
import { ref } from 'vue';

  const title = ref('상품목록..');
  const products_simple = ref(['아이폰', '갤럭시', '아이패드', '에어팟']);
  const products = ref([
    {
      productId: '0021',
      title: 'iPhone14',
      price: 1200,
      discountRate: 15,
      isRocket: true,
      stock: 5,
    },
    {
      productId: '0022',
      title: 'Galaxy23',
      price: 1300,
      discountRate: 25,
      isRocket: true,
      stock: 12,
    },
    {
      productId: '0023',
      title: 'Shaomi',
      price: 800,
      discountRate: 15,
      isRocket: false,
      stock: 0,
    },
  ]);
  const copyright = ref('Copyright 2023 Vue.js');
  const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png';
  const imgWidth = 50;

  function buttonClicked(){
    alert('hi button clicked..')
  }
  // function greetButtonClicked(){
  //   console.log('안녕하세요')
  // }
  function greetButtonClicked(){
    console.log(copyright.value);
  }

  const typedText = ref('ㄴㅇㄹㄴㅇㄹ');
  const checkboxchecked = ref(false);
</script>

<template>
  
  <h1>안녕 뷰.. 안녕 에반 유</h1>
  <hr>
  == <img v-bind:src ="imgSrc" width="100"> 
      이렇게 쓰는게 정석이지만 v-bind는 생략하여 아래처럼 사용 가능 
  <img :src ="imgSrc" :width="imgWidth">
  == HTML에서 onclick => Vue에서 @click 으로 사용
  <button @click="buttonClicked">눌러주세요</button>
  <button @click="greetButtonClicked">누르면 콘솔로 인사를 합니다</button><br><br>
  양방향 테스트 : <input type="text" v-model="typedText">
  <p>{{ typedText }}</p> == 양방향 바인딩이 되는지 테스트
  체크박스 <input type="checkbox" v-model="checkboxchecked"><br>
  <p>{{ checkboxchecked }}</p>
  <h3>{{ title }}</h3>
  == <ul>
    <li>{{ products[0] }}</li>
    <li>{{ products[1] }}</li>
    <li>{{ products[2] }}</li>
    <li>{{ products[3] }}</li>
  </ul> 
  해당 배열의 리스트를 v-for 반복문을 통해 이용
  product in products : products의 리스트를 하나씩 product에 넣는다
   (Vue에서만 쓰는 문법)
  <ul>
    <li v-for="product in products" :key="product.productId">
      <span v-if="product.stock">
        == <span v-if="product.stock !== 0"> 이렇게도 사용할 수 있지만 위의 방식으로
        == stock의 값이 0이면 false로 인식해서 화면에 보여지지 않으며,
            0이 아닌 값이면 ture로 인식하여 화면에 출력
        {{ product.title }}
        {{ product.price }}
        ({{ product.price - (product.price * (product.discountRate /100)) }}) :
        {{ product.isRocket ? '로켓배송' : '3일후 받아요' }}
      </span>
      <span v-else>
        {{ product.title }}
        재고없음
      </span>
    
    </li>
  </ul>

  <h3>{{ copyright }}</h3>

</template>

== scoped: App 컴포넌트 안에서만 CSS적용이 되겠다
<style scoped>
  h1 {
    color: brown;
  }
</style> -->


<!-- 20240326_13차시 컴포넌트 라이프사이클 이론 실습 
  할일 목록 가져오는 사이트
https://jsonplaceholder.typicode.com/todos


<script setup>
// 자바스크립트에서 on으로 시작하면 이벤트함수임
import { onMounted, ref } from 'vue';
import axios from 'axios';

// 자동으로 렌더링 다음에 바로 실행됨(콜백함수=훅)
// onMounted(function () {
//자바스크립트는 이름이 없는 함수는 아래의 방식처럼 화살표 함수로 단축 시킴
  onMounted( () =>{  
  console.log('app 컴포넌트 마운트 되었습니다.');
});

const todos = ref([]);

// 화면이 로딩된 직후에 실행되는 훅(콜백함수)
//onMounted(() => {
//  fetch('https://jsonplaceholder.typicode.com/todos')
//    .then(result => result.json())  // 결과값이 한줄이면, return과 {} 생략가능
//    .then(json => todos.value = json)
//}); 

// fetch를 대신하여  Axios를 사용할 수 있음
// npm install axios
// axios : api에서 받아온 데이터를 자동으로 json으로 바꿔줌
//onMounted(() => {
//  axios.get('https://jsonplaceholder.typicode.com/todos')
    // .then(res => console.log(res)); // axios는 data에 데이터를 담음
//    .then(res => todos.value = res.data);
//});

// 위의 함수를 async로 변경 (비동기)
// url 데이터를 받고나서 처리해야함으로 
// 동기적으로 처리해야하는 부분에는 await 추가하여,
// 데이터가 받아와질 때까지 기다림
onMounted(async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
  todos.value = res.data;

})




function getTodoButtonClicked(){
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())  // 결과값이 한줄이면, return과 {} 생략가능
    .then(json => todos.value = json)
}



</script>
<template>
  <h1>Todos</h1>
  <hr>
  <button @click="getTodoButtonClicked">할일 목록 가져오기</button>
  <h3>할일 목록</h3>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
      {{ todo.completed ? '완료' : '진행중' }}
    </li>
  </ul>
  <h3>Copyright 2024  by Nam</h3>
</template>

<style scoped>
</style>
-->

<!-- 20240326_14차시 컴포넌트 개요 설명, 프롭스 설명 -->


<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import axios from 'axios';

import TodoHeader from './conponents/TodoHeader.vue'
import TodoFooter from './conponents/TodoFooter.vue'
import TodoMain from './conponents/TodoMain.vue'

//states 
const title = ref('Todo 관리');
const year = ref(2024);
const developerName = ref('Nam');
const todos = ref([]); // {value:[]}
// const todos = reactive([]);

// year 값이 바뀌면 todos 데이터를 다시 가져오기..
watch(year, async (newYear) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  console.log('watch 함수 호출됨');
  todos.value = res.data;
});
// 화면 로딩된 직후에 실행되는 훅(콜백함수)
onMounted(async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  todos.value = res.data;
});
function getTodoButtonClicked() {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(result => result.json())
  .then(json => todos.value = json);
}
// year 값을 바꾸는 함수
function yearButtonClicked() {
  year.value++;
}
</script>
<template>

  <!-- <TodoHeader/> 
  <TodoMain/> 
  <TodoFooter/>
  이렇게 사용하지 않고 아래의 형식으로도 해당 컴포넌트를 불러올 수 있음 -->
  <todo-header :title="title"/> 
  <todo-main :todos="todos" />
  <todo-footer :year="year" :name="developerName"/>

</template>

<style scoped>
</style>