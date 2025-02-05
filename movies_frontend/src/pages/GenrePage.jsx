import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByGenre } from '../services/tmdbService';
import MovieCard from '../components/MovieCard';

const GenrePage = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [genreName, setGenreName] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const { name, movies } = await getMoviesByGenre(genreId);
      setGenreName(name);
      setMovies(movies);
    };
    fetchMovies();
  }, [genreId]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{`Movies in Genre: ${genreName}`}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
