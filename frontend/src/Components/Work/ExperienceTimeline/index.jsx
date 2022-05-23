import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import './styles.css';

const ExperienceTimeLine = () => {
    const items = [
    {
      title: "Mar 2020 – Jul 2020",
      cardTitle: "CJR (Junior Computing Enterprise) | FULL STACK DEVELOPER | Part Time",
      url: "https://www.cjr.org.br/",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "-Creating REST APIs, sending content by JSON, communicating the logical application with interface of projects. - Creation of interface prototypes using Figma, DB prototypes with DBrowser for SQLite. Skills worked: Ruby on Rails, ReactJs, React Native, PostGres, Postman, Dbeaver",
    },
    {
      title: "Aug 2020 – Nov 2020",
      cardTitle: "Spezi Technology | SALES ADVISOR | Part Time",
      url: "http://www.spezi.com.br/",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "- Requirement Analyst and Sales Advisor. - Creation of proposals and contracts. - Meetings with clients making sales funnel. - I sold one project with the value of R$ 30.000, 00. Skills worked: Sales, Ruby on Rails, ReactJs, React Native, PostGres, Postman, Dbeaver",
    },
    {
      title: "Nov 2020– Apr 2021",
      cardTitle: "Spezi Technology | FULL STACK DEVELOPER | Full-time",
      url: "http://www.spezi.com.br/",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "- Using Git Flow, managing part of infrastructure, using pipelines, triggers to deploy tags, build images to Dev(Homologation) and Master(Production). -Sustainable testing approach using Rspec, Factories and Jest giving integrity to the project. - Debugging and Problem solving. - Skills worked: Ruby on Rails, VueJs, Docker, OracleDB, Sidekiq, TDD, Sidekiq, Jobs, JIRA, Agile Methodologies, Deployments, building images, pipelines to production and homologation servers.",
    },
    {
      title: "Apr 21 – Oct 21",
      cardTitle: "Spezi Technology | PROJECT MANAGER | Full-time",
      url: "http://www.spezi.com.br/",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "- Requirement analyst in the meetings with clients, building the Backlog of the Sprint. - Meetings to show what was made in Sprint. - Skills worked: Leadership skills, People Management, Ruby on Rails, VueJs, Docker, OracleDB, managing parts of systems, JIRA, Agile Methodologies, Deployments, building images, pipelines to production and homologation servers, Redis,, New Relic(stack traces).",
    }
  ];

	return (
    <Container>
      <Row>
        <div id="Experience">
          <h1 className="Work-Link"> Experience </h1>
          <a href="https://www.linkedin.com/in/pedrobragar/"> <img className="Icon" src="/images/experienceLogo.png" alt="Logo"/> </a>
        </div>
      </Row>
      <div style={{ display: "flex" }}>
        <Chrono
          items={ items }
          mode="VERTICAL"
          slideShow
        />
      </div>
    </Container>
	);
}

export default ExperienceTimeLine;
