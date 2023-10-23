import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Autores</Navbar.Brand>
          <Nav className="me-auto">
            <Link to= '/'>Home</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}