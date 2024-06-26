import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiBitbucket 
} from "react-icons/di";
import {
  SiFirebase,
} from "react-icons/si";

function Techstack() {
  const iconJson= [
    { "icon": "DiHtml5", "component": "DiHtml5" },
    { "icon": "DiCss3", "component": "DiCss3" },
    { "icon": "DiBootstrap", "component": "DiBootstrap" },
    { "icon": "DiJavascript1", "component": "DiJavascript1" },
    { "icon": "DiReact", "component": "DiReact" },
    { "icon": "DiGit", "component": "DiGit" },
    { "icon": "DiBitbucket", "component": "DiBitbucket" },
    { "icon": "SiFirebase", "component": "SiFirebase" }
  ]
  const iconComponents = {
    DiJavascript1,
    DiReact,
    DiGit,
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiBitbucket,
    SiFirebase
  };
  
  return (
    // <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <DiJavascript1 />
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <DiReact />
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <DiGit />
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //   <DiBitbucket/>
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <SiFirebase />
    //   </Col>
    
     
      
     
    // </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {iconJson.map((tech, index) => {
        const IconComponent = iconComponents[tech.component];
        return (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <IconComponent />
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;
