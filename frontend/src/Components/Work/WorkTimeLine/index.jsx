import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import veterinarianProject from "./images/veterinarianProject.png";
import petGatoProject from "./images/cat.png";
import pokemonsProject from "./images/pokemonsProject.png";
import covidProject from "./images/Covid.png";
import dividaoImage from "./images/dividaoImage.png";

const WorkTimeLine = () => {
    const items = [
      { 
        title: "Full Stack Project/Python", 
        cardTitle:  "Veterinarian Project",
        url: "https://github.com/bragars/Python-Project",
        cardSubtitle:"Project made for register all the models suggested by the client", 
        cardDetailedText: "Made exclusively for UnB veterinarian course",
        media: {
          type: "IMAGE",
          source: {
            url: `${veterinarianProject}`
          }
        }
      },
      { 
        title: "Full Stack Project/React/ROR", cardTitle:  "PetGato", 
        url: "https://github.com/bragars/PetGato-FrontEnd",
        cardSubtitle:"Project made for every person who loves pets", 
        cardDetailedText: "Check all pieces of information that your pet need",
        media: {
          type: "IMAGE",
          source: {
            url: `${petGatoProject}`
          }
        }
      },
      { 
        title: "Full Stack Project/React/ROR", cardTitle:  "Pokemons",
        url: "https://github.com/bragars/Pokemons",
        cardSubtitle:"Project to favorite every pokemon that you like, providing pieces of information and each skill.", 
        cardDetailedText: "Everyone who loves Pokemons can enjoy",
        media: {
          type: "IMAGE",
          source: {
            url: `${pokemonsProject}`
          }
        }
      },
      { 
        title: "Full Stack Project/Vue/ROR", cardTitle:  "Covid-Project",
        url: "https://github.com/bragars/Projeto-Covid-BackEnd",
        cardSubtitle:"Project to view statistics about Covid in Brazil", 
        cardDetailedText: "Number of deaths, cases, suspects in each State",
        media: {
          type: "IMAGE",
          source: {
            url: `${covidProject}`
          }
        },
      },
      {
        title: "FrontEnd", cardTitle:  "DiviDao",
        url: "https://divi-dao.web.app/",
        cardSubtitle:"Digitizing real estate to enable efficiencies", 
        cardDetailedText: "Creating a real estate exchange.",
        media: {
          type: "IMAGE",
          source: {
            url: `${dividaoImage}`
          }
        }
      },
    ];

	return (
    <Container>
      <Row>
        <div id="Work">
          <h1 className="Work-Link"> Projects </h1>
          <a href="https://github.com/bragars"> <img className="Work-Icon" src="/images/gitHubLogoBlack.png" alt="Logo"/> </a>
        </div>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col>
          <div >
            <Chrono
              items={ items }
              mode="VERTICAL_ALTERNATING"
            >
              <div className="chrono-icons">
                <img src="/images/logo.png" alt="image1" />
                <img src="/images/logo.png" alt="image2" />
                <img src="/images/logo.png" alt="image2" />
                <img src="/images/logo.png" alt="image2" />
                <img src="/images/logo.png" alt="image2" />
              </div>
            </Chrono>
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
	);
}

export default WorkTimeLine;
