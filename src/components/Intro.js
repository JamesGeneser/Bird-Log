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
              className="mt-2 mb-2 feather-button d-flex align-middle justify-content-center"
              onClick={() => setOpen(!open)}
              aria-controls="collapseTarget"
              aria-expanded={false}
            >
              <Image src={featherSvg} className={"feather-svg"} />
            </Button>
          </Col>

          <Col className="d-flex flex-row-reverse m-3">
            {" "}
            <img
              className="cornellTag m-0"
              src={require("../media/images/cornellLab.png")}
            ></img>
          </Col>
        </Row>
        <Collapse in={open} id="collapseTarget">
          <div id="collapseTarget" className="p-0 m-0 ">
            <Row className="intro-text">
              {" "}
              <p>
                Birds of Colorado is a growing list. It was made to be used as
                an education or an identification resource.
              </p>
              <p>
                {" "}
                The birds pictured below either live in or migrate through
                Colorado. Browse through the list to see how many you can
                recognize!
              </p>
              <p>
                {" "}
                Or study up on your bird calls to prepare for your next walk in
                the woods.
              </p>
            </Row>
          </div>
        </Collapse>{" "}
      </Container>
    </div>
  );
}
