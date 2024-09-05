import React from "react";
import Boton from "./boton"
import { Container, Row, Col , Card } from "react-bootstrap";

function Skill() {
  return (
    <Container id="about" className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          Habilidades
          <Row>
            <Col>
            <Card className="bg-black text-white">Card.Img, Card.ImgOverlay, Card.Header, Card.Body, ListGroup, etc</Card>
            <Boton href={"https://www.google.cl"}/>
            </Col>

            <Col>
            <Card>Card.Img, Card.ImgOverlay, Card.Header, Card.Body, ListGroup, etc</Card>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
