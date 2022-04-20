import React from "react";
import { useState, useEffect } from "react";
import './Details.css'

export default function Details({ id }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://imdb-api.com/en/API/Wikipedia/k_inx1pjtk/${id.id}`;
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .then(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        
        <div className="details">
          <img src="" alt="" />
          <h1>{movie.title}</h1>
          <h2>{movie.year}</h2>
          <p>{movie.plotShort.plainText}</p>
        </div>
      )}
    </div>
  );
}
