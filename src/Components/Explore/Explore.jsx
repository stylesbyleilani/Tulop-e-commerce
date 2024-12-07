import './Explore.css'
import React from 'react'
import { Link } from 'react-router-dom'
import iphonelogo from "../../assets/images/iphone3.jpg"
import lap from "../../assets/images/lap1.jpg"
import tab1 from "../../assets/images/tab1.jpg"
import air from "../../assets/images/air2.jpg"
import w1 from "../../assets/images/w1.jpg"

const Explore = () => {
  const exploreItems = [
    { 
      img: iphonelogo, 
      name: "Phone", 
      path: "/phones" 
    },
    { 
      img: lap, 
      name: "Laptop", 
      path: "/laptop" 
    },
    { 
      img: tab1, 
      name: "Tablet", 
      path: "/tablet" 
    },
    { 
      img: air, 
      name: "Audio", 
      path: "/audio" 
    },
    { 
      img: w1, 
      name: "Watch", 
      path: "/watch" 
    }
  ]

  return (
    <div className='explore-section'>
      <div className="explore-container">
        <h1>Find Your Gadgets</h1>
        <div className="explore-grid">
          {exploreItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="explore-item"
            >
              <div className="explore-item-content">
                <div className="explore-item-image">
                  <img 
                    src={item.img} 
                    alt={`${item.name} category`} 
                    className="item-img"
                  />
                </div>
                <span className="explore-item-label">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore