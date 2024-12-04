

// import React from 'react'
// import "./Baner.css"

// import tab3 from "../../assets/images/air2.jpg"
// import tab5 from "../../assets/images/air3.jpg"


// const AudioBaner = () => {
//   return (
//     <div className='banner'>
// <div className="img-1">
//   <div className="div">
//  <h1>Best Deal</h1>
//  <p>Edge to edge coverage</p>
//   </div>
//   <div className="div2">
//   <img src={tab5} alt="" />

//   </div>

// </div>
// <div className="img-1">
// <div className="div">
// <h1>New Arrival</h1>
// <p>Best pen experience</p>
// </div>
// <div className="div2">
// <img src={tab3} alt="" />

// </div>

// </div>
//     </div>
//   )
// }

// export default AudioBaner





import React from 'react'
import tab3 from "../../assets/images/air2.jpg"
import tab5 from "../../assets/images/air3.jpg"

const AudioBanner = () => {
  const bannerData = [
    {
      title: "Best Deal",
      subtitle: "Edge to edge coverage",
      image: tab5
    },
    {
      title: "New Arrival", 
      subtitle: "Best pen experience",
      image: tab3
    }
  ];

  return (
    <div className='banner'>
      {bannerData.map((banner, index) => (
        <div key={index} className="img-1">
          <div className="div">
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
          </div>
          <div className="div2">
            <img src={banner.image} alt={banner.title} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AudioBanner