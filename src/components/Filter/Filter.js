import React, { Fragment } from "react";

const Filter = ({ skills, filter, onClick }) => (
  <Fragment>
    <h1>Filter:</h1>
    <div className="Filter">
      {skills.map(skill => (
        <label key={skill}>
          <span>
            <img src={`images/skills/${skill}.png`} alt={skill} title={skill} />
            <p>{skill}</p>
          </span>
          <input
            type="checkbox"
            name={skill.toLowerCase()}
            onClick={onClick}
            defaultChecked={filter.indexOf(skill.toLowerCase()) >= 0}
          />
        </label>
      ))}
    </div>
  </Fragment>
);

export default Filter;
