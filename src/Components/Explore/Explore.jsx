// import React, { useState } from 'react'
import './Explore.css'
// import { explore } from '../../assets/Constant'
// import iphonelogo from "../../assets/images/iphonelogo.jpg"
// import lap from "../../assets/images/lap1.jpg"
// import tab1 from "../../assets/images/tab1.jpg"
// import air from "../../assets/images/air2.jpg"
// import w1 from "../../assets/images/w1.jpg"
// import { Link } from 'react-router-dom';



// const Explore = () => {
//   const [active, setActive] =useState("phone")

//   return (
//     <div className='explore'>
//       <h1> Find Your Gadgets</h1>
//       <div className="explore-items">

//         <div className="items">
//     <Link style={{textDecoration: " none" ,color:" #292c36"}}  to="/phones">
//     <div className="img-div">
//       <img  src={iphonelogo} alt="" />
//        <span>phone</span>
//       </div>
//       </Link>
//       <Link  style={{textDecoration: " none" ,color:" #292c36"}} to="/laptop">
//       <div className="img-div">
//       <img src={lap} alt="" />
//        <span>Laptop</span>
//       </div>
//       </Link>
//       <Link style={{textDecoration: " none" ,color:" #292c36"}}  to="/tablet">
//       <div className="img-div">
//       <img src={tab1} alt="" />
//        <span>Tablet</span>
//       </div>  
//       </Link>
//       <Link style={{textDecoration: " none" ,color:" #292c36"}}  to="/audio">
//           <div className="img-div">
//       <img src={air} alt="" />
//        <span>Audio</span>
//       </div>
//       </Link>
//       <Link style={{textDecoration: " none" ,color:" #292c36"}}  to="/watch">
//       <div className="img-div">
//       <img src={w1} alt="" />
//        <span>Watch</span>
//       </div>
//       </Link>



//         </div>

// {/* {explore.map((items,index)=>{
//    return(
//     <div key={index} className="items">
//       <img src={items.menu_img} alt="" />
//       <p>{items.menu_name} </p>
//     </div>
//    )
// })} */}
//       </div>
//     </div>
//   )
// }


// export default Explore




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