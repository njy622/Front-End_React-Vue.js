<script setup>
import MovieHeader from './components/MovieHeader.vue';
import MovieList from './components/MovieList.vue';
import MovieFooter from './components/MovieFooter.vue';
import { onMounted } from 'vue';
import useFetchMovieData from './composables/useFetchMovieData';

// React: 커스텀 훅 / Vue: composables 다른 용어를 씀
// State는 훅으로 넘기고

const { movies, fetchMovieData } = useFetchMovieData();

// onMounted는 컴포넌트에 종속되어 있기때문에 App.vue에 남김
// LifeCycle Hook인 onMounted()로 (React에서는 useEffect)
// React문법 :useEffect(()=> {fetchMovieData(movieType);},[movieType]);
onMounted(() => {
  fetchMovieData('now_playing');
});




function handleLinkClick(e) {  // 파라미터 e 는 자식이 보낸 데이터가 담겨짐
  console.log(e);
  fetchMovieData(e);
}

function handleSearchInputType(e) {
  fetchMovieData(e);
}

</script>

<template>
  <movie-header 
    @link-click="handleLinkClick"
    @searchInputType="handleSearchInputType"
    />
  <movie-list :movies="movies"/>
  <movie-footer/>
</template>

<style scoped>

</style>
<!--  @link-click=""/ 를 통해 자식에게 발생한 이벤트를 전달받음 -->