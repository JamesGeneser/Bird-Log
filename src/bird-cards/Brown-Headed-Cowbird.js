import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function BrownHeadedCowbird() {
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
          Brown-Headed Cowbird
        </Card.Header>

        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/brownHeadedCowbirdM.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">male</h3>
              {/* <p className="small-bird-title">Brewer's Blackbird</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/brownHeadedCowbirdF.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">female</h3>
              {/* <p className="small-title">Brewer's Blackbird</p> */}
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
            src={require("../media/images/maps/brownHeadedCowbirdMap.jpg")}
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
            The Brown-headed Cowbird is a stocky blackbird with a fascinating
            approach to raising its young. Females forgo building nests and
            instead put all their energy into producing eggs, sometimes more
            than three dozen a summer. These they lay in the nests of other
            birds, abandoning their young to foster parents, usually at the
            expense of at least some of the host’s own chicks. Once confined to
            the open grasslands of middle North America, cowbirds have surged in
            numbers and range as humans built towns and cleared woods.
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
            src="https://macaulaylibrary.org/asset/210500/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            Male Brown-headed Cowbirds sing a liquid-sounding series of low
            gurgling notes followed by thin sliding whistles, lasting slightly
            longer than 1 second. Song learning in cowbirds has been an
            interesting scientific puzzle, since the birds aren’t raised by
            members of their own species.
          </p>
          <p>
            Both male and female Brown-headed Cowbirds make a variety of
            whistles, clicking and chattering calls. You’ll often hear flight
            whistles, which are a series of 2–5 clear sweeping whistles with
            occasional buzzes or trills mixed in. Females make a distinctive
            rolling chatter that is very attractive to males. Males give their
            own chatter calls less often. Both sexes may make a short cluck note
            while feeding.
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
