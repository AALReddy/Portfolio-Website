import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhinav Lakshman Reddy Alla </span>
            from <span className="purple"> Munnangi, India.</span>
            <br />
            I am currently pursuing bachelors in the stream of Artificial Intelligence and Machine Learning from VVITU.
            I am in the final year of my degree ,having cgpa of 8.8 . 
            <br />
            I am a member of <span className="purple">(SAC) Student Activity Council</span> and part of several prestigious student bodies such as <span className="purple">(ACM) Association for Computing Machinary & (UIF) University Innovation Fellows</span> at my college. 
            <br/>
            UIF is an inatiative by Stanford University to create a better ecosystem for students in the college.
            This program has helped me to develop my leadership skills and also to work on my communication skills. 
            <br />
            <br />
            Apart from Studies, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhinav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
