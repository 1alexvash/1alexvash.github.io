import React from "react";

import moment from "moment";

const About = () => {
  function getAge() {
    var birthday = moment("1998-07-22");
    var today = moment();

    return today.diff(birthday, "years");
  }

  return (
    <div className="About">
      <section className="me">
        <img src="images/me.jpg" alt="alexander" />
      </section>
      <section className="info">
        <p>Hi There!</p>
        <p>
          I am <strong>Alexander Vashchuk</strong>
        </p>
        <p>
          I am <img src="images/age.png" alt="age" title="age" /> {getAge()}{" "}
          years old and I'm self-taught developer
          <p>You can check out my projects and contact me down below</p>
        </p>
      </section>
    </div>
  );
};

export default About;
