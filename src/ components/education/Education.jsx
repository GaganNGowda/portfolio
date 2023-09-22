import React from "react";
import "./education.css";
function Education() {
  const education={'RLJCS, Kolar':'2003-2015','Excel Academics':'2015-2017','MSRIT':'2017-2021'}
  const levels=['School','Pre-University','Degree']
  return (
    <section id="education">
       <h2 className="educationTitle">Education</h2>
       <div class="conteudo">
         <div class="carrousel">
      {Object.keys(education).map((row,index)=>{
         return(     
         <article class="card">
          <span className="level">{levels[index]}</span>
         <h1>{row}</h1>
         <h4>{education[row]}</h4>
         </article>
       )
      })}
        </div>
         </div>
    </section>
  );
}

export default Education;
