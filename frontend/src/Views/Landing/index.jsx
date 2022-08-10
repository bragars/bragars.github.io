import React from 'react'
import { Nav, Container, Row } from 'react-bootstrap';
import useWindowDimensions from './windowDimensions'
import Work from '../Work';
import ScrollArrow from '../../Components/ScrollArrow';
import './styles.css';

const Landing = () => {
  const { height, width } = useWindowDimensions();

	return (
		<Container>
      <Row id="Home">
        <div className="Landing">
          <div className="scrollIcon">
            {width < 500 && <ScrollArrow />}
          </div>
          <h1 className="Landing-Title"> HI, I’m Pedro a Web Developer </h1>
          <Nav className="Landing-Links">
            <Nav.Link id="Landing-Link" href="#Work">  Work </Nav.Link>
            <Nav.Link id="Landing-Link" href="#Experience"> Experience </Nav.Link>
          </Nav>
        </div>
        <Work />
      </Row>
		</Container>
	);
}

export default Landing;
