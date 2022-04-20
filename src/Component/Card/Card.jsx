import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import image from "../../images/gallery-2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const url = "https://imdb-api.com/en/API/Top250Movies/k_inx1pjtk";

export default function Cards({ changeId }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.items))
      .then(() => setIsLoading(false));
  }, []);
  console.log(movies, 123);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container className="cards__container">
          {movies.map((movie, index) => (
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title className="movie__title">{movie.title}</Card.Title>
                <Card.Text>
                  <h2>{movie.year}</h2>
                </Card.Text>
                <Link to="/details">
                  <Button onClick={() => changeId} variant="primary">
                    Go To Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Container>
        // {/* <Container className="cards__container">
        //   <Card className="card" style={{ width: "18rem" }}>
        //     <Card.Img variant="top" src={movie.image} />
        //     <Card.Body>
        //       <Card.Title className="movie__title">{movie.title}</Card.Title>
        //       <Card.Text>
        //       <h2>{movie.year}</h2>
        //       </Card.Text>
        //       <Link to="/details">
        //         <Button onClick={() => changeId} variant="primary">
        //           Go To Details
        //         </Button>
        //       </Link>
        //     </Card.Body>
        //   </Card>
        // </Container> */}
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
