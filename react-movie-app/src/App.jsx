import { useEffect, useState } from "react";
import MovieFooter from "./components/MovieFooter"
import MovieHeader from "./components/MovieHeader"
import MovieList from "./components/MovieList"
import useFetchMovieData from "./hooks/useFecthMovieData";

function App() {

  const [moviesType, setMovieType] = useState('now_playing');

  // MovieType이 변경될 때마다 리렌더링 되며, 아래의 코드가 수행된다.
  const movies = useFetchMovieData(moviesType);

   const handleMovies = (id) => {
      console.log(id);
      setMovieType(id) 
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
