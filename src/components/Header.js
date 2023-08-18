import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intro from "../components/Intro";

export default function Header() {
  return (
    <>
      <Navbar className="navbar">
        <Container fluid>
          <Navbar.Brand className="title p-0 ">Birds of Colorado</Navbar.Brand>

          <Row>
            <Col>
              <p className="citation">data and images from</p>
              <Nav.Link
                className="link text-decoration-underline"
                href="https://www.allaboutbirds.org/news/"
                target="_blank"
              >
                Allaboutbirds.org
              </Nav.Link>
            </Col>
            <Col>
              {" "}
              <img
                className="cornellTag"
                src={require("../media/images/cornellLab.png")}
              ></img>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Intro />
    </>
  );
}
