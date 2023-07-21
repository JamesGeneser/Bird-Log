import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function EuropeanStarling() {
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
          European Starling
        </Card.Header>
        <Card.Img
          src={require("../media/images/birds/europeanStarling.jpeg")}
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
            <Col xs={4} lg={4} className="text-center">
              <Button
                className="button "
                variant="secondary"
                onClick={handleShowDescription}
              >
                Basic Info
              </Button>
            </Col>
            <Col xs={4} lg={4} className="text-center">
              <Button
                className="button"
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
            src={require("../media/images/maps/europeanStarlingMap.jpg")}
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
            First brought to North America by Shakespeare enthusiasts in the
            nineteenth century, European Starlings are now among the continent’s
            most numerous songbirds. They are stocky black birds with short
            tails, triangular wings, and long, pointed bills. Though they’re
            sometimes resented for their abundance and aggressiveness, they’re
            still dazzling birds when you get a good look. Covered in white
            spots during winter, they turn dark and glossy in summer. For much
            of the year, they wheel through the sky and mob lawns in big, noisy
            flocks.
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
            src="https://macaulaylibrary.org/asset/482880/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            Starlings are relatives of the mynah birds, and like them they have
            impressive vocal abilities and a gift for mimicry. They can warble,
            whistle, chatter, make smooth liquid sounds, harsh trills and
            rattles, and imitate meadowlarks, jays, and hawks. The songs tend to
            consist of either loud whistles or softer, jumbled warbling.
            Whistled songs are a few seconds long, often used between males.
            Warbled songs can go on for more than a minute, and seem mainly
            directed at females. Males sing several varieties of each of these
            two classes of songs. Females also sing, particularly in the fall.
            Songs often include imitations of other birds, including Eastern
            Wood-Pewee, Killdeer, meadowlarks, Northern Bobwhite, Brown-headed
            Cowbird, Northern Flicker, and others.
          </p>
          <p>
            Male and female starlings use about 10 kinds of calls to communicate
            about where they are, whether there’s danger around, and how
            aggressive or agitated they feel. Among these are a purr-like call
            given as the bird takes flight, and a rattle that starlings make as
            they join a flock on the ground. Two types of screamlike calls
            indicate aggression and are often accompanied by flapping wings: one
            is a chattering call (described as chackerchackerchacker); the other
            is a high-pitched trill. Starlings also make metallic chip notes to
            other flock members and when harassing or mobbing predators.
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
