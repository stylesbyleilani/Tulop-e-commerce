
import "./ProductDisplay.css"
import React, { useContext, useState } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { ShopContext } from '../../Context/Context';

const ProductDisplay = ({ product }) => {
  const { addtoCart } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(product.image);

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