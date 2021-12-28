import { Container, Row } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import veterinarianProject from "./images/veterinarianProject.png";
import pokemonsProject from "./images/pokemonsProject.png";
import dividaoImage from "./images/dividaoImage.png";
import './styles.css';

const WorkTimeLine = () => {
    const items = [
      { 
        title: "Full Stack Project/Python", 
        cardTitle:  "Veterinarian Project",
        url: "https://github.com/bragars/Python-Project",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..", 
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
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
        media: {
          type: "IMAGE",
          source: {
            url: `${pokemonsProject}`
          }
        }
      },
      { 
        title: "Full Stack Project/React/ROR", cardTitle:  "Pokemons",
        url: "https://github.com/bragars/Pokemons",
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
      },
      {
        title: "FrontEnd", cardTitle:  "DiviDao",
        url: "https://divi-dao.web.app/",
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
    </Container>
	);
}

export default WorkTimeLine;
