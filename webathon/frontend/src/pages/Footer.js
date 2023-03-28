import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <Row>
                <Col>
                    <a href="#">About Us</a>
                </Col>
                <Col>
                    <a href="#">Contact Us</a>
                </Col>
            </Row>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            <a href="https://github.com/mygithub" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-3" />
            </a>
            <a href="https://linkedin.com/in/mylinkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="p-0">
            <p className="text-center">
              This site was made with <a href="https://reactjs.org/">React</a> and <a href="https://getbootstrap.com/">Bootstrap</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;