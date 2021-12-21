import { Container, Row } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import './styles.css';

const WorkTimeLine = () => {
    const items = [
      { 
        title: "Full Stack Project/Python", 
        cardTitle:  "Veterinarian Project",
        url: "https://github.com/bragars/Python-Project",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..", 
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "http://someurl/image.jpg"
        //   }
        // }
      },
      { 
        title: "Full Stack Project/React/ROR", cardTitle:  "PetGato", 
        url: "https://github.com/bragars/PetGato-FrontEnd",
      },
      { 
        title: "Full Stack Project/React/ROR", cardTitle:  "Pokemons",
        url: "https://github.com/bragars/Pokemons",
      },
      { 
        title: "Full Stack Project/Vue/ROR", cardTitle:  "Covid-Project",
        url: "https://github.com/bragars/Projeto-Covid-BackEnd",
      },
      {
        title: "FrontEnd", cardTitle:  "DiviDao",
        url: "https://divi-dao.web.app/",
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
          <div>
            <p>Made for the veterian course</p>
          </div>
          <div>
            <img src="<url to  a nice image" />
          </div>
        </Chrono>
      </div>
    </Container>
	);
}

export default WorkTimeLine;
