import React from "react";
import "./Home.css";
import me from "./mee.JPG";

function Home() {
  return (
    <div className="screen">
      <div className="container">
        <h1 id="font" style={{ fontSize: "2.2em" }}>
          Front-end developer
        </h1>
        <img className="me" src={me} alt="" />
        <p id="font" className="hi">
          Mostly I have focused on React JavaScript but I'm eager to get out of
          my comfort zone and learn more! Check out my projects!
        </p>
      </div>
    </div>
  );
}

export default Home;
