<script setup>
import MovieCard from './MovieCard.vue';

// 아버지인 App.vue에서 movies Prop를 상속받음
defineProps(['movies']);
</script>
<template>
    <main class="dark:bg-slate-700">
        <section class="max-w-7xl mx-auto py-7">
            <div class="flex justify-start flex-wrap">
                <movie-card 
                    v-for="movie in movies"
                    :movie="movie"
                    :key="movie.id"
                />
            </div>
        </section>
    </main>
</template>

<style scoped>

</style>

<!-- 
    Vue 문법: v-for 사용(반복문)
    <movie-card v-for="movie in movies"/>
    React문법: map() 사용(반복문)
    {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)} --> 
