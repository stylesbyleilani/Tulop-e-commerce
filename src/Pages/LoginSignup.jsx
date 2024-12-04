
// import React from 'react'
import "./CSS/loginsignup.css"
// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="login-signup-container">
//       <h1>Sign up</h1>
//       <div className="login-signup-contain">
//         <input type="text"  placeholder='your name'/>
//         <input type="email"  placeholder='your email' />
//         <input type="password" placeholder='your password' />
//       </div>
//       <button>Continue</button>
//       <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
//       <div className="loginsignup-agree">
//         <input type="checkbox" />
//         <p>By Continuing i agree to the terms o use and privacy policy</p>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup



import React, { useState } from 'react';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreedToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreedToTerms) {
      console.log('Form submitted:', formData);
      // Add signup logic
    } else {
      alert('Please agree to the terms of use and privacy policy');
    }
  };

  return (
    <div className="login-signup-container">
      <div className="signup-wrapper">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input 
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          
          <div className="terms-checkbox">
            <input 
              type="checkbox"
              id="terms"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleInputChange}
            />
            <label htmlFor="terms">
              By continuing, I agree to the terms of use and privacy policy
            </label>
          </div>
          
          <button type="submit">Continue</button>
          
          <p className="login-link">
            Already have an account? 
            <span onClick={() => {/* Add navigation logic */}}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;

