import React from "react";

import html from "../../Images/logos/html.png";
import css from "../../Images/logos/css.png";
import js from "../../Images/logos/js.png";
import react from "../../Images/logos/react.png";
import redux from "../../Images/logos/redux.png";
import bootstrap from "../../Images/logos/bootstrap.png";
import gimp from "../../Images/logos/gimp.png";
import sass from "../../Images/logos/sass.png";

// import blender from "../../Images/logos/blender.png";

import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="screen  ">
      <div className="title">
        <h1>Skills</h1>
      </div>

      <div className="logos">
        <div className="logo-name">
          <img className="logo" src={html} alt="" />
          <p>HTML</p>
        </div>
        <div className="logo-name">
          <img className="logo" src={css} alt="" />
          <p>CSS</p>
        </div>
        <div className="logo-name">
          <img className="logo" src={js} alt="" />
          <p>JS</p>
        </div>
        <div className="logo-name">
          <img className="logo" src={react} alt="" />
          <p>REACT</p>
        </div>
        <div className="logo-name">
          <img className="logo" src={redux} alt="" />
          <p>REDUX</p>
        </div>
        <div className="logo-name">
          <img className="logo" src={gimp} alt="" />
          <p>GIMP</p>
        </div>
        <div className="logo-name">
          <img className="logo" src={bootstrap} alt="" />
          <p>BOOTSTRAP</p>
        </div>
        <div className="logo-name">
          <img className="logo" src={sass} alt="" />
          <p>SASS</p>
        </div>
      </div>

      <div>
        <div className="title">
          <h1>Mindset</h1>
        </div>
        <p className="text">
          The most valuable gift is to let myself to do what I love. With no
          doubt I can reach everything I want if I carry positivity boost along.
        </p>
      </div>

      <div>
        <div className="title">
          <h1>Contact</h1>
        </div>
        <p className="text contact-text">Email: eglegustaite@gmail.com</p>
      </div>
    </div>
  );
}

export default AboutMe;
