








// import React, { useState, useContext } from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FaUser } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { MdHome } from "react-icons/md";

// // import { ShopContext } from '../Context/Context';
// import "./Navbar.css"
// import { ShopContext } from '../../Context/Context';

// const Navbar = () => {
//     const [mobileOpen, setMobileOpen] = useState(false)
//     const [active, setActive] = useState("shop")
//     const { cartItemCount } = useContext(ShopContext);

//     const toggleNavbar = () => {
//         setMobileOpen(!mobileOpen)
//     }

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="logo">
//                     <h2>Tulop</h2>
//                 </div>
                
//                 <div className="menu-toggle" onClick={toggleNavbar}>
//                 {mobileOpen ? 'X' : <RxHamburgerMenu />}

//                     {/* <RxHamburgerMenu /> */}
//                 </div>
                
//                 <div className={`nav-menu ${mobileOpen ? 'active' : 'X'}`}>
//                     <ul className="nav-list">
//                         {[
//                             { name: "Shop", path: "/" },
//                             { name: "Phones", path: "/phones" },
//                             { name: "Tablets", path: "/tablet" },
//                             { name: "Laptops", path: "/laptop" },
//                             { name: "Smart Watch", path: "/watch" },
//                             { name: "Audio", path: "/audio" }
//                         ].map((item) => (
//                             <li 
//                                 key={item.name} 
//                                 onClick={() => setActive(item.name.toLowerCase().replace(/\s+/g, ''))}
//                                 className={active === item.name.toLowerCase().replace(/\s+/g, '') ? 'active-nav' : ''}
//                             >
//                                 <Link 
//                                     to={item.path} 
//                                     className="nav-link"
//                                 >
//                                     {item.name}
//                                 </Link>
//                                 {active === item.name.toLowerCase().replace(/\s+/g, '') && <hr />}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
                
//                 <div className="navbar-icons">
//                 <div className="icon-home">
//                         <Link to="/"><MdHome /></Link>
//                     </div>
//                     <div className="icon-search"><IoMdSearch /></div>
//                     <div className="icon-user">
//                         <Link to="/login"><FaUser /></Link>
//                     </div>
//                     <div className="icon-cart">
//                         <Link to="/cart"><FaShoppingCart /></Link>
//                         <div className="cart-count">{cartItemCount}</div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar











import React, { useState, useContext } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5"; // Add this import
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";

import "./Navbar.css"
import { ShopContext } from '../../Context/Context';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [active, setActive] = useState("shop")
    const { cartItemCount } = useContext(ShopContext);

    const toggleNavbar = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <h2>Tulop</h2>
                </div>
                
                <div className="menu-toggle" onClick={toggleNavbar}>
                    {mobileOpen ? "X"  : <RxHamburgerMenu />}
                </div>
                
                <div className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        {[
                            { name: "Shop", path: "/" },
                            { name: "Phones", path: "/phones" },
                            { name: "Tablets", path: "/tablet" },
                            { name: "Laptops", path: "/laptop" },
                            { name: "Smart Watch", path: "/watch" },
                            { name: "Audio", path: "/audio" }
                        ].map((item) => (
                            <li 
                                key={item.name} 
                                onClick={() => setActive(item.name.toLowerCase().replace(/\s+/g, ''))}
                                className={active === item.name.toLowerCase().replace(/\s+/g, '') ? 'active-nav' : ''}
                            >
                                <Link 
                                    to={item.path} 
                                    className="nav-link"
                                >
                                    {item.name}
                                </Link>
                                {active === item.name.toLowerCase().replace(/\s+/g, '') && <hr />}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="navbar-icons">
                    <div className="icon-home">
                        <Link style={{color : "black"}} to="/"><MdHome /></Link>
                    </div>
                    <div className="icon-search"><IoSearch /></div>
                    <div className="icon-user">
                        <Link style={{color : "black"}}  to="/login"><FaUser /></Link>
                    </div>
                    <div className="icon-cart">
                        <Link style={{color : "black"}}  to="/cart"><FaShoppingCart /></Link>
                        <div   className="cart-count">{cartItemCount}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar