import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function BlackCappedChickadee() {
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
          Black-capped Chickadee
        </Card.Header>
        <Card.Img
          src={require("../media/images/birds/blackCappedChickadee.jpeg")}
        />

        <Card.Footer className="button-row ">
          <Row className="">
            <Col xs={4} lg={4} className="text-center">
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
            <Col xs={4} lg={4} className="text-center">
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
            src={require("../media/images/maps/blackCappedChickadeeMap.jpg")}
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
            A bird almost universally considered “cute” thanks to its oversized
            round head, tiny body, and curiosity about everything, including
            humans. The chickadee’s black cap and bib; white cheeks; gray back,
            wings, and tail; and whitish underside with buffy sides are
            distinctive. Its habit of investigating people and everything else
            in its home territory, and quickness to discover bird feeders, make
            it one of the first birds most people learn.
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
            src="https://macaulaylibrary.org/asset/404193/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            In most of North America, the song is a simple, pure 2 or 3-note
            whistled fee-bee or hey, sweetie. In the Pacific Northwest, the song
            is 3 or 4 notes on the same pitch; the song is also different on
            Martha's Vineyard in MA. In much of the range, males begin singing
            in mid-January, and the song increases in frequency as winter
            progresses. Females also sing occasionally.
          </p>
          <p>
            Chickadees make their chickadee-dee-dee call using increasing
            numbers of dee notes when they are alarmed. They also have a
            gargling call, often given aggressively when a lower-ranking bird
            gets close to a higher-ranking one; also exchanged between members
            of a pair. Black-capped Chickadees make a high pitched see as a
            high-intensity alarm call, often when a fast-approaching predator is
            detected. When chickadees hear this call, they freeze in position
            until they hear a chickadee-dee call signifying “all clear.” High
            see calls most often given by males.
          </p>
          <p>
            Chickadee nestlings make an explosive hiss and slap the inside of
            their nest cavity when an intruder looks in.
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
