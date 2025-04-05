import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="footer bg-dark text-white py-4">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h5>Follow Me</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebook size={25} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={25} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedin size={25} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaGithub size={25} />
              </a>
            </div>
          </Col>
          {/* Copyright */}
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: kramangupta8552@gmail.com</p>
            <p>Phone: +91 825 233 9216</p>
          </Col>
        </Row>
        <hr className="my-3 border-light" />
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} Aman Gupta | All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
