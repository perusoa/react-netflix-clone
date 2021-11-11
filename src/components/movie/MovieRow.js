import './MovieRow.css';
import { useState, useEffect } from 'react';
import HTTP from '../../utils/http';
import MovieCard from './MovieCard';

export default function MovieRow ({ category, type, url }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const { results } = (await HTTP.get(url)).data;
      setMovies(results);
    }
    fetchData();
  }, []);

  return (
    <div className="c-movie-row">
      <h2 className="c-movie-row__title">{category}</h2>
      <div className="c-movie-row__container">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} type={type} movie={movie} />
        })}
      </div>
    </div>
  );
}