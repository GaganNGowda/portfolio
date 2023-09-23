import React from "react";
import "./Intro.css";
import background from "../../assets/pic.png";
import Typewriter from "typewriter-effect";
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello </span>
        <span className="introText">
          I'm <span className="name"> Gagan</span>
        </span>
        <span className="description">WebSite Designer</span>
        <p className="introPara">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "I am a skilled web developer with experience in creating multiple projects"
                )
                .changeDelay(2)
                .start();
            }}
          />
        </p>
      </div>
      <img src={background} alt="pic" className="pic" />
    </section>
  );
}

export default Intro;
