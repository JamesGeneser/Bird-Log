import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function AmericanCrow() {
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
        <Card.Header className="bird-name bg-none">American Crow</Card.Header>
        <Card.Img src={require("../media/images/birds/americanCrow.jpeg")} />

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
            src={require("../media/images/maps/americanCrowMap.jpeg")}
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
            American Crows are familiar over much of the continent: large,
            intelligent, all-black birds with hoarse, cawing voices. They are
            common sights in treetops, fields, and roadsides, and in habitats
            ranging from open woods and empty beaches to town centers. They
            usually feed on the ground and eat almost anything—typically
            earthworms, insects and other small animals, seeds, and fruit; also
            garbage, carrion, and chicks they rob from nests. Their flight style
            is unique, a patient, methodical flapping that is rarely broken up
            with glides.
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
            src="https://macaulaylibrary.org/asset/135405/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            Crows have more than 20 calls. The most common, a harsh caw, has
            several qualities and lengths that may serve different purposes.
            Immature begging young American Crows give a higher-pitched, nasal
            call that can sound like a Fish Crow. You may also hear a variety of
            calls and alert calls given to rally others to mob predators.
          </p>
          <h3>Songs</h3>
          <p>
            The American Crow is not known for the beauty of its song, a series
            of loud caws. You may also hear crows making a “subsong”: a mixture
            of hoarse or grating coos, caws, rattles, and clicks. These are
            arranged in sequences that can be many minutes long, given quietly
            and with a rambling, improvised quality.
          </p>
          <h3>Other Sounds</h3>
          <p>Sometimes clacks its bill to make a single, sharp note.</p>
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
