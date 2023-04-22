import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const HomeNav = ({ setLoginUser }) => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Container className="headnav">
          <Link className="brand" to="/">
            <img alt="logo" src={require("../images/logo.png")} />
            <span>CodeJam</span>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="box1">
              <Link className="btn3" to="/">
                Home
              </Link>
              <Link className="btn3" to="/Feedback">
                Feedback
              </Link>
              <Link className="btn3" to="/Problem">
                Problem
              </Link>
              <Link className="btn3" onClick={() => setLoginUser({})} to="/">
                {" "}
                Logout{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNav;
