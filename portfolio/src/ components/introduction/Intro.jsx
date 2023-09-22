import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll'
import background from '../../assets/pic.png'
import buttonImg from '../../assets/hireme.png'
function Intro() {
  return (
    <section id='intro'>
          <div className="introContent">
              <span className="hello">Hello </span>
              <span className="introText">I'm  <span className="name"> Gagan</span></span>
              <span className='description'>WebSite Designer</span>
              <p className='introPara'>I am a skilled web developer with experience in creating multiple projects</p>
          </div>
          <img src={background} alt="pic" className='pic'/>
    </section>
  )
}

export default Intro