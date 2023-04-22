import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Regnav() {
  return (
    <div>
      <Navbar className="head" collapseOnSelect bg="" variant="dark">
        <Container className="headnav">
          <Link className="brand" to="/">
            <img alt="logo" src={require("../images/logo.png")} />
            <span>CodeJam</span>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="box1">
              {/* <Link className="btn3" to="/Aboutus">
                About Us
              </Link> */}

              <Link className="getstart" to="/Compiler">
                Get Started
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
