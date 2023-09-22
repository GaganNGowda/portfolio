import React from 'react'
import './skill.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skill() {
  return (
      <section id='skills'>
          <span className="skillTitle">What I do</span>
          <span className="skillDescription">I am skilled and passinate web developer with 2+ years of experience on multiple projects and and proficient in working with various technologies</span>
          <div className="skillBars">
              <div className="skillBar">
                  <img src={UIDesign} alt="UIDesign" className="skillBarImage" />
                  <div className="skillBarText">
                      <h2>UI/UX</h2>
                      <p>Knowledge on figma</p>
                  </div>
              </div>
               <div className="skillBar">
                  <img src={WebDesign} alt="WebDesign" className="skillBarImage" />
                  <div className="skillBarText">
                      <h2>Web-Developer</h2>
                      <p>Demo Text</p>
                  </div>
              </div>
               <div className="skillBar">
                  <img src={AppDesign} alt="AppDesign" className="skillBarImage" />
                  <div className="skillBarText">
                      <h2>App-Designer</h2>
                      <p>Demo Text</p>
                  </div>
              </div>
            </div>
        </section>
  )
}

export default Skill