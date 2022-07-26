import React from "react";
import { Row, Container, Nav, Col } from 'react-bootstrap';
import Logo from './Images/SvgDefaultMonochrome';
import './styles.css'
  
const Footer = () => {
  return (
    <div className="Box">
      <Container className="Footer-Container">
        <Row id="Contact" className="mb-3">
          <div className="Footer-Brand">
            <a href="#Contact">
              <Logo width={350} />
            </a>
          </div>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Row xs={4} className="mb-3">
              <Nav className="Footer-Links">
                <Nav.Link id="Footer-Link" href="#Home">       Home       </Nav.Link>
                <Nav.Link id="Footer-Link" href="#Contact">    Contact    </Nav.Link>
                <Nav.Link id="Footer-Link" href="#Experience"> Experience </Nav.Link>
                <Nav.Link id="Footer-Link" href="#Work">       Portfolio  </Nav.Link>
              </Nav>
            </Row>  
          </Col>
        </Row>
        <Row>
          <div className="Icons">
            <a href="https://www.linkedin.com/in/pedrobragar/"> 
              <img className="Icon" src="/images/linkedinLogo.png" alt="Logo"/> 
            </a>
            <a href="https://github.com/bragars"> 
              <img className="Icon" src="/images/githubLogo.png"   alt="Logo"/> 
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
