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
              type="button"
              data-toggle="collapse"
              data-target="#collapseTarget"
              className="mt-2 mb-2 feather-button"
              onClick={() => setOpen(!open)}
              aria-controls="collapseTarget"
              aria-expanded={false}
            >
              <Image src={featherSvg} className={"feather-svg"} />
            </Button>
            <Collapse in={open} id="collapseTarget">
              <div id="collapseTarget" className="p-0 m-0">
                <p>
                  Birds of Colorado is a growing list. It was made to be used as
                  an education or an identification resource.
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
              </div>
            </Collapse>{" "}
          </Col>
          <Col className="d-flex flex-row-reverse m-3">
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
