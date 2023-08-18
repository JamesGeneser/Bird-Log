import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Card, Image } from "react-bootstrap";
import featherSvg from "../media/images/feather.svg";

export default function Intro() {
  const [open, setOpen] = useState(false);
  return (
    <div className="intro">
      <Button
        className="m-3 feather-button"
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
              Birds of Colorado is a growing list. It was made to be used as an
              education or an identification resource.
            </p>
            <p>
              {" "}
              Every bird below can be found within Colorado, so browse and see
              if you can ID a familiar bird.
            </p>
            <p>
              {" "}
              Or study up on your bird calls to prepare for your next walk in
              the woods.
            </p>
          </Card>
        </div>
      </Collapse>
    </div>
  );
}
