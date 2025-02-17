import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg"; 
import './Navigation.scss';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" className="logo" />
          <span className="brand-name">Local Services</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/features" className="nav-item">Features</Nav.Link>
            <Nav.Link as={Link} to="/testimonials" className="nav-item">Testimonials</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>

            {/* Login & Signup Buttons */}
            <Button as={Link} to="/login" variant="outline-light" className="me-2 nav-btn">Login</Button>
            <Button as={Link} to="/signup" variant="warning" className="nav-btn">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
