import React from "react";
import educations from "./educationData";
import Lottie from "lottie-react";
import animationData from "../../Assets/lottie/study.json";
import { BsPersonWorkspace } from "react-icons/bs";
import "./Education.css";

function Education() {
  return (
    <div id="education" className="education-section">
      <div className="education-heading">Education</div>
      <div className="education-container">
        <div className="education-animation">
          <Lottie animationData={animationData} loop autoplay />
        </div>
        <div className="education-cards">
          {educations.map((edu) => (
            <div className="education-card" key={edu.id}>
              <p className="edu-duration">{edu.duration}</p>
              <div className="edu-info">
                <div className="edu-icon">
                  <BsPersonWorkspace size={30} />
                </div>
                <div>
                  <p className="edu-title">{edu.title}</p>
                  <p className="edu-inst">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
