import React, { Fragment } from "react";
import Project from "./Project/Project";
import data from "./data.js";

const Projects = ({ filter }) => {
  let projects;

  filter.forEach(skill => {
    projects = data.filter(project => project.technologies.indexOf(skill) >= 0);
  });

  return (
    <Fragment>
      <h1>Projects found: {projects.length}</h1>
      <div className="Projects">
        {projects.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
