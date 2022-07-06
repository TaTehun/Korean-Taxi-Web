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
          <Nav.Link href="/Contact">
          <img className='contact-icon' src={ContactIcon} />
            469.123.1234
            </Nav.Link>
            <Nav.Link href="/Contact">
            예약 및 문의
            </Nav.Link>
        </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarElement;