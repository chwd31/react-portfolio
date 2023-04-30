import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Nav className="ml-auto">
        <Nav.Link href="https://github.com/yourusername">GitHub</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/yourusername/">LinkedIn</Nav.Link>
        <Nav.Link href="https://twitter.com/yourusername">Twitter</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer;
