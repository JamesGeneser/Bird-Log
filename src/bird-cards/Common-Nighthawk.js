import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function CommonNighthawk() {
  const [showRange, setShowRange] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showCall, setShowCall] = useState(false);

  const handleCloseRange = () => setShowRange(false);
  const handleCloseDescription = () => setShowDescription(false);
  const handleCloseCall = () => setShowCall(false);
  const handleShowRange = () => setShowRange(true);
  const handleShowDescription = () => setShowDescription(true);
  const handleShowCall = () => setShowCall(true);

  return (
    <>
      <Card className="card m-2">
        <Card.Header className="bird-name bg-none">
          Common Nighthawk
        </Card.Header>
        <Card.Img src={require("../media/images/birds/commonNightHawk.jpeg")} />

        <Card.Footer className="button-row ">
          <Row className="">
            <Col xs={4} lg={4} className="d-flex align-items-stretch">
              <Button
                className="button "
                variant="secondary"
                onClick={handleShowRange}
              >
                Range Map
              </Button>
            </Col>
            <Col xs={4} lg={4} className="d-flex align-items-stretch">
              <Button
                className="button 
                "
                variant="secondary"
                onClick={handleShowDescription}
              >
                Basic Info
              </Button>
            </Col>
            <Col xs={4} lg={4} className="d-flex align-items-stretch">
              <Button
                className="button "
                variant="secondary"
                onClick={handleShowCall}
              >
                Calls & Songs
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>

      <Modal show={showRange} onHide={handleCloseRange}>
        <Modal.Header closeButton>
          <Modal.Title>Range Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            className="img-fluid"
            src={require("../media/images/maps/commonNightHawkMap.jpg")}
          />
        </Modal.Body>
        <Modal.Footer>
          <Image
            className="img-fluid"
            src={require("../media/images/maps/birdMapKey.png")}
          />
          <Button variant="secondary" onClick={handleCloseRange}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDescription} onHide={handleCloseDescription}>
        <Modal.Header closeButton>
          <Modal.Title>Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            On warm summer evenings, Common Nighthawks roam the skies over
            treetops, grasslands, and cities. Their sharp, electric peent call
            is often the first clue they’re overhead. In the dim half-light,
            these long-winged birds fly in graceful loops, flashing white
            patches out past the bend of each wing as they chase insects. These
            fairly common but declining birds make no nest. Their young are so
            well camouflaged that they’re hard to find, and even the adults seem
            to vanish as soon as they land.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDescription}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showCall} onHide={handleCloseCall}>
        <Modal.Header closeButton>
          <Modal.Title>Call</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            className="cornel-bird-call"
            src="https://macaulaylibrary.org/asset/406857/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            Common Nighthawks give a nasal peent or beer call while flying. When
            defending a nest, the female gives a hissing or throaty cluck.
            Courting males give a croaking auk auk auk call.
          </p>
          <h4>Other Sounds</h4>
          <p>
            During the breeding season, the male makes a booming sound by
            flexing his wings while diving, making air rush through his
            primaries. He does this while diving at females during courtship,
            and while diving at intruders (including humans). The male may clap
            his wings when intruders approach the nest.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCall}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
