import { Container, Row, Col } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import meauDevApp from "./images/adotar_feed.png";
import pokemonsProject from "./images/pokemonsProject.png";
import covidProject from "./images/Covid.png";
import dividaoImage from "./images/dividaoImage.png";
import exameProject from "./images/exameProject.png";
import hackatruckHome from "./images/hackatruck_home.png";
import agroorganico from "./images/agroorganico.png";
import competitiveProgramming from "./images/competitive_programming.jpg";
import cryptography from "./images/cryptography.jpg";
import javaFx from "./images/javaFx.png";
import simulatorHome from "./images/simulator_home.png";
import chatBotImage from "./images/chatBotImage.png";
import veterinarian from "./images/veterinarian.png";

const WorkTimeLine = () => {
  const items = [
    {
      title: "Exame Project - Private",
      cardTitle: "Facial Detection Project",
      url: "#",
      cardSubtitle: "Created for Exame with Inteli.",
      cardDetailedText: "Open Source Project and requested by the company Exame for controll of Covid-19. Skills worked: Python Programming, Image Recognition, User Experience(UX), User Interaction(UI), Project Proposal of Value, Management, Communication, Learning Self-Directed and Self-Knowledge",
      media: {
        type: "IMAGE",
        source: {
          url: `${exameProject}`
        }
      }
    },
    {
      title: "HackaTruck",
      cardTitle: "HackaTruck - App Swift and IOS",
      url: "https://github.com/bragars/RFID-Config",
      cardSubtitle: "Created for HackaTruck management",
      cardDetailedText: "Developed a complete IoT and mobile access control system integrating NodeMCU (ESP8266) + RFID, an iOS app with SwiftUI/Xcode, and a backend with Node-RED (Low-Code) + IBM Cloudant (NoSQL). The solution enabled real-time student entry authorization, RFID tag registration, and asset lifecycle management for Mac computers. Gained hands-on experience across embedded systems, iOS development, cloud databases, and low-code backend orchestration, delivering a fully functional end-to-end project in just a few weeks.",
      media: {
        type: "IMAGE",
        source: {
          url: `${hackatruckHome}`
        }
      }
    },
    {
      title: "HackaTruck",
      cardTitle: "HackaTruck - RFID (Hardware) Arduino IDE",
      url: "https://github.com/bragars/RFID-Config",
      cardSubtitle: "Created for HackaTruck management",
      cardDetailedText: "Developed a complete IoT and mobile access control system integrating NodeMCU (ESP8266) + RFID, an iOS app with SwiftUI/Xcode, and a backend with Node-RED (Low-Code) + IBM Cloudant (NoSQL). The solution enabled real-time student entry authorization, RFID tag registration, and asset lifecycle management for Mac computers. Gained hands-on experience across embedded systems, iOS development, cloud databases, and low-code backend orchestration, delivering a fully functional end-to-end project in just a few weeks.",
      media: {
        type: "IMAGE",
        source: {
          url: `${hackatruckHome}`
        }
      }
    },
    {
      title: "DiviDao - Private",
      cardTitle: "Web3 Real Estate Platform - Solidity & React",
      url: "https://github.com/bragars/DiviDao/",
      cardSubtitle: "Digitizing real estate transactions with blockchain technology",
      cardDetailedText: "DiviDao is a Web3 platform that enables the buying and selling of properties through blockchain-based smart contracts. Built with Solidity and React, the project integrates Web3 and Metamask for secure wallet authentication, NFT-based property representation, and transaction management. The backend leverages Firebase for data storage and Docker for containerized deployment, while the front end interacts with smart contracts to execute property transactions seamlessly. Technologies used include Solidity, Web3, React, Docker, NFT, Firebase, and Scaffold-ETH, providing a complete blockchain-based real estate solution.",
      media: {
        type: "IMAGE",
        source: {
          url: `${dividaoImage}`
        }
      }
    },
    {
      title: "Pet Adoption Project",
      cardTitle: "Mobile Application - React Native & Expo",
      url: "https://github.com/bragars/meau_dev_app",
      cardSubtitle: "React Native mobile app with Firebase NoSQL backend and Redux state management",
      cardDetailedText: "Meau Dev is a mobile app developed with React Native and Expo, designed to facilitate pet adoption. The app integrates with Firebase NoSQL for scalable data storage, uses Redux for efficient state management, and provides an intuitive interface for browsing and adopting animals. This project highlights mobile development skills, database integration, and a practical solution for promoting animal adoption.",
      media: {
        type: "IMAGE",
        source: {
          url: `${meauDevApp}`
        }
      }
    }
    ,
    {
      title: "Simple Chatbot",
      cardTitle: "Python ChatBot",
      url: "https://github.com/bragars/Simple-Chatbot",
      cardSubtitle: "Flask Backend, Vue + Quasar Frontend, AI/ML with TensorFlow & NLP.",
      cardDetailedText: "Developed a complete chatbot system combining a Flask backend with Vue.js and Quasar frontend. The backend integrates with MongoDB via PyMongo, applying JWT and Bcrypt for secure authentication. Natural Language Processing was powered by NLTK and TensorFlow/Keras, with model training performed in Jupyter Notebook using Numpy and Matplotlib for analysis and visualization (200 epochs). A custom scrapper in JavaScript/TypeScript fetched external data from APIs to enrich responses. This project demonstrates expertise across web development, AI/ML model training, NLP, and data integration — tailored for an engaging Pokemon experience.",
      media: {
        type: "IMAGE",
        source: {
          url: `${chatBotImage}`
        }
      }
    },
    {
      title: "JavaFX Project",
      cardTitle: "Sales Management System",
      url: "https://github.com/bragars/Sales-Management",
      cardSubtitle: "Desktop application for commercial operations and stock management",
      cardDetailedText: "This desktop application, built with JavaFX and managed with Gradle, enables full oversight of a company's commercial operations. It supports both managerial and operational roles, allowing users to track purchase and sale transactions, manage products, employees, customers, and stock levels. The system also generates detailed reports on product and supplier performance, employee productivity, client purchase history, and inventory risks. It provides a complete solution for sales, inventory management, and business insights in a single platform.",
      media: {
        type: "IMAGE",
        source: {
          url: `${javaFx}`
        }
      }
    },
    {
      title: "Competitive Programming",
      cardTitle: "Algorithm Practice and Problem Solving",
      url: "https://github.com/bragars/Competitive-Programming",
      cardSubtitle: "Solving challenges on LeetCode, Codeforces, and other platforms.",
      cardDetailedText: "This repository demonstrates my dedication to algorithmic thinking and problem-solving through competitive programming. I practice coding challenges on platforms like LeetCode and Codeforces, focusing on data structures, algorithms, complexity optimization, and efficient coding techniques. It showcases my continuous learning, logical reasoning, and ability to implement solutions under constraints.",
      media: {
        type: "IMAGE",
        source: {
          url: `${competitiveProgramming}`
        }
      }
    },
    {
      title: "Cryptography Project",
      cardTitle: "RSA & AES-CTR - Python",
      url: "https://github.com/bragars/Competitive-Programming",
      cardSubtitle: "Implementation of RSA and AES-CTR encryption algorithms.",
      cardDetailedText: "This project demonstrates the use of RSA for secure message encryption, including key generation using large prime numbers, public/private key calculation, encryption (c = m^e mod n), and decryption (m = c^d mod n). Additionally, AES-CTR (Rijndael), standardized by NIST in 2001, was implemented for symmetric encryption of electronic data. The project highlights practical applications of public-key and symmetric-key cryptography using Python.",
      media: {
        type: "IMAGE",
        source: {
          url: `${cryptography}`
        }
      }
    },
    {
      title: "Agroorganico",
      cardTitle: "Mobile Shopping List App - Flutter & Rails",
      url: "https://github.com/bragars/Agroorganico",
      cardSubtitle: "Flutter mobile app with Rails backend, Google Maps integration, and authentication",
      cardDetailedText: "Agroorganico is a mobile application developed in Flutter with a Rails backend, designed to support the Agroôrganico project. The app allows users to create and manage shopping lists, locate nearby farmers' markets using Google Maps integration, and access nutritional and general information about food and products. It includes user authentication for secure access and seamless interaction with the backend. This project demonstrates mobile development with Flutter, backend integration with Rails, and geolocation-based features.",
      media: {
        type: "IMAGE",
        source: {
          url: `${agroorganico}`
        }
      }
    },
    {
      title: "Simulators",
      cardTitle: "Physics Simulations with C and SFML",
      url: "https://github.com/bragars/Competitive-Programming",
      cardSubtitle: "2D Physics and Collision Simulations",
      cardDetailedText: "This project explores 2D physics simulations using C and SFML, including ball bouncing, projectile motion, elastic collisions, and gravity-driven motion. The simulations demonstrate fundamental concepts of mechanics, collision detection, and interactive animation, providing a hands-on approach to physics modeling and computational graphics.",
      media: {
        type: "IMAGE",
        source: {
          url: `${simulatorHome}`
        }
      }
    },
    {
      title: "Covid-Project",
      cardTitle: "Pandemic Analytics Dashboard - Vue & Ruby on Rails",
      url: "https://github.com/bragars/Pandemic-Analytics-Dashboard",
      cardSubtitle: "Interactive dashboard for tracking Covid-19 statistics in Brazil",
      cardDetailedText: "This project is a web application built with Vue.js for the frontend and Ruby on Rails for the backend. It consumes an external API (https://covid19-brazil-api.now.sh/api/report/v1/) to display real-time Covid-19 statistics, including cases, deaths, and suspected cases per state. Users can filter data by date and state, and the dashboard visualizes the information using ChartJS for dynamic and interactive graphics. This project highlights frontend data visualization, backend API integration, and user-driven filtering functionality.",
      media: {
        type: "IMAGE",
        source: {
          url: `${covidProject}`
        }
      }
    },
    {
      title: "Pokemons",
      cardTitle: "Frontend Project - React",
      url: "https://github.com/bragars/Pokemons",
      cardSubtitle: "Interactive web app built with React for exploring and favoriting Pokemons.",
      cardDetailedText: "The frontend allows users to browse a complete list of Pokemons, view detailed information about each one (including skills and attributes), and mark their favorites. It consumes data from an external backend API to keep everything dynamic and updated. Designed for anyone who loves Pokemons.",
      media: {
        type: "IMAGE",
        source: {
          url: `${pokemonsProject}`
        }
      }
    },
    {
      title: "Pokemons",
      cardTitle: "Backend Project - Rails (External API)",
      url: "https://github.com/bragars/Pokedex-backend",
      cardSubtitle: "Rails-powered REST API to provide structured Pokemon data for the frontend.",
      cardDetailedText: "The backend was developed in Ruby on Rails and exposes an external API consumed by the React frontend. It handles data about each Pokemon, including attributes, skills, and the ability to favorite them. This separation of concerns ensures a clean architecture, where the backend serves as a robust API and the React app provides the user interface.",
      media: {
        type: "IMAGE",
        source: {
          url: `${pokemonsProject}`
        }
      }
    },
    {
      title: "Veterinarian Project",
      cardTitle: "Flask Web Application",
      url: "https://github.com/bragars/Veterinarian-Project",
      cardSubtitle: "First web development project built with Flask.",
      cardDetailedText: "Project developed for the Veterinary Medicine course at the University of Brasília (UnB) to facilitate data management and access. The system includes registration of multiple entities: Person (Researcher, Professor, Student), Room, Project, Animal linked to a Box, Box linked to both a Shelf and a Project, Manager linked to both a Person and a Project, Shelf linked to a Room, and Responsible Person linked to both a Person and a Room. Each box contains animals; every project requires boxes to store them and must have a designated manager; each shelf belongs to a room; and every room requires a responsible person. This was my very first web development project using Flask.",
      media: {
        type: "IMAGE",
        source: {
          url: `${veterinarian}`
        }
      }
    }
  ];

  return (
    <Container>
      <Row>
        <div id="Work">
          <h1 className="Work-Link"> Projects </h1>
          <a href="https://github.com/bragars"> <img className="Work-Icon" src="/images/gitHubLogoBlack.png" alt="Logo" /> </a>
        </div>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col>
          <div >
            <Chrono
              items={items}
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
