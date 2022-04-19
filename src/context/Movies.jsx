import {useEffect,useContext,useState,createContext} from "react";

export const MoviesContext = createContext();
const url = "https://imdb-api.com/en/API/Top250Movies/k_f5cb9xe5"


function MoviesProvider({ children }) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return setMovies(data.items);
    };
    fetchData();
  }, []);

  return (
    <MoviesContext.Provider value={{movies}}>
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesProvider;
