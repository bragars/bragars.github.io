import React from "react";
import { Row, Container, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'
  
const Footer = () => {
  return (
    <div className="Box">
      <Container className="Footer-Container">
        <Row className="mb-3">
          <div className="Footer-Brand">
            <a href="#Home"><img className="Footer-Logo" src="/images/darkLogo.png" /> </a>
            <a href="#Home"><img className="Footer-Logo-Name" src="/images/darkLogoName.png" /> </a>
          </div>
        </Row>
        <Row className="mb-3">
          <Nav className="Footer-Links">
            <Nav.Link id="Footer-Link" href="#Home"> Home </Nav.Link>
            <Nav.Link id="Footer-Link" href="#About"> About </Nav.Link>
            <Nav.Link id="Footer-Link" href="#Experience"> Experience </Nav.Link>
            <Nav.Link id="Footer-Link" href="#Work"> Portfolio </Nav.Link>
          </Nav>
        </Row>
        <Row>
          <div className="Icons">
            <a href="https://www.linkedin.com/in/pedrobragar/"> <img className="Icon" src="/images/linkedinLogo.png" alt="Logo"/> </a>
            <a href="https://github.com/bragars"> <img className="Icon" src="/images/githubLogo.png"   alt="Logo"/> </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
