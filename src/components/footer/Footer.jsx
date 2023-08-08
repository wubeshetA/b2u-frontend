import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-designColor text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo ml-10 mb-4 md:mb-0">
          <img src="/B2U_logo.svg" alt="Non-profit organization logo" />
        </div>
        <div className="social-media flex items-center">
          <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/your-page" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/your-page" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className="copyright mr-4">
          &copy; 2023 Bridge2University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;