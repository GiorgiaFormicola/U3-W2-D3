import { Component } from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class SingleFilm extends Component {
  render() {
    return (
      <Col className="d-flex justify-content-center mb-2 px-1">
        <Link to={"/movie-details/" + this.props.filmID}>
          <img className="img-fluid h-100" src={this.props.filmSrc} alt={this.props.filmTitle} style={{ width: "18em" }} />
        </Link>
      </Col>
    );
  }
}
export default SingleFilm;
