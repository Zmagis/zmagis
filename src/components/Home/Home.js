import React from "react";
import "./Home.css";
import me from "./mee.JPG";

function Home() {
  return (
    <div className="welcome-screen">
      <div id="welcome-font" className="container">
        <h1>Front-end developer</h1>

        <img className="photo-of-me" src={me} alt="" />
        <p className="introduction-text">
          Mostly I have focused on React JavaScript but I'm eager to get out of
          my comfort zone and learn more! Check out my projects!
        </p>
      </div>
    </div>
  );
}

export default Home;
