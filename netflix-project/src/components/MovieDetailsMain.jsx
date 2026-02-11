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
    <main className="flex-grow-1 d-flex align-items-center">
      <Container fluid>
        <hr className="text-light text-opacity-75 mx-3 mb-4 d-none d-lg-block" />
        <Row className="align-items-center">
          {film && (
            <>
              <Col xs={12} lg={3} className="text-center mb-3 mb-lg-0">
                <img className="img-fluid" src={film.Poster} alt={film.Title + "Poster"} />
              </Col>
              <Col xs={12} lg={9} className="px-5 pe-lg-4 ps-lg-0 d-flex">
                <Card data-bs-theme="dark" className="border-0 bg-transparent">
                  <Col xs={12}>
                    <Card.Header className="d-flex fs-2 bg-transparent fw-bold text-center justify-content-center justify-content-lg-start pb-3 pb-lg-2 mt-1 mt-lg-0">
                      {film.Title}
                    </Card.Header>
                  </Col>
                  <Card.Body className="d-flex flex-column flex-lg-row gap-3 ">
                    <Col xs={12} lg={8} className="d-flex flex-column">
                      <Card.Title className="d-flex flex-column flex-lg-row fs-6 gap-3 gap-lg-5 justify-content-start pt-1 mb-0 pt-lg-0">
                        <p className="fw-light mb-0">
                          Written by: <br className="d-none d-lg-block" /> <span className="fw-bold"> {film.Writer}</span>
                        </p>
                        <p className="fw-light mb-0">
                          Directed by: <br className="d-none d-lg-block" />
                          <span className="fw-bold"> {film.Director}</span>
                        </p>
                        <p className="fw-light mb-0">
                          Release date: <br className="d-none d-lg-block" />
                          <span className="fw-bold"> {film.Released}</span>
                        </p>
                        <p className="fw-light mb-0">
                          Language: <br className="d-none d-lg-block" />
                          <span className="fw-bold"> {film.Language}</span>
                        </p>
                      </Card.Title>
                      <Card.Text className="fs-4 my-5 flex-grow-1 align-content-center">{film.Plot}</Card.Text>
                      <Card.Title className="d-flex fs-6 flex-column gap-3 mb-0 pb-5 pb-lg-0">
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
                    </Col>
                    <Col xs={12} lg={4} className="d-none d-lg-block border-start border-1 border-light border-opacity-10">
                      {commentsArray.length !== 0 && <CommentList commentsArray={commentsArray}></CommentList>}
                    </Col>{" "}
                  </Card.Body>
                </Card>
              </Col>
            </>
          )}
        </Row>
        <hr className="text-light text-opacity-75 mx-3 mt-4 d-none d-lg-block" />
      </Container>
    </main>
  );
};

export default MovieDetailsMain;
