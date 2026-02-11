import { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class AccountNavbar extends Component {
  render() {
    return (
      <header>
        <Navbar data-bs-theme="dark">
          <Container fluid={true}>
            <Link to="/" className="navbar-brand">
              <img src="/assets/images/logo.png" className="d-inline-block align-top" alt="Netflix Logo" style={{ width: "100px", height: "55px" }} />
            </Link>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default AccountNavbar;
