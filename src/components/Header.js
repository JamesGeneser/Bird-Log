import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <>
      <Navbar className="navbar">
        <Container className="">
          <Navbar.Brand className="title p-0 ">Colorado Birds</Navbar.Brand>

          <Row>
            <Col>
              <p className="citation p-0 m-0">data and images from</p>
              <Nav.Link
                className="link"
                href="https://www.allaboutbirds.org/news/"
                target="_blank"
              >
                Allaboutbirds.org
              </Nav.Link>
            </Col>
            <Col>
              {" "}
              <img
                className="cornellTag p-0 m-0"
                src={require("../media/images/cornellLab.png")}
              ></img>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
