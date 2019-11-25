import React from "react";

import html from "../../Images/logos/html.png";
import css from "../../Images/logos/css.png";
import js from "../../Images/logos/js.png";
import react from "../../Images/logos/react.png";
import redux from "../../Images/logos/redux.png";
import gimp from "../../Images/logos/gimp.png";
// import blender from "../../Images/logos/blender.png";

import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      <div className="skills container">
        <h1>Skills</h1>
        <div className="logos">
          <div>
            <img className="logo" src={html} alt="" />
            <p>HTML</p>
          </div>
          <div>
            <img className="logo" src={css} alt="" />
            <p>css</p>
          </div>
          <div>
            <img className="logo" src={js} alt="" />
            <p>JS</p>
          </div>
          <div>
            <img className="logo" src={react} alt="" />
            <p>REACT</p>
          </div>
          <div>
            <img className="logo" src={redux} alt="" />
            <p>REDUX</p>
          </div>
          <div>
            <img className="logo" src={gimp} alt="" />
            <p>GIMP</p>
          </div>
        </div>

        <div className="values ">
          <h1>Short life story</h1>
          <p>
            I graduted in Vilnius University and got bachelor degree in
            Biochemistry. Unfortunetly, very quickly I found myself miserable
            working in laboratory. Two main things I missed was speed and
            vizuality.
          </p>
          <p>
            It seems like programming is a great place where I could enjoy using
            my brains and creativity.
          </p>
          <h1>Values</h1>
          <ul>
            <li>straightforward</li>
            <li>having fun</li>
            <li>pleasant looking</li>
            <li>functionality</li>
          </ul>
        </div>
      </div>

      <div className="photos container">
        <h1>How I spend my free time</h1>
        <p>Of course most of my time I spend coding</p>
        <p>Climbing</p>
        <p>Dancing</p>
        <p>Drawing</p>
        <p>traveling</p>
        <h1>Photo Carousel</h1>
      </div>
    </div>
  );
}

export default AboutMe;
