import { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

class AccountNavbar extends Component {
  render() {
    return (
      <header>
        <Navbar data-bs-theme="dark">
          <Container fluid={true}>
            <Navbar.Brand href="#home">
              <img src="/assets/images/logo.png" className="d-inline-block align-top" alt="Netflix Logo" style={{ width: "100px", height: "55px" }} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default AccountNavbar;
