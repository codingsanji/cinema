import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Link to={`/movie/${id}`} className="block">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img src={posterUrl} alt={title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-medium truncate">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
