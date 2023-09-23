import { React, useRef } from "react";
import "./contact.css";
import VerticalAlignTopRoundedIcon from "@mui/icons-material/VerticalAlignTopRounded";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { Tooltip } from "@mui/material";
import {Link} from 'react-scroll'
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_je8pxw6",
        "template_pyiqscq",
        form.current,
        "r_zQpf2MO7hNCOwh8"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent !");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDescription">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="yourname"
          placeholder="Your name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your email"
          name="from_email"
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="message"
          placeholder="Your message"
        />
        <button className="submit" type="submit" value="Send">
          Submit
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/gagan-n-gowda-6a5977145/">
            <img src={linkedin} alt="linkedin" className="link" />
          </a>
          <a href="https://www.instagram.com/gagan.n.gowda/">
            <img src={instagram} alt="instagram" className="link" />
          </a>
        </div>
      </form>
      <Link
        activeClass="active"
        to="intro"
        offset={-100}
        spy={true}
        smooth={true}
        duration={500}
        className="desktopMenuListItem"
      >
        <Tooltip
          className="top"
          title="Go to top"
          onClick={() =>
            document
              .getElementById("intro")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <VerticalAlignTopRoundedIcon fontSize="large" />
        </Tooltip>
      </Link>
    </section>
  );
}

export default Contact;
