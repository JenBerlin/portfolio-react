import React from "react";
// I need to inmport all the react-bootstrap main tags; which means without the Nav.Link (the dot)
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function MenueBar(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand className="nav-text" href="#home">
        Jenny
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="nav-link">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#works">Works</Nav.Link>
          <Nav.Link href="#resumee">Resumee</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenueBar;
