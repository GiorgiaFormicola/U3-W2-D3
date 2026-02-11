import { Component } from "react";
import Col from "react-bootstrap/Col";

class SingleFilm extends Component {
  render() {
    return (
      <Col className="d-flex justify-content-center mb-2 px-1">
        <img className="img-fluid" src={this.props.filmSrc} alt={this.props.filmTitle} style={{ width: "18em" }} />
      </Col>
    );
  }
}
export default SingleFilm;
