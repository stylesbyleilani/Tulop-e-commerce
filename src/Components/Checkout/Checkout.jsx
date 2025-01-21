




import React, { useContext, useState } from 'react';
import { ShopContext } from "../../Context/Context";
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { category_list, cartitem } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const calculateTotalPrice = () => {
    return category_list
      .filter(item => cartitem[item.Id] > 0)
      .reduce((total, item) => total + (item.price * cartitem[item.Id]), 0)
      .toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    alert('Order Submitted!');
  };

  return (
    <div className="checkout-container">
      {/* Order Summary - Desktop */}
      <div className="checkout-desktop">
        <div className="checkout-header">
          <span>Product</span>
          <span>Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        
        {category_list.map((item) =>
          cartitem[item.Id] > 0 && (
            <div key={item.Id} className="checkout-item">
              <img src={item.image} alt={item.name} className="checkout-product-image" />
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <span>{cartitem[item.Id]}</span>
              <span>${(item.price * cartitem[item.Id]).toFixed(2)}</span>
            </div>
          )
        )}
      </div>

      {/* Order Summary - Mobile */}
      <div className="checkout-mobile">
        {category_list.map((item) =>
          cartitem[item.Id] > 0 && (
            <div key={item.Id} className="mobile-checkout-item">
              <div className="mobile-item-header">
                <img src={item.image} alt={item.name} />
                <div className="mobile-item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
              </div>
              <div className="mobile-item-footer">
                <span>Quantity: {cartitem[item.Id]}</span>
                <span>Total: ${(item.price * cartitem[item.Id]).toFixed(2)}</span>
              </div>
            </div>
          )
        )}
      </div>

      {/* Order Total */}
      <div className="checkout-summary">
        <span>Total Order Value:</span>
        <span className="total-price">${calculateTotalPrice()}</span>
      </div>

      {/* Checkout Form */}
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Shipping Information</h2>
          <div className="form-row">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleInputChange}
              required 
            />
          </div>
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
          <input 
            type="text" 
            name="address" 
            placeholder="Street Address" 
            value={formData.address}
            onChange={handleInputChange}
            required 
          />
          <div className="form-row">
            <input 
              type="text" 
              name="city" 
              placeholder="City" 
              value={formData.city}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              name="zipCode" 
              placeholder="Zip Code" 
              value={formData.zipCode}
              onChange={handleInputChange}
              required 
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Payment Details</h2>
          <input 
            type="text" 
            name="cardNumber" 
            placeholder="Card Number" 
            value={formData.cardNumber}
            onChange={handleInputChange}
            required 
          />
          <div className="form-row">
            <input 
              type="text" 
              name="expiryDate" 
              placeholder="MM/YY" 
              value={formData.expiryDate}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              name="cvv" 
              placeholder="CVV" 
              value={formData.cvv}
              onChange={handleInputChange}
              required 
            />
          </div>
        </div>

    <Link style={{textDecoration: "none"}} to="/payment" >  <div className="checkout-actions">
          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </div></Link>
      </form>
    </div>
  );
};

export default Checkout;