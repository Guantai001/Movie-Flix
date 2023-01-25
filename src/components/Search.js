import React from 'react'

  function Search({ handleSearch , handleFilter}) {
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_KEY = "api_key=e3a92895b0a6c5293e775e40825cf6cf";
    const SEARCH_URL = `${BASE_URL}/search/movie?${API_KEY}`;
  return (
    <div>Search</div>
  )
}

export default Search