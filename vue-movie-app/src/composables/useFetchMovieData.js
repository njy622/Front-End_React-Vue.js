import { ref } from 'vue';

export default function useFetchMovieData() {

    // ref로 감싸주면 State 값이 됨(React에서는 useState)
    // React문법 : const [movies, setMovies] = useState([]);
    const movies =ref([]);  

    function fetchMovieData(movieType) {
        let url = '';
        if (['now_playing', 'popular', 'top_rated'].includes(movieType)) {
        url = `https://api.themoviedb.org/3/movie/${movieType}?language=ko`;
        } else{
        url = `https://api.themoviedb.org/3/search/collection?query=${movieType}&include_adult=false&language=ko`
        }
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzVmMGNlMmMxZGU5MjFkMDMzNTYzYTJkMDlkNWVhYiIsInN1YiI6IjY2MDYxYzg2MjgzZWQ5MDE2MjE3ZWU4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sBsJMoKbymovrY1LwP4SRTsQ3nnRd-hH8sx5s0RKoRM'
            }
        };
    
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
            console.log(response.results);
            movies.value = response.results;  
            // React 문법:  setMovies(response.results); 
    
            })
            .catch(err => console.error(err));
    
    }

    return { movies, fetchMovieData }
  
}