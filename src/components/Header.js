import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <>
      <Container fluid className="d-flex flex-d intro">
        <Row>
          <h1 className="title  mt-1 ms-1 mb-0 pt-2">Birds of Colorado</h1>
        </Row>
      </Container>
      <Container fluid className="intro">
        <Navbar className="navbar">
          <p className="citation  p-1 ms-4 m-0 pt-0">data and images from</p>
          <Nav.Link
            className="link text-decoration-underline  p-1 m-0 pt-0"
            href="https://www.allaboutbirds.org/news/"
            target="_blank"
          >
            Allaboutbirds.org
          </Nav.Link>
        </Navbar>
      </Container>
    </>
  );
}
