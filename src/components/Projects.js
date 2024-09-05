import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

function Projects() {
  return (
    <Container id="projects" className="py-5 my-5">
      <h2 className="text-center bro-subtitulo">Mis proyectos</h2>
      <Row className="mt-4">
        <Col md={12} className="mb-4 my-3">
          <Card className="my-5">
            <Card.Body>
              <Card.Title className="bro-subtitulo">
                Ilustración Digital
              </Card.Title>
              <Card.Text>Description of project 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card className="my-5">
            <Card.Body>
              <Card.Title className="bro-subtitulo">Fichas Técnicas</Card.Title>
              <Card.Text>Description of project 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card className="my-5">
            <Card.Body>
              <Card.Title className="bro-subtitulo my-5">Moodboard</Card.Title>

              <Row className="mb-4">
                <Col
                  md={8}
                  className="d-flex align-items-center bro-subtitulo position-relative vw-100"
                >
                  <Image
                    src="/images/mood-1.png"
                    fluid
                    className="shadow rounded-4"
                  />
                  <h5
                    className="position-absolute text-white"
                    style={{
                      top: "80%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "5vw"
                    }}
                  >
                    LA MUERTE COMO AGENTE DE CAMBIO
                  </h5>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col className="col-6">
                  <Image
                    src="/images/mood-2.png"
                    fluid
                    className="shadow rounded-4"
                  />
                </Col>
                <Col className="d-flex align-items-center bro-subtitulo-2">
                  <h5>
                    La inspiración viene de ver a la muerte no como un fin
                    concreto como lo es dejar de latir y fallecer, sino más bien
                    al acto de cambiar, transformar, renacer en cualquier ámbito
                    de nuestra vida, simbolizando a la vida a través de las
                    flores, la naturaleza.
                  </h5>
                </Col>
              </Row>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
