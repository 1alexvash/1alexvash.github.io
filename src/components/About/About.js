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
        <a
          href="https://cv.djinni.co/bf/59d5791805912b9810a4f20d2b1de5/Resume_Alexander_Vashchuk.pdf"
          className="download-resume"
        >
          Download Resume
        </a>
      </section>
      <section className="info">
        <p>Hi There!</p>
        <p>
          I am <strong>Alexander Vashchuk</strong>
        </p>
        <p>
          I am <img src="images/age.png" alt="age" title="age" /> {getAge()}{" "}
          years old and I'm self-taught developer
        </p>
        <p>You can check out my projects and contact me down below</p>
      </section>
    </div>
  );
};

export default About;
