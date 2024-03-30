import { useEffect, useState } from "react";

export default function useFetchMovieData (movieType) {
    const [movies, setMovies] = useState([]);


    // 커스텀 훅을 만들어서 State 부분과 fetch(백엔드) 부분을 분리하여 리팩토링 하자.
    // 훅을 이용할때는, 훅 디렉토리를 만듦 (hooks/useFecthMovieData.js)


    const fetchMovieData = (id) => {
    let url = '';
    if (['now_playing', 'popular', 'top_rated'].includes(id)) {
        url = `https://api.themoviedb.org/3/movie/${id}?language=ko`
    } else {
        url = `https://api.themoviedb.org/3/search/movie?query=${id}&include_adult=false&language=ko`
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
        setMovies(response.results);
        })
        .catch(err => console.error(err));

    }

    
    useEffect(()=> {
        fetchMovieData(movieType);
        },[movieType]);  // [movieType] : 해당 데이터가 변경될때 다시 렌더링 되는것

    return movies;
}