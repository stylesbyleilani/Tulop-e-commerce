

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../Lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import "./Css/LoginSignup.css"
const LoginSignup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreedToTerms: false
  });

  const auth = getAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };



  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      if (!formData.agreedToTerms) {
        toast.error('Please agree to the terms of use and privacy policy');
        setLoading(false);
        return;
      }
  
      if (!formData.name || !formData.email || !formData.password) {
        toast.error('Please fill in all required fields');
        setLoading(false);
        return;
      }
  
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
  
      try {
        await setDoc(doc(db, "users", res.user.uid), {
          username: formData.name,
          email: formData.email,
          createdAt: new Date() 
        });
  
        toast.success("Account created successfully! You can login now.");
        navigate("/login");
      } catch (firestoreError) {
        console.error("Firestore Document Creation Error:", firestoreError);
        toast.error(`Firestore Error: ${firestoreError.message}`);
        
        await auth.currentUser.delete();
      }
  
    } catch (authError) {
      console.error("Authentication Error:", authError);
      toast.error(authError.message || "An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login-signup-container">
      <div className="signup-wrapper">
        <h1>Sign Up</h1>
        <form onSubmit={handleRegister}>
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
          
          <button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Continue'}
          </button>
          
          <p className="login-link">
            Already have an account? 
            <Link style={{color: "black", textDecoration: "none", fontSize: "20px"}} to="/login">Login</Link>
          </p>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
}

export default LoginSignup;

