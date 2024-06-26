import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      imgPath: chatify,
      title: "API Portal",
      description: "Developed a centralized portal for API management, ensuring efficient access and control over API resources for multiple projects running in the company.",
      isBlog: false,
      ghLink: "",
      demoLink: "",
    },
    {
      imgPath: bitsOfCode,
      title: "KYC (Know Your Customer)",
      description: "Built a web application for KYC processes, facilitating secure and streamlined customer verification.",
      isBlog: false,
      ghLink: "",
      demoLink: "",
    },
    {
      imgPath: editor,
      title: "Calendar",
      description: "Created a calendar application to manage and track tickets, optimizing organizational workflow. Customized features to meet specific organizational needs, improving overall project management effectiveness.",
      isBlog: false,
      ghLink: "",
      demoLink: "",
    },
    {
      imgPath: leaf,
      title: "Vendor Portal",
      description: "Developed a report-based application linked with ERP systems, providing clients with comprehensive reports and insights.",
      isBlog: false,
      ghLink: "",
      demoLink: "",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
