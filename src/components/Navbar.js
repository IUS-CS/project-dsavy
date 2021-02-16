import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
            <span style={{paddingLeft:25}}></span>
            <Nav.Link href="/about" style={{color:'white'}}>About</Nav.Link>
            <span style={{paddingLeft:25}}></span>
            <Nav.Link href="/list" style={{color:'white'}}>Linked List</Nav.Link>
            <span style={{paddingLeft:25}}></span>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;