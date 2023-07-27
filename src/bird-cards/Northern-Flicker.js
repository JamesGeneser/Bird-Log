import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function NorthernFlicker() {
  const [showRange, setShowRange] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showCall, setShowCall] = useState(false);

  const handleCloseRange = () => setShowRange(false);
  const handleCloseDescription = () => setShowDescription(false);
  const handleCloseCall = () => setShowCall(false);
  const handleShowRange = () => setShowRange(true);
  const handleShowDescription = () => setShowDescription(true);
  const handleShowCall = () => setShowCall(true);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Card className="card m-2">
        <Card.Header className="bird-name bg-none">
          Northern Flicker
        </Card.Header>

        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/nFlickerRedM.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">male </h3>
              <p>red-shafted</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/nflickerRedF.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">female </h3>
              <p>red-shafted</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/nFlickerYellowM.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">male </h3>
              <p>yellow-shafted</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/nFlickerYellowF.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">female </h3>
              <p>yellow-shafted</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

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
            src={require("../media/images/maps/redWingedBbMap.jpg")}
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
            Northern Flickers are large, brown woodpeckers with a gentle
            expression and handsome black-scalloped plumage. On walks, don’t be
            surprised if you scare one up from the ground. It’s not where you’d
            expect to find a woodpecker, but flickers eat mainly ants and
            beetles, digging for them with their unusual, slightly curved bill.
            When they fly you’ll see a flash of color in the wings – yellow if
            you’re in the East, red if you’re in the West – and a bright white
            flash on the rump.
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
            src="https://macaulaylibrary.org/asset/460089/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            Northern Flickers make a loud, rolling rattle with a piercing tone
            that rises and falls in volume several times. The song lasts 7 or 8
            seconds and is quite similar to the call of the Pileated Woodpecker.
            You’ll hear it in the spring and early summer, while pairs are
            forming and birds are establishing their territories.
          </p>
          <p>
            Flickers make a loud single-note call, often sounding like kyeer,
            about a half-second long. When birds are close together and
            displaying they may make a quiet, rhythmic wick-a, wick-a call.
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
