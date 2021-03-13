import React, { Fragment } from "react";
import Project from "./Project";
import data from "./data.js";

const Projects = ({ filter }) => {
  let projects = data;

  projects = projects.filter((project) => {
    const matchedTechnologies = filter.map((skill) =>
      project.technologies.includes(skill)
    );
    if (matchedTechnologies.every((tech) => tech === true)) {
      return project;
    }
  });

  return (
    <Fragment>
      <h1>Projects found: {projects.length}</h1>
      <div className="Projects">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
