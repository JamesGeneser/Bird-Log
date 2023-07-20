import React from "react";

import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import AmericanCrow from "../bird-cards/American-Crow";
import BrewersBlackbird from "../bird-cards/Brewers-Blackbird";
import BlueGrosbeak from "../bird-cards/Blue-Grosbeak";
import { useState } from "react";
import BrownHeadedCowbird from "../bird-cards/Brown-Headed-Cowbird";
import BullocksOriole from "../bird-cards/Bullocks-Oriole";
// import Carousel from "react-bootstrap/Carousel";

export default function List() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container className="p-0 d-flex flex-column justify-content-center">
        <AmericanCrow /> <BrewersBlackbird />
        <BlueGrosbeak />
        <BrownHeadedCowbird />
        <BullocksOriole />
        {/* <Row className="section-title-row">
          <h2 className="section-title m-1 text-end">Black Birds</h2>
        </Row> */}
        {/* <Row className="m-1 ">
          <Col className="m-1 p-0">
            <h2 className="bird-name m-0 p-3">American Crow</h2>{" "}
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
            >
              <Carousel.Item interval={null}>
                <img
                  className="d-block w-100 carousel-image"
                  src={require("./images/americanCrow.jpeg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                <img
                  className="d-block w-100 carousel-image "
                  data-bs-interval="false"
                  src={require("./images/americanCrowMap.jpeg")}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <img
                    className="map-key m-3"
                    src={require("./images/birdMapKey.png")}
                  />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="crow-background">
                  <p className="bird-description p-2">
                    {" "}
                    American Crows are familiar over much of the continent:
                    large, intelligent, all-black birds with hoarse, cawing
                    voices. They are common sights in treetops, fields, and
                    roadsides, and in habitats ranging from open woods and empty
                    beaches to town centers. They usually feed on the ground and
                    eat almost anything—typically earthworms, insects and other
                    small animals, seeds, and fruit; also garbage, carrion, and
                    chicks they rob from nests. Their flight style is unique, a
                    patient, methodical flapping that is rarely broken up with
                    glides.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="m-1 ">
          <Col className="m-1 p-0">
            <h2 className="bird-name m-0 p-3">Brewer's Blackbird</h2>{" "}
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
            >
              <Carousel.Item interval={null}>
                <img
                  className="d-block w-100 carousel-image"
                  src={require("./images/brewersBlackBirdMale.jpeg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                <img
                  className="d-block w-100 carousel-image "
                  data-bs-interval="false"
                  src={require("./images/brewersBlackbirdMap.jpeg")}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <img
                    className="map-key m-3"
                    src={require("./images/birdMapKey.png")}
                  />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="crow-background">
                  <p className="bird-description p-2">
                    {" "}
                    American Crows are familiar over much of the continent:
                    large, intelligent, all-black birds with hoarse, cawing
                    voices. They are common sights in treetops, fields, and
                    roadsides, and in habitats ranging from open woods and empty
                    beaches to town centers. They usually feed on the ground and
                    eat almost anything—typically earthworms, insects and other
                    small animals, seeds, and fruit; also garbage, carrion, and
                    chicks they rob from nests. Their flight style is unique, a
                    patient, methodical flapping that is rarely broken up with
                    glides.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="">
          {" "}
          <h2 className="bird-name m-0">Brewer's Blackbird</h2>
          <img
            src={require("./images/brewersBlackBirdMale.jpeg")}
            className="bird-image p-0"
          />
          <p className="bird-description m-0">bird detailes lorem ipsum</p>
        </Row>
        <Row className="">
          {" "}
          <h2 className="bird-name m-0">Brown-Headed Cow Bird</h2>
          <img
            src={require("./images/brownHeadedCowbirdM.jpeg")}
            className="bird-image p-0"
          />
          <p className="bird-description m-0">bird detailes lorem ipsum</p>
        </Row>
        <Row className="">
          {" "}
          <h2 className="bird-name m-0">European Starling</h2>
          <img
            src={require("./images/europeanStarling.jpeg")}
            className="bird-image p-0"
          />
          <p className="bird-description m-0">bird detailes lorem ipsum</p>
        </Row>
        <Row className="">
          {" "}
          <h2 className="bird-name m-0">Bullock's Oriole</h2>
          <img
            src={require("./images/bullocksOriole.jpeg")}
            className="bird-image p-0"
          />
          <p className="bird-description m-0">bird detailes lorem ipsum</p>
        </Row>
        <Row className="">
          {" "}
          <h2 className="bird-name m-0">Common Grackle</h2>
          <img
            src={require("./images/commonGrackleM.jpeg")}
            className="bird-image p-0"
          />
          <p className="bird-description m-0">bird detailes lorem ipsum</p>
        </Row> */}
      </Container>
    </>
  );
}
