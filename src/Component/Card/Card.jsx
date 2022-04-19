import { useState,useEffect }from 'react'

const url = "https://imdb-api.com/en/API/Top250Movies/k_f5cb9xe5"

export default  function Card() {
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
      { movies.map((item,index) => {        
        return  (
          <div key={index} >
            <img src={item.image} alt=""/>
            <h1>{item.rank}</h1>
            <h2>{item.title}</h2>
            <h2>{item.year}</h2>
          </div>
        )
      }
      )}
    </div>
  );
}