

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import "./Css/LoginSignup.css";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      localStorage.setItem('token', 'your_auth_token_here');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-signup-container">
      <div className="signup-wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <input 
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
          
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          
          <p className="login-link">
            Don't have an account? 
            <Link  style={{color: "black", textDecoration: "none", fontSize: "20px"}}  to="/register">Sign Up</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default LoginPage;
