import { Component } from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Placeholder from "react-bootstrap/Placeholder";
import SingleFilm from "./SingleFilm";
import SingleFilmPlaceholder from "./SingleFilmPlaceholder";
// const key = "14895418";

class SeriesSection extends Component {
  state = {
    searchURL: `http://www.omdbapi.com/?apikey=14895418&s=${this.props.searchString}`,
    searchArray: [],
    loading: true,
    error: false,
  };

  getFilms = () => {
    fetch(this.state.searchURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the films list");
        }
      })
      .then((searchObject) => {
        console.log(searchObject.Search);
        this.setState({
          ...this.state,
          searchArray: searchObject.Search,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
        this.setState({
          ...this.state,
          loading: false,
          error: true,
        });
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <>
        {this.state.loading && (
          <>
            <Placeholder as="h4" animation="glow">
              <Placeholder xs={6} lg={4} className="rounded-pill" />
            </Placeholder>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-4">
              {Array.from(Array(6).keys()).map((i) => {
                return <SingleFilmPlaceholder key={i}></SingleFilmPlaceholder>;
              })}
            </Row>
          </>
        )}

        {this.state.error && !this.state.loading && (
          <>
            <h4>Error</h4>
            <Alert variant="black" className="text-light text-center py-5 my-5 bg-dark bg-opacity-50">
              <p className="py-5 mb-0 fs-6">Ops! An error occurred while loading the data!</p>
            </Alert>
          </>
        )}

        {!this.state.error && !this.state.loading && (
          <>
            <h4>{this.props.searchString} Series</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-4">
              {this.state.searchArray.slice(0, 6).map((film) => {
                return <SingleFilm key={film.imdbID} filmSrc={film.Poster} filmTitle={film.Title} filmID={film.imdbID}></SingleFilm>;
              })}
            </Row>
          </>
        )}
      </>
    );
  }
}

export default SeriesSection;
