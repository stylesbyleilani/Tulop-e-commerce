
// // import React from 'react'
// import "./CSS/loginsignup.css"



// import React, { useState } from 'react';



// import { FcGoogle } from "react-icons/fc";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { db } from '../Lib/firebase';
// import { doc, setDoc } from 'firebase/firestore';
// import { Link, useNavigate } from 'react-router-dom';

// const auth = getAuth();
//   const navigate = useNavigate();



// const handleRegister = async (e) => {
//   e.preventDefault();
//   setLoading(true);


//   const formData = new FormData(e.target);
//   const { username, email, password } = Object.fromEntries(formData);



//   // new validation


//   if (formData.agreedToTerms) {
//     console.log('Form submitted:', formData);
//   } else {
//     alert('Please agree to the terms of use and privacy policy');
//   }

//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);

//     await setDoc(doc(db, "users", res.user.uid), {
//       username,
//       email
//     });

//     toast.success("Account created successfully! You can login now!");
//     navigate("/login");

//     console.log("created account successfully")
//   } catch (error) {
//     console.error("Error creating user and storing data:", error);
//     toast.error(error.message);
//   } finally {
//     setLoading(false);
//   }
// };



// const LoginSignup = () => {
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   email: '',
//   //   password: '',
//   //   agreedToTerms: false
//   // });

//   // const handleInputChange = (e) => {
//   //   const { name, value, type, checked } = e.target;
//   //   setFormData(prevState => ({
//   //     ...prevState,
//   //     [name]: type === 'checkbox' ? checked : value
//   //   }));
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (formData.agreedToTerms) {
//   //     console.log('Form submitted:', formData);
//   //     // Add signup logic
//   //   } else {
//   //     alert('Please agree to the terms of use and privacy policy');
//   //   }
//   // };

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

// export default LoginSignup;












import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../Lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import "./CSS/loginsignup.css";

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
      // Validate terms agreement
      if (!formData.agreedToTerms) {
        toast.error('Please agree to the terms of use and privacy policy');
        setLoading(false);
        return;
      }

      // Create user with email and password
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // Store additional user info in Firestore
      await setDoc(doc(db, "users", res.user.uid), {
        username: formData.name,
        email: formData.email
      });

      toast.success("Account created successfully! You can login now!");
      navigate("/login");
    } catch (error) {
      console.error("Error creating user and storing data:", error);
      toast.error(error.message || "An error occurred during registration");
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
      </div>
    </div>
  );
}

export default LoginSignup;

