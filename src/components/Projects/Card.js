import React from "react";

import githubLogo from "../../Images/logos/github.png";
import see from "../../Images/see.png";

import "./Card.css";

function Card({ title, description, link, github, image }) {
  return (
    <div className="card">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="front">
            <img className="projectImg" src={image} alt="" />
          </div>
          <div className="back">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={github} target="blank">
              <img src={githubLogo} alt="github logo" className="logo link" />
            </a>
            <a href={link} target="blank">
              <img src={see} alt="" className="logo link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
