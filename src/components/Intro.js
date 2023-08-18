import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Card, Image } from "react-bootstrap";
import featherSvg from "../media/images/feather.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Intro() {
  const [open, setOpen] = useState(false);
  return (
    <div className="intro">
      <Container>
        {" "}
        <Row>
          <Col>
            {" "}
            <Button
              className="ms-3 mb-2 feather-button"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <Image src={featherSvg} />
            </Button>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text " className="p-0 m-0">
                <Card>
                  <p>
                    Birds of Colorado is a growing list. It was made to be used
                    as an education or an identification resource.
                  </p>
                  <p>
                    {" "}
                    Every bird below can be found within Colorado, so browse and
                    see if you can ID a familiar bird.
                  </p>
                  <p>
                    {" "}
                    Or study up on your bird calls to prepare for your next walk
                    in the woods.
                  </p>
                </Card>
              </div>
            </Collapse>{" "}
          </Col>
          <Col className="d-flex flex-row-reverse">
            {" "}
            <img
              className="cornellTag m-0"
              src={require("../media/images/cornellLab.png")}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
