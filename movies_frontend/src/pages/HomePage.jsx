import React, { useEffect, useState } from 'react';
import { getTrendingMovies, getPopularMovies, getNewMovies } from '../services/tmdbService';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setTrending(await getTrendingMovies());
      setPopular(await getPopularMovies());
      setNewMovies(await getNewMovies());
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <Section title="Trending Movies" movies={trending} />
        <Section title="Popular Movies" movies={popular} />
        <Section title="New Movies" movies={newMovies} />
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="bg-cover bg-center h-96" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/sample-movie-poster.jpg')` }}>
    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Featured Movie</h1>
        <p className="text-lg mt-4">Discover the latest and greatest movies here.</p>
      </div>
    </div>
  </section>
);

const Section = ({ title, movies }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  </section>
);

export default HomePage;
