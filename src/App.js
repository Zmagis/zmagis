import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />

        <Route path="/projects" component={Projects} />
        <Route path="/aboutzmagis" component={AboutMe} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
