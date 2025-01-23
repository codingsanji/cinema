import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center mt-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="p-2 rounded-lg border-2 border-gray-300"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-lg">Search</button>
    </form>
  );
};

export default SearchBar;
