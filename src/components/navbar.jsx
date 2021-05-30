import React from "react";
import "./navbar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function HeaderNav() {
  return (
    <>
      <Navbar
          collapseOnSelect
          expand="md"
          variant="dark"
          className="navBarColor"
      >
        <Navbar.Brand href="/">Covid-19 Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Vaccination" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/vaccination">
                Vaccination Status
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/vaccineCompany">
                Vaccine Manufacture
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/covidInfo">Covid Info</Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default HeaderNav;
