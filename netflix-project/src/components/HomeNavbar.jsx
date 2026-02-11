import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HomeNavbar extends Component {
  render() {
    return (
      <header>
        <Navbar expand="lg" data-bs-theme="dark">
          <Container fluid={true}>
            <Navbar.Brand href="#home">
              <img src="/assets/images/logo.png" className="d-inline-block align-top" alt="Netflix Logo" style={{ width: "100px", height: "55px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="fs-4 px-3" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto fw-bold mb-2 mb-lg-0">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#tv-shows">TV Shows</Nav.Link>
                <Nav.Link href="#movies">Movies</Nav.Link>
                <Nav.Link href="#recently-added">Recently Added</Nav.Link>
                <Nav.Link href="#my-list">My List</Nav.Link>
              </Nav>
              <Row className="align-items-center">
                <Col className="d-flex align-items-center">
                  <i className="bi bi-search icons"></i>
                  <span id="kids" className="fw-bold">
                    KIDS
                  </span>
                  <i className="bi bi-bell icons"></i>
                  <i className="bi bi-person-circle icons"></i>
                </Col>
              </Row>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default HomeNavbar;
