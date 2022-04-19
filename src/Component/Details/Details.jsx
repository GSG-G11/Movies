import React from "react";
import { useState, useEffect } from "react";

export default function Details({ id }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://imdb-api.com/en/API/Wikipedia/k_pbnbr85o/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .then(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <h2>{movie.year}</h2>
          <p>{movie.plotShort.plainText}</p>
        </div>
      )}
    </div>
  );
}
