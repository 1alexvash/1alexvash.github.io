import React from "react";

const ContactMe = () => {
  return (
    <div className="Contact-Me">
      <div className="title">Contact Me:</div>
      <div className="contact-options">
        <section>
          <img src="images/phone.png" alt="phone" title="phone" />
          <a href="tel:+380 99 75 45 105">+380 99 75 45 105</a>
        </section>
        <section>
          <img src="images/telegram.png" alt="telegram" title="telegram" />
          <a href="https://web.telegram.org/#/im?p=@HeWorksSoHard">
            HeWorksSoHard
          </a>
        </section>
        <section>
          <img src="images/email.png" alt="email" title="email" />
          <a href="mailto:1alexvash@gmail.com">1alexvash@gmail.com</a>
        </section>
        <section>
          <img src="images/skype.png" alt="skype" title="skype" />
          <a href="skype:live:1alexvash?chat">1alexvash</a>
        </section>
        <section>
          <img src="images/instagram.png" alt="instagram" title="instagram" />
          <a href="https://www.instagram.com/1alexvash/">1alexvash</a>
        </section>
      </div>
    </div>
  );
};

export default ContactMe;
