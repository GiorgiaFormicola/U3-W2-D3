import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";

const HomeNavbar = function () {
  const location = useLocation();

  return (
    <header>
      <Navbar expand="lg" data-bs-theme="dark">
        <Container fluid={true}>
          <Link to="/" className="navbar-brand">
            <img src="/assets/images/logo.png" className="d-inline-block align-top" alt="Netflix Logo" style={{ width: "100px", height: "55px" }} />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="fs-4 px-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold mb-2 mb-lg-0">
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
              </Link>
              <Link to="/tv-shows" className={location.pathname === "/tv-shows" ? "nav-link active" : "nav-link"}>
                TV Shows
              </Link>
              <Link to="/movies" className={location.pathname === "/movies" ? "nav-link active" : "nav-link"}>
                Movies
              </Link>
              <Link to="/recently-added" className={location.pathname === "/recently-added" ? "nav-link active" : "nav-link"}>
                Recently Added
              </Link>
              <Link to="/my-list" className={location.pathname === "/my-list" ? "nav-link active" : "nav-link"}>
                My List
              </Link>
            </Nav>
            <Row className="align-items-center">
              <Col className="d-flex align-items-center">
                <i className="bi bi-search icons"></i>
                <span id="kids" className="fw-bold">
                  KIDS
                </span>
                <i className="bi bi-bell icons"></i>
                <Link to="/account">
                  <i className="bi bi-person-circle icons"></i>
                </Link>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HomeNavbar;
