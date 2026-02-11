import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const URL = `http://www.omdbapi.com/?apikey=14895418&i=`;

const MovieDetailsMain = function (props) {
  const idURL = URL + `${props.filmID}`;
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getMovie = function () {
    fetch(idURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the movie details");
        }
      })
      .then((filmObject) => {
        setLoading(false);
        setFilm(filmObject);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="h-100">
      <Container fluid className="h-100">
        <Row className="h-100 pt-2 pt-lg-3 pb-5">
          <Col xs={12} className="d-flex flex-column flex-lg-row gap-lg-3">
            {film && (
              <>
                <img className="img-fluid" src={film.Poster} alt={film.Title + "Poster"} />
                <Card data-bs-theme="dark" className="w-100 border-0 bg-transparent pb-3 pb-lg-0">
                  <Card.Header className="fs-2 bg-transparent fw-bold">{film.Title}</Card.Header>
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="d-flex flex-column flex-lg-row fs-6 gap-3 gap-lg-4 justify-content-start">
                      <p className="fw-light mb-0">
                        Written by: <span className="fw-bold"> {film.Writer}</span>
                      </p>
                      <p className="fw-light mb-0">
                        Directed by:<span className="fw-bold"> {film.Director}</span>
                      </p>
                      <p className="fw-light mb-0">
                        Release date:<span className="fw-bold"> {film.Released}</span>
                      </p>
                      <p className="fw-light mb-0">
                        Language:<span className="fw-bold"> {film.Language}</span>
                      </p>
                    </Card.Title>
                    <Card.Text className="fs-4 w-75 my-5 mb-lg-0">{film.Plot}</Card.Text>
                    <Card.Title className="d-flex fs-6 flex-column gap-3 mb-0">
                      <p className="fw-light mb-0">
                        Cast: <span className="fw-bold"> {film.Actors}</span>
                      </p>
                      <p className="fw-light mb-0">
                        Genres:<span className="fw-bold"> {film.Genre}</span>
                      </p>
                      <p className="fw-light mb-0">
                        Awards:<span className="fw-bold"> {film.Awards}</span>
                      </p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default MovieDetailsMain;
