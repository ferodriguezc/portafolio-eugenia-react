import React from "react";
import { Container, Button } from "react-bootstrap";

function Boton({href}) {  // Cambié el nombre del componente a 'Boton'
  return (
    <Container className="text-center">
      <Button variant="primary" href={href}>Click Me</Button>
    </Container>
  );
}

export default Boton;
