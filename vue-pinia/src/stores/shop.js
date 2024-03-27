import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', () => {
  

  // states
  const title = ref('뷰 쇼핑몰');
  const products = ref([
    '아이폰', '갤럭시', '엑스페리아'
  ])
  const year = ref(2024);
  const developer = ref('nam');
  const newProduct = ref('');

  function addProduct() {
    products.value.push(newProduct.value);
    newProduct.value = '';
  }
  // 일반함수는 액션을 일으킨다
  // 액션은 데이터를 변경시킨다

  // getter
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { title, products, year, developer, newProduct, addProduct }
})
