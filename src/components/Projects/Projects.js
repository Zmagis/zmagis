import React from "react";
import Card from "./Card";
import "./Projects.css";
import list from "./List";

function Projects() {
  return (
    <div className="screen">
      <div className="title">
        <h1>Projects</h1>
      </div>

      <div className="projects">
        {list.map(project => (
          <Card
            key={project.id}
            title={project.name}
            image={project.img}
            description={project.description}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
