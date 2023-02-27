import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Trip.png";
import editor from "../../Assets/Projects/Arkad.png";
import chatify from "../../Assets/Projects/Vuexy.png";
import bitsOfCode from "../../Assets/Projects/Mymedi.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="Projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Vuexy"
              description="Vuexy is my ready to go template where i included and alreadu build many components which i useally use while making new projects, also because i made those components there for i have known the best usecase of it, this website is bit fuctional on auth side where i make use of localstorage with react hooks to make it bit UI tempting."
              ghLink="https://github.com/beyond-th0ught/veuxy"
              demoLink="https://spiffy-nasturtium-f4b686.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MyMedi"
              description="It's my personal Project, it has really beautiful static UI with some of my best design skills invoved. I made this sites as a templated for my other projects also to show my skills in frontend to my resume. by far this website is best look of my frontend understanding, which include React, tailwindcss and nodejs."
              ghLink="https://github.com/beyond-th0ught/mymedi"
              demoLink="https://peaceful-buttercream-9e06ab.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Arkade"
              description="It's my personal Project, it has really beautiful static UI with some of my best design skills invoved. I made this sites as a templated for my other projects also to show my skills in frontend to my resume. by far this website is best look of my frontend understanding, which include React, tailwindcss and nodejs."
              ghLink="https://github.com/beyond-th0ught/arkede-2"
              demoLink="https://delicate-tapioca-86ec73.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Trip"
              description="It's my personal Project, it has really beautiful static UI with some of my best design skills invoved. I made this sites as a templated for my other projects also to show my skills in frontend to my resume. by far this website is best look of my frontend understanding, which include React, tailwindcss and nodejs."
              ghLink="https://github.com/beyond-th0ught/trip"
              demoLink="https://regal-phoenix-7e96b1.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
