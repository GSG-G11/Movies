import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://imdb-api.com/en/API/Top250Movies/k_pbnbr85o";

export default function Card({changeId}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.items))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {movies.map((movie,index) => (
            <div key={index}>
              <img src={movie.image} alt="" />
              <h1>{movie.rank}</h1>
              <h2>{movie.title}</h2>
              <h2>{movie.year}</h2>
            <Link to="/details">
              <button onClick={() => changeId(movie.id)}>Details</button>
            </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}