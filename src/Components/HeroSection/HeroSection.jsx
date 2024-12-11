



import "./HeroSection.css"
import React from 'react'
import { Link } from 'react-router-dom'
import back1 from "../../assets/images/back1.jpg"

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your Ultimate Gadgets Market Place</h1>
            <p>Discover the latest gadgets, mobiles, laptops, audios and more</p>
            <div className="hero-cta">
              <Link to="/shop" className="cta-button">Shop Now!</Link>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src={back1} 
              alt="Gadgets Showcase" 
              className="hero-img"
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection