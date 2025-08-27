import { Container, Row, Col } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import './styles.css';

const ExperienceTimeLine = () => {
  const items = [
    {
      title: "Mar 2020 – Jul 2020",
      cardTitle: "FULL STACK DEVELOPER | CJR (Junior Computing Enterprise) | Part Time",
      url: "https://www.cjr.org.br/",
      cardSubtitle: "Ruby on Rails, ReactJS, PostgreSQL, Postman, and DBeaver.",
      cardDetailedText: "I contributed to the development of solutions for the SUAS information systems, implementing features in the front-end of Prontuário SUAS using React and in the back-end of Intersuas using Laravel, actively participating in the agile development cycle by collaborating in dailies, sprint reviews, and business rules analysis meetings to ensure alignment between the technical team and the needs of the Ministry of Social Development (MDS).",
    },
    {
      title: "Apr 2021 – Nov 2021",
      cardTitle: "FULL STACK DEVELOPER | Spezi Technology | Full-time",
      url: "http://www.spezi.com.br/",
      cardSubtitle: "Ruby on Rails, VueJs, Docker, OracleDB, Docker, Docker Swarm, Sidekiq, TDD, Jobs, JIRA and Agile methodologies.",
      cardDetailedText: "I implemented CI/CD pipelines for deploying tags and images, established a sustainable testing approach using RSpec, Factories, and Jest to maintain project integrity, and managed team activities while solving challenges during projects, at one point overseeing two teams. I also created pipelines to deploy code to production and staging servers, and from April 2021 to November, I held the position of Project Manager.",
    },
    {
      title: "Jul 2022 – Dec 2022",
      cardTitle: "ETL DEVELOPER (Exchange) | Via Consulting S.A (Lisboa) | Full-time",
      url: "http://www.spezi.com.br/",
      cardSubtitle: "Java 8, ETL, documentation and Batch scripting.",
      cardDetailedText: "I analyzed the existing database structure to determine migration requirements, designed ETL processes to extract data from the legacy database, implemented pipelines using .bat scripts to automate data migration tasks, and managed the execution of ETL processes at scheduled intervals.",
    },
    {
      title: "Feb 2024 – Feb 2025",
      cardTitle: "INTERN DEVELOPER | UE Brasil Tecnologia | Part-time",
      url: "http://www.spezi.com.br/",
      cardSubtitle: "NestJS, Next.js, Docker, Traefik, GitHub and Jenkins.",
      cardDetailedText: "I developed and maintained the complete application for managing electronic ankle monitors, using Next.js for the front-end and NestJS for the back-end, and optimized the CI/CD workflow with Jenkins and Docker, automating the development build and deployment process.",
    },
    {
      title: "Feb 2024 – Aug 2025",
      cardTitle: "RESEARCHER DEVELOPER - UnB | FUNAPE | Part-time",
      url: "http://www.spezi.com.br/",
      cardSubtitle: "React, TypeScript, Laravel, Sonar, Swagger and ESlint.",
      cardDetailedText: "I contributed to the development of solutions for the SUAS information systems, implementing features in the front-end of Prontuário SUAS using React and in the back-end of Intersuas using Laravel. I actively participated in the agile development cycle, collaborating in dailies, sprint reviews, and business rules analysis meetings to ensure alignment between the technical team and the needs of the Ministry of Social Development (MDS).",
    }
  ];

  return (
    <Container>
      <Row>
        <div id="Experience">
          <h1 className="Work-Link"> Experience </h1>
          <a href="https://www.linkedin.com/in/pedrobragar/"> <img className="Icon" src="/images/experienceLogo.png" alt="Logo" /> </a>
        </div>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={1}></Col>
        <Col>
          <div style={{ display: "flex" }}>
            <Chrono
              items={items.reverse()}
              mode="VERTICAL"
              slideShow
            />
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}

export default ExperienceTimeLine;
