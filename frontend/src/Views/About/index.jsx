import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
// import image from "./image/suit.png";
import './styles.css';

const About = () => {
  return (
    <Container>
      <h1 id="About"> About </h1>
      {/* <Row style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", width: "100%", height: "40rem"}}> */}
        <Col className="col-9"></Col>
        <Col className="col-3">
          <Row className="mb-5"></Row>
          <Row className="mb-5"></Row>
          <Row className="mb-5"></Row>
          <Row>
            <h1 className="About-Link"> Pedro Braga   </h1>
            <h3 className="About-Link"> Web Developer </h3>
            <p>
              I am open to change, discovering the new, do things I’ve
              never done. I have a lot of proactivity and fuel to
              create, develop, build networking, search more ways
              to increase my every day, manage my habits,
              thinking in results of my compound effect.
              I'm a visionary, ambitious person with a compound effect vision, working on my ideas and my good habits every day, improving myself every moment.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
	);
}

export default About;
