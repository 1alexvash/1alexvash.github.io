import React, { useState } from "react";
import "./scss/main.css";

import About from "./components/About/About";
import Filter from "./components/Filter/Filter";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

const App = () => {
  const [filter, setFilter] = useState(["HTML", "CSS", "JavaScript"]);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Redux",
    "Canvas",
  ];

  function applyFilter(selectedSkill) {
    if (filter.includes(selectedSkill)) {
      setFilter(filter.filter((skill) => skill !== selectedSkill));
    } else {
      setFilter([...filter, selectedSkill]);
    }
  }

  return (
    <div className="App">
      <div className="Twinkling" />
      <About />
      <Filter skills={skills} filter={filter} applyFilter={applyFilter} />
      <Projects filter={filter} />
      <ContactMe />
    </div>
  );
};

export default App;
