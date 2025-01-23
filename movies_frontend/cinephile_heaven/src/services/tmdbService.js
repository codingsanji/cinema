import axios from 'axios';

const API_KEY = '35ce98481f440ebee1944c3cd3a98735'; // TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch trending movies
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

// Fetch popular movies
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

// Fetch upcoming movies
export const getNewMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching new movies:', error);
    throw error;
  }
};

// Fetch movie details by ID
export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Fetch movie trailer by ID
export const getMovieTrailer = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
    const trailers = response.data.results.filter(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return trailers.length > 0 ? trailers[0] : null;
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    throw error;
  }
};

// Fetch search results for movies
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};

// Fetch movies by genre
export const getMoviesByGenre = async (genreId) => {
  try {
    const genreResponse = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const genre = genreResponse.data.genres.find((g) => g.id === parseInt(genreId, 10));

    const movieResponse = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
      },
    });

    return {
      name: genre?.name || 'Unknown Genre',
      movies: movieResponse.data.results,
    };
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    throw error;
  }
};
