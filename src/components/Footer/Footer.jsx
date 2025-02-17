import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We provide the best services tailored to your
                needs, ensuring quality and reliability.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center" >&copy; 2025 Rajan Services. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
