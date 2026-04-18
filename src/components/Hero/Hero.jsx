import React from 'react'
import './Hero.css'
import Profile from '../../assets/surya.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Profile} alt="" />
        <h1><span>I'm Surya,</span>Frontend developer</h1>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
           <a 
          href="/SuryaKPResume.pdf"
          download="Surya_Resume.pdf" 
          className="hero-resume"
        >
          My Resume
        </a>
        </div>
    </div>
  )
}

export default Hero