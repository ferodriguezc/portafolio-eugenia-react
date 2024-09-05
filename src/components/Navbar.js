import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="bro-navtext"> 
      <Container className=''>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="text-white">inicio</Nav.Link>
            <Nav.Link href="#about" className="text-white">Sobre mi</Nav.Link>
            <Nav.Link href="#projects" className="text-white">Proyectos</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavigationBar;
