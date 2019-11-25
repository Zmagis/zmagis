import React from "react";
import heart from "../Nav/zmagis.JPG";

import "./Card.css";

function Card({ title, description, link }) {
  return (
    <div className="card">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="front">
            <img className="projectImg" src={heart} alt="" />
          </div>
          <div className="back">
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link} target="blank">
              =>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
