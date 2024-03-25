import { useEffect, useState } from 'react';
import { Card } from '../components';

export const MovieList = () => {
  
  const [ movies, setMovies ] = useState([]);
  
  
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY

    async function fetchMovies(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  },[]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          { movies.map((movie) => (
            <Card key={ movie.id } movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
