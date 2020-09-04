import React, { useState } from "react";
import "./scss/main.css";

import About from "./components/About/About";
import Filter from "./components/Filter/Filter";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

const App = () => {
  const [state, setState] = useState({
    filter: ["html", "css", "javascript"],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Redux",
      "Canvas",
    ],
  });

  function applyFilter(e) {
    let { filter } = state;
    let skill = e.target.name;
    if (e.target.checked === true) {
      filter.push(skill);
    } else {
      filter.splice(filter.indexOf(skill), 1);
    }
    setState({ ...state, filter });
  }

  return (
    <div className="App">
      <div className="Twinkling" />
      <About />
      <Filter
        skills={state.skills}
        filter={state.filter}
        onClick={(e) => applyFilter(e)}
      />
      <Projects filter={state.filter} />
      <ContactMe />
    </div>
  );
};

export default App;
