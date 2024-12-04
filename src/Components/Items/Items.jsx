
// import React from 'react'
import "./Items.css"
// import { Link } from 'react-router-dom'
// const Items = (props) => {
//   return (
//     <div className='item'>
//       <div className="img">
//       {/* <img src={props.image} alt="" /> */}

//         <Link to={`/product/${props.id}`}><img  onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
//     </div>
//     <p>{props.name} </p>
//     <div className="item-prices">
//         <div className="new-price">
//         {props.new_price}
//         </div>
//         <div className="old-price">
//            {props.old_price}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Items




import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({ id, name, image, new_price, old_price, description }) => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="product-card">
      <Link 
        to={`/product/${id}`} 
        className="product-link"
        onClick={handleScrollToTop}
      >
        <div className="product-image-container">
          <img 
            src={image} 
            alt={name} 
            className="product-image" 
            loading="lazy"
          />
        </div>
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <h5 className="product-des">{description}</h5>

          <div className="product-pricing">
            <span className="new-price">${new_price}</span>
            <span className="old-price">${old_price}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Items