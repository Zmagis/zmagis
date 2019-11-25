import React from "react";
import Card from "./Card";
import "./Projects.css";
import list from "./List";

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div className="projects">
        {list.map(project => (
          <Card
            key={project.id}
            title={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
