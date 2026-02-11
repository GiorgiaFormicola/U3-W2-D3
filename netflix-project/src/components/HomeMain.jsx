import { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import FilmsSection from "./FilmsSection";

class HomeMain extends Component {
  render() {
    return (
      <>
        <main>
          <Container fluid={true} className="px-4">
            <Row className="justify-content-between">
              <Col className="d-flex gap-4">
                <h2 className="mb-4">TV Shows</h2>
                <Dropdown className="mt-1">
                  <Dropdown.Toggle variant="outline-secondary" className="text-light rounded-0 px-2 py-1 bg-transparent">
                    Genres <span></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/comedy" className="fs-5">
                      Comedy
                    </Dropdown.Item>
                    <Dropdown.Item href="#/drama" className="fs-5">
                      Drama
                    </Dropdown.Item>
                    <Dropdown.Item href="#/thriller" className="fs-5">
                      Thriller
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={4} className="text-end">
                <div>
                  <i className="bi bi-grid hero-icons fs-4 text-light"></i>
                  <i className="bi bi-grid-3x3 hero-icons fs-4 text-light"></i>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="px-4">
            <FilmsSection searchString="Star Wars"></FilmsSection>
            <FilmsSection searchString="Harry Potter"></FilmsSection>
            <FilmsSection searchString="Lord Of The Rings"></FilmsSection>
          </Container>
        </main>
      </>
    );
  }
}

export default HomeMain;
