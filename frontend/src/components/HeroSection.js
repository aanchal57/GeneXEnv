import React from 'react'
import './HeroSection.css'
import HeroVid from '../assets/hero-section-vid.webm';

const HeroSection = () => {
  return (
    <div className="hero-container">
        <video src={HeroVid} autoPlay loop muted />
        <div className="hero-jumbo"><span>Gene</span><i className="fab fa-xing "></i><span>Env</span></div>
    </div>
  )
}

export default HeroSection;