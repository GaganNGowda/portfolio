import React from "react";
import "./education.css";
import school from '../../assets/school.png'
import pre from '../../assets/pre.png'
import degree from '../../assets/degree.png'
function Education() {
  const education={'RLJCS, Kolar':{year:'2003-2015',img:school},'Excel Academics':{year:'2015-2017',img:pre},'MSRIT':{year:'2017-2021',img:degree,cgpa:'8.7 CGPA'}}
  const levels=['School','Pre-University','Degree']
  return (
    <section id="education">
       <h2 className="educationTitle">Education</h2>
       <div class="conteudo">
         <div class="carrousel">
      {Object.keys(education).map((row,index)=>{
         return(     
         <article class="card">
          <img src={education[row].img} alt="" className="education" />
          <span className="level">{levels[index]}</span>
         <h1>{row}</h1>
         <h5>{education[row]?.cgpa}</h5>
         <h4>{education[row].year}</h4>
         </article>
       )
      })}
        </div>
         </div>
    </section>
  );
}

export default Education;
