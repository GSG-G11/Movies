import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import image from "../../images/gallery-2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const url = "https://imdb-api.com/en/API/Top250Movies/k_pbnbr85o";

export default function Cards({ changeId }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
          {/* {movies.map((movie, index) => (
            <div key={index}>
              <img src={movie.image} alt="" />
              <h1>{movie.rank}</h1>
              <h2>{movie.title}</h2>
              <h2>{movie.year}</h2>
            <Link to="/details">
              <button onClick={() => changeId(movie.id)}>Details</button>
            </Link>
            </div>
          
          ))} */}
          {/* 
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
          <Container className="cards__container">
           
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title className="movie__title">The Batman</Card.Title>
                <Card.Text className="movie__text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go To Details</Button>
              </Card.Body>
            </Card>
     
            
          </Container>
        </div>
      )}
    </div>
  );
}

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
