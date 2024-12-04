

import React from 'react'
import "./Baner.css"

import tab3 from "../../assets/images/iphone2.jpg"
import tab5 from "../../assets/images/iphone3.jpg"


const PhoneBaner = () => {
  return (
    <div className='banner'>
<div className="img-1">
  <div className="div">
 <h1>Best Deal</h1>
 <p>Edge to edge coverage</p>
  </div>
  <div className="div2">
  <img src={tab5} alt="" />

  </div>

</div>
<div className="img-1">
<div className="div">
<h1>New Arrival</h1>
<p>Best pen experience</p>
</div>
<div className="div2">
<img src={tab3} alt="" />

</div>

</div>
    </div>
  )
}

export default PhoneBaner
