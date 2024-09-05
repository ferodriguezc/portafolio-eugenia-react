import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container id="about" className="py-5 my-5">
      <Row className="">
        <Col md={12}>
          <h2 className="bro-subtitulo text-star">diseñadora de moda</h2>
          <h1 className="bro-titulo text-center">portafolio</h1>
          <h2 className="bro-subtitulo text-end">Eugenia garrido diaz</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
