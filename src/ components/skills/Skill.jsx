import React, { useState } from "react";
import "./skill.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import os from '../../assets/os.png';
function Skill() {
  const [openSkills, setOpenSkills] = useState({});
  const skills = {
    "Web-Technologies": ["React", "JavaScript", "Css", "HTML", "Material UI"],
    "Version Control": ["GitHub"],
    Tools: ["VisualStudio", "Eclipse", "IntelliJ"],
    "Operating Systems": ["MacOs", "Windows"],
  };
  const skillsImages = [WebDesign, UIDesign, AppDesign,os];

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
            <div className="skillBar" key={row} onClick={() => toggleSkill(row)}>
              <img
                src={skillsImages[index]}
                alt="WebDesign"
                className="skillBarImage"
              />
              <div className="skillBarText" >
                <h2>{row}</h2>
              </div>
             {!openSkills[row]? <ExpandMoreIcon className="dropDown" fontSize='large'/>:<ExpandLessIcon className="dropDown" fontSize='large'/>}
            </div>
            {openSkills[row] && <Skillset keys={skills} row={row} />}
          </>
        ))}
      </div>
    </section>
  );
}

function Skillset({ keys, row }) {
  return (
    <>
      {keys[row]?.map((skill) => (
        <Skillist row={skill} key={skill} />
      ))}
    </>
  );
}

function Skillist({ row }) {
  return (
    <div className="skillListBar">
      <div className="skillBarText">
        <h2>{row}</h2>
      </div>
    </div>
  );
}

export default Skill;
