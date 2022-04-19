import { useEffect, useState, useContext }from 'react'
import  {MoviesContext}  from "../../context/Movies";

export default function Card() {
  const { movies } = useContext(MoviesContext);
  return (
    <div>
      {movies.map((item,index) => {        
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