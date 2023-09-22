import {React,useState} from "react";
import "./Works.css";
import '../skills/skill.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import zuora from "../../assets/zuora.png";
function Works() {
  const [openSkills, setOpenSkills] = useState({});
  const companies = {"Zuora":{'Deployment Manager':'I Worked on this project to create a automated process to migrate metadata objects from a source tenant to a target tenant. Metadata objects in Zuora can be Settings, Custom Fields, Notifications, etc.',"Bulk Data Loaer":'Created a solution for a unified user experience to manage the bulk data load, review, correct, and accept business processes required to onboard new customers.','Universal Identity':'I Worked on this project to create a .local authentication and authorization service that permits access to n different environments from a single user session on Uni-id (one unique login required)'}};
  const images=[zuora]
  const toggleSkill = (skillCategory) => {
    setOpenSkills((prevState) => ({
      ...prevState,
      [skillCategory]: !prevState[skillCategory],
    }));
  };
  return (
    <section id="works">
      <h2 className="worksTitle">Experience and Projects</h2>

      <div className="skillBars">
        {Object.keys(companies).map((row, index) => (
          <>
            <div className="skillBar" key={row} onClick={() => toggleSkill(row)}>
              <img
                src={images[index]}
                alt="WebDesign"
                className="skillBarImage"
              />
              <div className="workBarText" >
                <div className="companyPos"><h2>{row}</h2><span className="position"> - Software Engineer II</span></div>
                <p>2021-Present</p>
              </div>
             {!openSkills[row]? <ExpandMoreIcon className="dropDown" fontSize='large'/>:<ExpandLessIcon className="dropDown" fontSize='large'/>}
            </div>
            {openSkills[row] && <WorkProjects keys={companies} row={row} />}
          </>
        ))}
      </div>
    </section>
  );
}
function WorkProjects({ keys, row }) {
  return (
    <>
      {Object.keys(keys[row])?.map((skill) => (
        <Skillist skill={skill} keys={keys[row]} key={skill} />
      ))}
    </>
  );
}

function Skillist({ skill,keys }) {
  return (
          <div className="skillBar" >
            <div className="skillBarText" >
              <div className="companyPos"><h2>{skill}</h2></div>
              <p>{keys[skill]}</p>
            </div>
          </div>
  );
}
export default Works;
