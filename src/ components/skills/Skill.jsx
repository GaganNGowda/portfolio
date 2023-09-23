import React, { useState } from "react";
import "./skill.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import UIDesign from "../../assets/ui-design.png";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import git from "../../assets/git.png";
import vs from "../../assets/vs.png";
import eclipse from "../../assets/eclipse.png";
import ij from "../../assets/ij.png";
import mac from "../../assets/mac.png";
import window from "../../assets/window.png";
import material from "../../assets/material.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import os from "../../assets/os.png";
function Skill() {
  const [openSkills, setOpenSkills] = useState({});
  const skills = {
    "Web-Technologies": {"React":react, "JavaScript":js, "Css":css, "HTML":html, "Material UI":material},
    "Version Control": {"GitHub":git},
    Tools: {"VisualStudio":vs, "Eclipse":eclipse, "IntelliJ":ij},
    "Operating Systems": {"MacOs":mac, "Windows":window},
  };
  const skillsImages = [WebDesign, UIDesign, AppDesign, os];

  const toggleSkill = (skillCategory) => {
    setOpenSkills((prevState) => ({
      ...prevState,
      [skillCategory]: !prevState[skillCategory],
    }));
  };

  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I am a skilled and passionate web developer with 2+ years of experience
        on multiple projects and proficient in working with various
        technologies.
      </span>
      <div className="skillBars">
        {Object.keys(skills).map((row, index) => (
          <>
            <div
              className="skillBar"
              key={row}
              onClick={() => toggleSkill(row)}
            >
              <img
                src={skillsImages[index]}
                alt="WebDesign"
                className="skillBarImage"
              />
              <div className="skillBarText">
                <h2>{row}</h2>
              </div>
              {!openSkills[row] ? (
                <ExpandMoreIcon className="dropDown" fontSize="large" />
              ) : (
                <ExpandLessIcon className="dropDown" fontSize="large" />
              )}
            </div>
            {openSkills[row] && <Skillset keys={skills} row={row} skills={skills}/>}
          </>
        ))}
      </div>
    </section>
  );
}

function Skillset({ keys, row,skills }) {
  return (
    <div className="skillListBars">
    <div className="skillListBar">
      {Object.keys(keys[row])?.map((skill,index) => (
        <Skillist row={skill} key={skill} skills={skills[row]}/>
      ))}
   </div>
    </div>
  );
}

function Skillist({ row ,skills}) {
  return (

      <div className="skillBarChildText">
      <img
                src={skills[row]}
                alt="WebDesign"
                className="skilllanguages"
              />
        <h2>{row}</h2>
      </div>
  
  );
}

export default Skill;
