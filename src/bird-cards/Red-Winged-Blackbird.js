import React from "react";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

export default function RedWingedBb() {
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
          Red-Winged Black Bird
        </Card.Header>

        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/redwingedBBM.jpeg")}
            />
            <Carousel.Caption className="caption">
              <h3 className="bird-sex">male</h3>
              {/* <p className="small-bird-title">Brewer's Blackbird</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <Card.Img
              src={require("../media/images/birds/redwingedBBF.jpeg")}
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
            One of the most abundant birds across North America, and one of the
            most boldly colored, the Red-winged Blackbird is a familiar sight
            atop cattails, along soggy roadsides, and on telephone wires.
            Glossy-black males have scarlet-and-yellow shoulder patches they can
            puff up or hide depending on how confident they feel. Females are a
            subdued, streaky brown, almost like a large, dark sparrow. Their
            early and tumbling song are happy indications of the return of
            spring.
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
            src="https://macaulaylibrary.org/asset/420022/embed"
            width={250}
            height={300}
          ></iframe>
          <p>
            The male Red-winged Blackbird’s conk-la-ree! is a classic sound of
            wetlands across the continent. The 1-second song starts with an
            abrupt note that turns into a musical trill. Males often sing from a
            high perch while leaning forward, drooping their wings, spreading
            their tail feathers, and fluffing their bright shoulder patches to
            show them off. Females give a very different song in response to a
            singing male, a series of three to five short chit or check notes.
          </p>
          <p>
            The typical call of a Red-winged Blackbird is a distinctive,
            matter-of-fact check that’s fairly easy to recognize. Males and
            females make these calls all year round, in flight and while
            feeding, when confronting rivals and to raise an alarm. They also
            give a more intense alarm call, a fast, scolding chak chak chak.
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
