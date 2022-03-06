import React, { useEffect } from "react";
// I need to inmport all the react-bootstrap main tags; which means without the Nav.Link (the dot)
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navigation(props) {
  const { sections = [], currentPage, setCurrentPage } = props;
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand className="nav-text" href="#home">
        Jenny's Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="nav-link">
          {sections.map((section) => (
            <Nav.Link key={section.name}>
              <span onClick={() => setCurrentPage(section)}>
                {section.name}
              </span>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
