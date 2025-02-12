import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = ({ movie, trailer }) => {
  const { title, overview, poster_path, release_date, genres } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center">
      <img src={posterUrl} alt={title} className="w-full lg:w-1/3 rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-8" />
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-2">
          <strong>Released:</strong> {release_date}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Genres:</strong>{' '}
          {genres.map((genre) => (
            <Link
              key={genre.id}
              to={`/genre/${genre.id}`}
              className="text-blue-500 hover:underline mr-2"
            >
              {genre.name}
            </Link>
          ))}
        </p>
        <p className="text-lg mb-6">{overview}</p>
        {trailerUrl && (
          <div className="relative aspect-w-16 aspect-h-9">
            <iframe
              src={trailerUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="movie trailer"
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
