import React, { useEffect, useState } from "react";

  function HomePage() {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e3a92895b0a6c5293e775e40825cf6cf"
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data);
        });
        
    }, []);
  return (
    <div>HomePage</div>
  )
}

export default HomePage
