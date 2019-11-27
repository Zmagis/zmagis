import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import zmagis from "./zmagisRounded.png";

function Nav() {
  return (
    <nav className="nav">
      <Link to="./">
        <img className="zmagis" src={zmagis} alt="logo Zmagis" />
      </Link>
      <ul className="nav-links">
        <Link to="./projects">
          <li className="nav-link">Projects</li>
        </Link>
        <Link to="./aboutzmagis">
          <li className="nav-link">About</li>
        </Link>
        <Link to="./contact">
          <li className="nav-link">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
