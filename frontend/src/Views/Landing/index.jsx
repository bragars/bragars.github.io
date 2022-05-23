import React from 'react'
import { Nav, Container, Row } from 'react-bootstrap';
import Work from '../Work';
// import About from '../About';
import './styles.css';

const Landing = () => {
	return (
		<Container>
      <Row id="Home">
        <div className="Landing">
          <h1 className="Landing-Title"> HI, I’m Pedro a Web Developer </h1>
          <Nav className="Landing-Links">
            <Nav.Link id="Landing-Link" href="#Work"> Work </Nav.Link>
            <Nav.Link id="Landing-Link" href="#About"> About </Nav.Link>
          </Nav>
        </div>
        <Work />
        {/* <About /> */}
      </Row>
		</Container>
	);
}

export default Landing;
