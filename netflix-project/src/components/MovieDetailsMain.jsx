import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CommentList from "./CommentList";

const omdbURL = `http://www.omdbapi.com/?apikey=14895418&i=`;
const commentsURL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzA2NDM4NTMsImV4cCI6MTc3MTg1MzQ1M30.Cm9gOiPR0KyOzR70lK_Fl6k-6KIZR3NS3RaJU7DRle0";

const MovieDetailsMain = function (props) {
  const idURL = omdbURL + `${props.filmID}`;
  const [film, setFilm] = useState(null);
  const [commentsArray, setCommentsArray] = useState([]);
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

  const getComments = () => {
    fetch(commentsURL + `${props.filmID}`, {
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the movie comments");
        }
      })
      .then((movieCommentsArray) => {
        setLoading(false);
        setCommentsArray(movieCommentsArray);
      })
      .catch((err) => {
        console.log("ERROR", err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getMovie();
    getComments();
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
                  <Card.Body className="d-flex gap-4 py-0">
                    <div className="d-flex flex-column justify-content-between w-75 py-4">
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
                      <Card.Text className="fs-4 my-5 mb-lg-0">{film.Plot}</Card.Text>
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
                    </div>
                    {commentsArray.length !== 0 && <CommentList commentsArray={commentsArray}></CommentList>}
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
