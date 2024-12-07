// // import React from 'react'

// // const LoginPage = () => {
// //   return (
// //     <div>LoginPage</div>
// //   )
// // }

// // export default LoginPage






// // import React from 'react'
// import "./CSS/loginsignup.css"



// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// // import sign from "../assets/sign.svg";
// import 'react-toastify/dist/ReactToastify.css';
// // import { FcGoogle } from "react-icons/fc";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate






// const auth = getAuth();
// const navigate = useNavigate();  // Initialize navigate hook

// const handleLogin = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   const formData = new FormData(e.target);
//   const { email, password } = Object.fromEntries(formData);

//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     toast.success("Login successful!");
//     console.log("Login success");

//     // Save the token to localStorage (or any other necessary logic)
//     localStorage.setItem('token', 'your_auth_token_here');  // Set the token

//     // Navigate to the home page or the protected layout page
//     navigate('/');  // Redirect to the layout page after login
//   } catch (error) {
//     console.log(error);
//     toast.error(error.message);
//   } finally {
//     setLoading(false);
//   }
// };



// const LoginPage = () => {
  

//   return (
//     <div className="login-signup-container">
//       <div className="signup-wrapper">
//         <h1>Sign Up</h1>
//         <form onSubmit={handleRegister}>
//           <input 
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             // value={formData.name}
//             // onChange={handleInputChange}
//             required
//           />
//           <input 
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             // value={formData.email}
//             // onChange={handleInputChange}
//             required
//           />
//           <input 
//             type="password"
//             name="password"
//             placeholder="Your Password"
//             // value={formData.password}
//             // onChange={handleInputChange}
//             required
//           />
          
//           <div className="terms-checkbox">
//             <input 
//               type="checkbox"
//               id="terms"
//               name="agreedToTerms"
//               // checked={formData.agreedToTerms}
//               // onChange={handleInputChange}
//             />
//             <label htmlFor="terms">
//               By continuing, I agree to the terms of use and privacy policy
//             </label>
//           </div>
          
//           <button type="submit">Continue</button>
          
//           <p className="login-link">
//             Already have an account? 
//             <span onClick={() => {/* Add navigation logic */}}>Login</span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage






import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import "./CSS/loginsignup.css";

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
