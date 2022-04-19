import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://imdb-api.com/en/API/Top250Movies/k_inx1pjtk";

export default function Card() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      return setMovies(data.items);
    };
    fetchData();
  }, []);

  return (
    <div>
      {movies.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt="" />
            <h1>{item.rank}</h1>
            <h2>{item.title}</h2>
            <h2>{item.year}</h2>
            <Link to="/details">
              <button onClick={() => changeId(item.id)}>Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
