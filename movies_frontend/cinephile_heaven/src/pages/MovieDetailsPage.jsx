import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieTrailer } from '../services/tmdbService';
import MovieDetail from '../components/MovieDetail';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      setMovie(await getMovieDetails(id));
      setTrailer(await getMovieTrailer(id));
    };
    fetchMovieData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <MovieDetail movie={movie} trailer={trailer} />
    </div>
  );
};

export default MovieDetailsPage;
