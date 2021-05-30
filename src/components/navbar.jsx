import React from "react";
import "./navbar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

function HeaderNav() {
  const location = useLocation();
  let isActive = (value) => {
    if (value === location.pathname) {
      return "active-nav-link";
    }
    return "";
  };
  return (
    <div className="navBarComponent">
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
            <Nav.Link href="/" className={isActive("/")}>
              Home
            </Nav.Link>
            <NavDropdown title="Vaccination" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="/vaccination"
                className={isActive("/vaccination")}
              >
                Vaccination Status
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/vaccineCompany"
                className={isActive("/vaccineCompany")}
              >
                Vaccine Manufacture
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/covidInfo" className={isActive("/covidInfo")}>
              Covid Info
            </Nav.Link>
            <Nav.Link eventKey={2} href="/about" className={isActive("/about")}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderNav;
