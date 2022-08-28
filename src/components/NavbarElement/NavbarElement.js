import React from 'react';
import './NavbarElement.css'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import ContactIcon from '../../img/icons/contactIcon.svg';

const NavbarElement = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">패밀리택시</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/contact">
          <img className='contact-icon' src={ContactIcon} />
            469.417.9999
            </Nav.Link>
            <Nav.Link href="/contact">
            예약 및 문의
            </Nav.Link>
        </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarElement;