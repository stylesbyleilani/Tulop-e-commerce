




import React from 'react';
import { FaAppStoreIos, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import './Pooter.css'
const Footer = () => {
  return (
    <footer className="pooter">
      <div className="pooter-container">
        <div className="pooter-section">
          <h1>Tulop</h1>
          <p>
            Our solutions make production
            faster and cheaper. Contact us for
            more information
          </p>
        </div>

        <div className="pooter-section">
          <h2>Shop</h2>
          <div className="pooter-links">
            <a href="#home">About us</a>
            <a href="#about">Customers</a>
            <a href="#sitemap">Newsroom</a>
            <a href="#faq">Events</a>
          </div>
        </div>

        <div className="pooter-section">
          <h2>Company</h2>
          <div className="pooter-links">
            <a href="#metal">Precision Metalforming</a>
            <a href="#manufacturing">Industrial Manufacturing</a>
            <a href="#tech">High Tech & Electronics</a>
            <a href="#aerospace">Aerospace</a>
          </div>
        </div>

        <div className="pooter-section">
          <h2>Products</h2>
          <div className="pooter-links">
            <a href="#mes">Manufacturing Execution System</a>
            <a href="#erp">Enterprise Resource Planning</a>
            <a href="#qms">Quality Management System</a>
            <a href="#scp">Supply Chain Planning</a>
          </div>
        </div>

        <div className="pooter-section">
          <h2>Get In Touch</h2>
          <div className="pooter-contact">
            <p>hello@tulop.com</p>
            <div className="pooter-social-icons">
              <a href="#linkedin" className="pooter-social-icon">
                <FaLinkedinIn />
              </a>
              <a href="#app" className="pooter-social-icon">
                <FaAppStoreIos />
              </a>
              <a href="#facebook" className="pooter-social-icon">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pooter-copyright">
        <hr />
        <p>©2024 Tulop, All rights reserved</p>
        <div className="pooter-legal-links">
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;