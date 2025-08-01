import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGlobe } from "react-icons/fa";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.demoLink} target="_blank">
          <FaGlobe /> &nbsp;         
        </Button>
        {"\n"}
        {"\n"}

        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
