import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function RockPigeon() {
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
        <Card.Header className="bird-name bg-none">Rock Pigeon</Card.Header>
        <Card.Img src={require("../media/images/birds/rockPigeon.jpeg")} />

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
            src={require("../media/images/maps/rockPigeonMap.jpg")}
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
            {" "}
            A common sight in cities around the world, Rock Pigeons crowd
            streets and public squares, living on discarded food and offerings
            of birdseed. In addition to the typical blue-gray bird with two dark
            wingbars, you'll often see flocks with plain, spotted, pale, or
            rusty-red birds in them. Introduced to North America from Europe in
            the early 1600s, city pigeons nest on buildings and window ledges.
            In the countryside they also nest on barns and grain towers, under
            bridges, and on natural cliffs.
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
            src="https://macaulaylibrary.org/asset/224823151/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            Song is a rolling series of throaty coos accompanied by strutting,
            bowing, inflating the throat, and fanning the tail.
          </p>
          <h3>Songs</h3>
          <p>
            Song is a rolling series of throaty coos accompanied by strutting,
            bowing, inflating the throat, and fanning the tail.
          </p>
          <h3>Other Sounds</h3>
          <p>
            When taking off, pigeons often beat the tips of their wings together
            on upstrokes, making a sharp slapping sound. Upon alighting, they
            sometimes deliberately and audibly stamp their feet.
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Image
            className="img-fluid"
            src={require("../images/birdMapKey.png")}
          /> */}
          <Button variant="secondary" onClick={handleCloseCall}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
