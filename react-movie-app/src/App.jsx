import { useEffect, useState } from "react";
import MovieFooter from "./components/MovieFooter"
import MovieHeader from "./components/MovieHeader"
import MovieList from "./components/MovieList"


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzVmMGNlMmMxZGU5MjFkMDMzNTYzYTJkMDlkNWVhYiIsInN1YiI6IjY2MDYxYzg2MjgzZWQ5MDE2MjE3ZWU4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sBsJMoKbymovrY1LwP4SRTsQ3nnRd-hH8sx5s0RKoRM'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response.results);
        setMovies(response.results);
      })
      .catch(err => console.error(err));

  },[]);
  
   const handleMovies = (id) => {
      console.log(id);
   }

  return (
    <>
      <MovieHeader onMobieData={handleMovies}/>
      <MovieList movies={movies}/>
      <MovieFooter/>

    </>
  )
}

export default App
