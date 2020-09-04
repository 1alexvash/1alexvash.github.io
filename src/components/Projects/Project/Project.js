import React from "react";

const ProjectItem = ({ project: { name, logo, github, live } }) => {
  const githubButton = github ? (
    <a href={github}>
      <button className="git">Github Repository</button>
    </a>
  ) : (
    ""
  );

  const liveButton = live ? (
    <a href={live}>
      <button className="live">Live Version</button>
    </a>
  ) : (
    ""
  );

  return (
    <section>
      <h1 className="name">{name}</h1>
      <img className="logo" src={logo} alt={name} />
      <div className="buttons">
        {githubButton}
        {liveButton}
      </div>
    </section>
  );
};

export default ProjectItem;
