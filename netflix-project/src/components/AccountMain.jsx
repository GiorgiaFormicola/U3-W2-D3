import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AccountMain extends Component {
  render() {
    return (
      <main className="my-auto">
        <Container className="w-50">
          <Row className="border-bottom border-1 border-dark">
            <Col>
              <h1 className="text-light display-4 fw-normal">Edit Profile</h1>
            </Col>
          </Row>
          <Row className="py-3 border-bottom border-1 border-dark">
            <Col className="col-3">
              <img className="img-fluid" src="/assets/images/avatar.png" alt="User avatar" />
            </Col>
            <Col className="col-9">
              <div className="py-3 border-bottom border-1 border-dark">
                <h6 className="text-light fw-normal bg-secondary py-2 px-2">Strive Student</h6>
                <p className="text-light text-opacity-75 mb-1">Language:</p>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary" className="text-light rounded-0 px-2 py-0 bg-black">
                    <span className="small me-4">English </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/comedy" className="small">
                      Italian
                    </Dropdown.Item>
                    <Dropdown.Item href="#/drama" className="small">
                      Spanish
                    </Dropdown.Item>
                    <Dropdown.Item href="#/thriller" className="small">
                      Japanese
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="py-3 border-bottom border-1 border-dark">
                <p className="text-light text-opacity-75 mb-1">Maturity Settings:</p>
                <h6 className="text-light fw-normal bg-dark bg-opacity-100 py-2 px-2 small fw-semibold d-inline-block my-2">ALL MATURITY RATINGS</h6>
                <small className="d-block text-light fw-light">
                  Show titles of <span className="fw-medium">all maturity ratings</span> for this profile
                </small>
                <Button size="sm" variant="outline-light" className="footer-button rounded-0 mt-3 px-4 py-1">
                  <small>EDIT</small>
                </Button>
              </div>
              <div className="pt-3">
                <p className="text-light text-opacity-75 mb-1">Autoplay controls</p>
                <Form>
                  <Form.Check type="checkbox" className="d-flex gap-1 align-items-center">
                    <Form.Check.Input
                      type="checkbox"
                      className="bg-transparent rounded-0 text-secondary border-secondary"
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                    <Form.Check.Label className="small text-light fw-light">Autoplay next episode in a series on all devices.</Form.Check.Label>
                  </Form.Check>
                  <Form.Check type="checkbox" className="d-flex gap-1 align-items-center">
                    <Form.Check.Input
                      type="checkbox"
                      className="bg-transparent rounded-0 text-secondary border-secondary"
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                    <Form.Check.Label className="small text-light fw-light">Autoplay next episode in a series on all devices.</Form.Check.Label>
                  </Form.Check>
                </Form>
              </div>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="d-flex gap-3 justify-content-center">
              <Button size="sm" variant="outline-light" className="footer-button rounded-0 mt-3 px-4 py-1">
                SAVE
              </Button>
              <Button size="sm" variant="outline-light" className="footer-button rounded-0 mt-3 px-4 py-1">
                CANCEL
              </Button>
              <Button size="sm" variant="outline-light" className="footer-button rounded-0 mt-3 px-4 py-1">
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default AccountMain;
