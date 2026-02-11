import { Component } from "react";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";

class SingleFilmPlaceholder extends Component {
  render() {
    return (
      <Col className="d-flex justify-content-center mb-2 px-1">
        <Placeholder as="div" animation="glow" style={{ width: "18em", height: "28em" }}>
          <Placeholder xs={12} bg="light" className="h-100" />
        </Placeholder>
      </Col>
    );
  }
}

export default SingleFilmPlaceholder;
