import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Navbar bg="light" expand="md" className="mb-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink exact to="/" activeClassName="active" className="nav-link">
                About Me
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/portfolio" activeClassName="active" className="nav-link">
                Portfolio
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contact" activeClassName="active" className="nav-link">
                Contact
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/resume" activeClassName="active" className="nav-link">
                Resume
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
