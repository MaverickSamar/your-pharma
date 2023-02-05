import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
const NavBar = () => {
  return (
    <Navbar bg="ligth" expand="lg">
      <Container>
        <LinkContainer to="/">
            <Navbar.Brand> Your Pharma
              
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            {/* verify user login */}
            {/* <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cart
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar