import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogUp from './pages/Logup';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import GenrePage from './pages/GenrePage';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login&signup" element={<LogUp />} />
          <Route path="/search/:query" element={<SearchResultsPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/genre/:genreId" element={<GenrePage />} />
        </Routes>
    </>
  );
};

export default App;
