import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiBitbucket
} from "react-icons/si";

function Toolstack() {
  const iconJson= [
    { "icon": "SiWindows", "component": "SiWindows" },
    { "icon": "SiVisualstudiocode", "component": "SiVisualstudiocode" },
    { "icon": "SiVercel", "component": "SiVercel" },
    { "icon": "SiBitbucket", "component": "SiBitbucket" },
  ]
  const iconComponents = {
    SiWindows,
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiBitbucket
  }
  return (
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

export default Toolstack;
