import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function NorthernGoshawk() {
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
          Northern Goshawk
        </Card.Header>
        <Card.Img src={require("../media/images/birds/northernGoshawk.jpeg")} />

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
            src={require("../media/images/maps/northernGoshawkMap.jpg")}
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
            The Northern Goshawk is the bigger, fiercer, wilder relative of the
            Sharp-shinned and Cooper’s Hawks that prowl suburbs and backyards.
            It’s an accipiter—a type of hawk with short, broad wings and a long
            rudderlike tail that give it superb aerial agility. These secretive
            birds are mostly gray with bold white “eyebrow” stripes over
            piercing orange to red eyes. Northern Goshawks flash through forests
            chasing bird and mammal prey, pouncing silently or crashing feet
            first through brush to grab quarry in crushingly strong talons.
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
            src="https://macaulaylibrary.org/asset/110169/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            Adult goshawks give a rapid-fire ki-ki-ki-ki alarm call repeated
            10–20 times in response to threats or when chasing prey. They
            sometimes precede the call with a drawn-out kreey-a. When defending
            the nest, the female’s call can intensify to a constant scream. Both
            males and females also use three variations of a wailing kree-ah:
            members of a pair call to each other when the male enters the
            territory (often announcing himself with a single-note call), and
            the female gives a shorter version of the wail when her partner
            brings food to the nest. Once he delivers the prey, she gives a
            slower, clipped kree-ah and continues calling until he leaves the
            area.
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
