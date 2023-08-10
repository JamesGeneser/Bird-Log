import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function BrewersBlackbird() {
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
          Brewer's Blackbird
        </Card.Header>

        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/brewersBlackBirdMale.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">male</h3>
              {/* <p className="small-bird-title">Brewer's Blackbird</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/brewersBlackBirdFemale.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">female</h3>
              {/* <p className="small-title">Brewer's Blackbird</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

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
                className="button "
                variant="secondary"
                onClick={handleShowDescription}
              >
                Basic Info
              </Button>
            </Col>
            <Col xs={4} lg={4} className="d-flex align-items-stretch">
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
            src={require("../media/images/maps/brewersBlackbirdMap.jpeg")}
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
            A bird to be seen in the full sun, the male Brewer’s Blackbird is a
            glossy, almost liquid combination of black, midnight blue, and
            metallic green. Females are a staid brown, without the male’s bright
            eye or the female Red-winged Blackbird’s streaks. Common in towns
            and open habitats of much of the West, you’ll see these long-legged,
            ground-foraging birds on sidewalks and city parks as well as
            chuckling in flocks atop shrubs, trees, and reeds.
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
            src="https://macaulaylibrary.org/asset/476763/embed"
            width={250}
            height={300}
          ></iframe>
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
