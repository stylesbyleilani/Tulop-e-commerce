
// import React, { useContext } from 'react'
import "./ProductDisplay.css"
// import { FaStar } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa6";
// import { ShopContext } from '../../Context/Context';

// const ProductDisplay = (props) => {

//     const {product} = props;
//     const {addtoCart,removeCart} = useContext(ShopContext)

//     if (!addtoCart || !removeCart) {
//       console.error("addtoCart or removeCart function is not available");
//   }

//   return (
//     <div className='productdisplay'>

//      <div className="productdisplay-let">
//       <div className="productdisplay-img-list">
//         <img src={product.image} alt="" />
//         <img src={product.image} alt="" />
//         <img src={product.image} alt="" />
//         <img src={product.image} alt="" />
//       </div>
//       <div className="productdisplay-img">
//         <img className='productdisplay-main-img' src={product.image} alt="" />
//       </div>
//      </div>

//      <div className="productdisplay-right">
//       <div className="old-price">
//         ${product.price}
//       </div>

//       <div className="productdisplay-right-star">
//  <FaStar/>
//  <FaStar/>
//  <FaStar/>
//  <FaStar/>
//  <FaRegStar/>
//  </div>

//      <h1>{product.name} </h1>
//      <p>{product.description} </p>
// <div className="btn">
// <button onClick={()=>{addtoCart(product.Id)}}>Add to cart</button>

// </div>
//      {/* <button onClick={()=>{addtoCart(product.Id)}}>Add to cart</button> */}
// </div>


//     </div>
//   )
// }

// export default ProductDisplay






import React, { useContext, useState } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { ShopContext } from '../../Context/Context';

const ProductDisplay = ({ product }) => {
  const { addtoCart } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Render star rating dynamically
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="star-icon" />
        ))}
        {hasHalfStar && <FaRegStar key="half" className="star-icon" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="star-icon" />
        ))}
      </>
    );
  };

  const handleAddToCart = () => {
    if (product.Id) {
      addtoCart(product.Id);
    } else {
      console.error("Product ID is undefined");
    }
  };

  // Image gallery thumbnails
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="product-display-container">
      <div className="product-gallery">
        <div className="product-thumbnails">
          {productImages.map((img, index) => (
            <div 
              key={index} 
              className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Product thumbnail ${index + 1}`} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="product-main-image">
          <img 
            src={selectedImage} 
            alt={product.name} 
            className="main-product-image"
            loading="lazy"
          />
        </div>
      </div>

      <div className="product-details">
        <div className="product-price">
          <span className="current-price">${product.price}</span>
        </div>

        <div className="product-rating">
          {renderStarRating(4)}
          <span className="rating-text">(4.0)</span>
        </div>

        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>

        <div className="product-actions">
          <button 
            className="add-to-cart-btn" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay