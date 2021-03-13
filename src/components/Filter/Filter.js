import React, { Fragment } from "react";

const Filter = ({ skills, filter, applyFilter }) => (
  <Fragment>
    <h1>Filter:</h1>
    <div className="Filter">
      {skills.map((skill) => (
        <label key={skill}>
          <span>
            <img src={`images/skills/${skill}.png`} alt={skill} title={skill} />
            <p>{skill}</p>
          </span>
          <input
            type="checkbox"
            checked={filter.indexOf(skill) >= 0}
            onChange={() => applyFilter(skill)}
          />
        </label>
      ))}
    </div>
  </Fragment>
);

export default Filter;
