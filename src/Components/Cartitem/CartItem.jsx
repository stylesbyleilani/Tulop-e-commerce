


import "./CartItem.css"

import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const CartItem = () => {
  const { addtoCart, removeCart, category_list, cartitem, removeItemCompletely } = useContext(ShopContext);

  const calculateTotalPrice = () => {
    return category_list
      .filter(item => cartitem[item.Id] > 0)
      .reduce((total, item) => total + (item.price * cartitem[item.Id]), 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-desktop">
        <div className="cart-header">
          <span>Product</span>
          <span>Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Remove</span>
        </div>
        
        {category_list.map((item) => 
          cartitem[item.Id] > 0 && (
            <div key={item.Id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-product-image" />
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              
              <div className="quantity-controls">
                <button onClick={() => removeCart(item.Id)}>-</button>
                <span>{cartitem[item.Id]}</span>
                <button onClick={() => addtoCart(item.Id)}>+</button>
              </div>
              
              <span>${(item.price * cartitem[item.Id]).toFixed(2)}</span>
              
              <button 
                onClick={() => removeItemCompletely(item.Id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          )
        )}
      </div>

      {/* Mobile View */}
      <div className="cart-mobile">
        {category_list.map((item) => 
          cartitem[item.Id] > 0 && (
            <div key={item.Id} className="mobile-cart-item">
              <div className="mobile-item-header">
                <img src={item.image} alt={item.name} />
                <div className="mobile-item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mobile-item-footer">
                <div className="quantity-controls">
                  <button onClick={() => removeCart(item.Id)}>-</button>
                  <span>{cartitem[item.Id]}</span>
                  <button onClick={() => addtoCart(item.Id)}>+</button>
                </div>
                
                <div className="mobile-item-total">
                  <span>Total: ${(item.price * cartitem[item.Id]).toFixed(2)}</span>
                  <button 
                    onClick={() => removeItemCompletely(item.Id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="cart-summary">
        <span>Total Cart Value:</span>
        <span className="total-price">${calculateTotalPrice()}</span>
      </div>

    <Link style={{textDecoration: "none"}} to="/checkout" > <div className="checkout">
        <button className="check-btn">Checkout Now</button>
      </div></Link>

    </div>
  );
}

export default CartItem;





