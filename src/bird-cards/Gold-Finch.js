import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function GoldFinch() {
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
        <Card.Header className="bird-name bg-none">Gold Finch</Card.Header>

        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item interval={null}>
            <Card.Img src={require("../media/images/birds/goldFinchM.jpeg")} />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">male</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <Card.Img src={require("../media/images/birds/goldFinchF.jpeg")} />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">female</h3>
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
            src={require("../media/images/maps/goldFinchMap.jpg")}
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
            This handsome little finch, the state bird of New Jersey, Iowa, and
            Washington, is welcome and common at feeders, where it takes
            primarily sunflower and nyjer. Goldfinches often flock with Pine
            Siskins and Common Redpolls. Spring males are brilliant yellow and
            shiny black with a bit of white. Females and all winter birds are
            more dull but identifiable by their conical bill; pointed, notched
            tail; wingbars; and lack of streaking. During molts they look
            bizarrely patchy.
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
            src="https://macaulaylibrary.org/asset/462535/embed"
            width={250}
            height={300}
          ></iframe>
          <h4>Songs</h4>
          <p>
            Males sing a long and variable series of twitters and warbles that
            can be several seconds long. The notes and phrases are variable and
            repeated in a seemingly random order. Birds continue to learn song
            patterns throughout life.
          </p>
          <h4>Calls</h4>
          <p>
            The American Goldfinch’s most common call is its contact call, often
            given in flight. It sounds like the bird is quietly saying
            po-ta-to-chip with a very even cadence. Birds sometimes give harsh
            threat calls when in feeding flocks or at the nest. Males make a
            tee-yee courtship call upon landing near a female in spring or early
            summer, often followed by a burst of song. Females brooding
            nestlings make a rapid sequence of high notes when they hear their
            mate approaching with food. Birds at their nest make a loud,
            two-parted bay-bee call if they feel threatened.
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
