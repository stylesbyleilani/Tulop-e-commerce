
// import React from 'react'
// import "./Payment.CSS"
// const Payment = () => {
//   return (
//     <div>Payment</div>
//   )
// }

// export default Payment



import React, { useContext, useState } from 'react';
import { ShopContext } from "../../Context/Context";
import './Payment.css';

const Payment = () => {
  const { category_list, cartitem } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    paypalEmail: '',
    cryptoWallet: ''
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

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    alert(`Payment processed via ${paymentMethod}`);
  };

  return (
    <div className="payment-container">
      {/* Order Summary - Desktop */}
      <div className="payment-desktop">
        <div className="payment-header">
          <span>Product</span>
          <span>Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        
        {category_list.map((item) =>
          cartitem[item.Id] > 0 && (
            <div key={item.Id} className="payment-item">
              <img src={item.image} alt={item.name} className="payment-product-image" />
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <span>{cartitem[item.Id]}</span>
              <span>${(item.price * cartitem[item.Id]).toFixed(2)}</span>
            </div>
          )
        )}
      </div>

      {/* Order Summary - Mobile */}
      <div className="payment-mobile">
        {category_list.map((item) =>
          cartitem[item.Id] > 0 && (
            <div key={item.Id} className="mobile-payment-item">
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
      <div className="payment-summary">
        <span>Total Order Value:</span>
        <span className="total-price">${calculateTotalPrice()}</span>
      </div>

      {/* Payment Methods */}
      <div className="payment-methods ">
        <h2>Select Payment Method</h2>
        <div className="payment-method-selector  ">
          <button 
            className={`method-btn  ${paymentMethod === 'credit' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('credit')}
          >
            Credit Card
          </button>
          <button 
            className={`method-btn ${paymentMethod === 'paypal' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('paypal')}
          >
            PayPal
          </button>
          <button 
            className={`method-btn ${paymentMethod === 'crypto' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('crypto')}
          >
            Cryptocurrency
          </button>
        </div>
      </div>

      {/* Payment Form */}
      <form className="payment-form" onSubmit={handleSubmit}>
        {paymentMethod === 'credit' && (
          <div className="payment-section credit-card">
            <h2>Credit Card Details</h2>
            <input 
              type="text" 
              name="cardNumber" 
              placeholder="Card Number" 
              value={formData.cardNumber}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              name="cardHolderName" 
              placeholder="Cardholder Name" 
              value={formData.cardHolderName}
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
        )}

        {paymentMethod === 'paypal' && (
          <div className="payment-section paypal">
            <h2>PayPal Payment</h2>
            <input 
              type="email" 
              name="paypalEmail" 
              placeholder="PayPal Email Address" 
              value={formData.paypalEmail}
              onChange={handleInputChange}
              required 
            />
          </div>
        )}

        {paymentMethod === 'crypto' && (
          <div className="payment-section crypto">
            <h2>Cryptocurrency Payment</h2>
            <input 
              type="text" 
              name="cryptoWallet" 
              placeholder="Crypto Wallet Address" 
              value={formData.cryptoWallet}
              onChange={handleInputChange}
              required 
            />
          </div>
        )}

        <div className="payment-actions">
          <button type="submit" className="complete-payment-btn">
            Complete Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;