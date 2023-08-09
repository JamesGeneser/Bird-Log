import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AmericanCrow from "../bird-cards/American-Crow";
import BrewersBlackbird from "../bird-cards/Brewers-Blackbird";
import BlueGrosbeak from "../bird-cards/Blue-Grosbeak";
import { useState } from "react";
import BrownHeadedCowbird from "../bird-cards/Brown-Headed-Cowbird";
import BullocksOriole from "../bird-cards/Bullocks-Oriole";
import CommonGrackle from "../bird-cards/Common-Grackle";
import RedWingedBb from "../bird-cards/Red-Winged-Blackbird";
import EuropeanStarling from "../bird-cards/European-Starling";
import YellowHeadedBlackbird from "../bird-cards/Yellow-Headed-Blackbird";
import NorthernFlicker from "../bird-cards/Northern-Flicker";
import HouseFinch from "../bird-cards/House-Finch";
import MourningDove from "../bird-cards/Mourning-Dove";
import BlackCappedChickadee from "../bird-cards/Black-Capped-Chickadee";
import WhiteBreastedNuthatch from "../bird-cards/White-Breasted-Nuthatch";
import GreyVireo from "../bird-cards/Grey-Vireo";
import BlackBilledMagpie from "../bird-cards/Black-Billed-Magpie";
import HouseSparrow from "../bird-cards/House-Sparrow";
import GoldFinch from "../bird-cards/Gold-Finch";
import RedTailedHawk from "../bird-cards/Red-Tailed-Hawk";
import AmericanKestrel from "../bird-cards/American-Kestrel";
import BaldEagle from "../bird-cards/Bald-Eagle";
import CommonNighthawk from "../bird-cards/Common-Nighthawk";
import CoopersHawk from "../bird-cards/Coopers-Hawk";
import BroadtailedHummingbird from "../bird-cards/Broad-Tailed-Hummingbird";
import FerruginousHawk from "../bird-cards/Ferruginous-Hawk";
import NorthernGoshawk from "../bird-cards/Northern-Goshawk";

export default function List() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container className="p-0 d-flex flex-column justify-content-center">
        <Row>
          <Col xs={12} lg={4} className="p-0">
            <AmericanCrow />{" "}
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <BrewersBlackbird />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <BlueGrosbeak />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className="p-0">
            <BrownHeadedCowbird />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <BullocksOriole />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <CommonGrackle />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className="p-0">
            <RedWingedBb />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <EuropeanStarling />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <YellowHeadedBlackbird />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className="p-0">
            <NorthernFlicker />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <HouseFinch />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <MourningDove />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className="p-0">
            <BlackCappedChickadee />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <WhiteBreastedNuthatch />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <GreyVireo />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className="p-0">
            <BlackBilledMagpie />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <HouseSparrow />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <GoldFinch />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className="p-0">
            <RedTailedHawk />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <AmericanKestrel />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <BaldEagle />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={4} className="p-0">
            <CommonNighthawk />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <CoopersHawk />
          </Col>
          <Col xs={12} lg={4} className="p-0">
            <BroadtailedHummingbird />
          </Col>
        </Row>

        <FerruginousHawk />
        <NorthernGoshawk />
      </Container>
    </>
  );
}
