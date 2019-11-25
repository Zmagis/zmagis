import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import zmagis from "./zmagis.JPG";

function Nav() {
  return (
    <nav className="nav">
      <Link to="./">
        <img className="zmagis" src={zmagis} alt="logo Zmagis" />
      </Link>
      <ul className="nav-links">
        <Link to="./projects">
          <li>Projects</li>
        </Link>
        <Link to="./aboutzmagis">
          <li>About</li>
        </Link>
        <Link to="./contact">
          <li style={{ textDecoration: "none" }}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
