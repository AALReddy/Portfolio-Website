import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import AgriNest from "../../Assets/Projects/AgriNest.jpg";
import RECL from "../../Assets/Projects/RECL.png";
import SCMS from "../../Assets/Projects/SCMS.png";
import Calc from "../../Assets/Projects/Calc.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={RECL}
              title="Recommendation Engine for Curating Learning Content"
              description="RECL is an advanced recommendation engine that personalizes learning content based on your unique goals, preferred learning style, and current progress.
              By analyzing patterns across thousands of learning resources, RECL creates tailored learning paths that adapt as you learn, keeping you engaged and accelerating your progress.
              RECL identifies the most effective resources and sequences them optimally for your learning journey."              
              demoLink="https://recl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCMS}
              title="Smart Classroom Management Software"
              description="The Smart Classroom Management Software (SCMS) is an innovative Educational Technology platform designed to streamline classroom operations, 
              enhance learning experiences,and improve administrative efficiency. It integrates multiple technologies to provide a seamless, data-driven educational 
              environment for students and teachers."
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calc}
              title="Web Calculator"
              description="Developed a web-based calculator application using html, css and js. The application features a user-friendly interface and supports
              basic arithmetic operations, as well as more advanced functions like square roots and exponentiation. you can also check the history of your 
              calculations. It is a fully functional calculator that can be used for everyday calculations.
              The application is responsive and works well with the key press events."
              demoLink="https://sage-tiramisu-c79f5b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AgriNest}
              title="AgriNest (!Working!)"
              description="The “AgriNest” project aims to empower rural farmers by bridging the gap between farmers
              and digital markets. Farmers face challenges like low profits, dependence on middlemen, and lack of awareness about modern techniques and
              government schemes. Through this, developing an easy-to-use digital platform that connects farmers with markets, provides information on modern farming techniques."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of
              emotions of human. And the highest accuracy obtained with the model was 60.1%.Then used Open-CV to detect the face in an image and then pass the face to the 
              classifer to predict the emotion of a person."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
