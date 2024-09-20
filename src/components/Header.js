// components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleNavLinkClick = () => {
      setIsMenuOpen(false);
    };

    const navLinks = document.querySelectorAll('.nav__links a');
    navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
    };
  }, []);

  return (
    <header id="home" className="header">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <img src="assets/logo-white.png" alt="logo" />
          </div>
          <div id="menu-btn" className="nav__menu__btn" onClick={toggleMenu}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>
        <ul id="nav-links" className={`nav__links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#service">SERVICES</a></li>
          <li className="nav__logo">
            <img src="assets/logo-white.png" alt="logo" />
          </li>
          <li><a href="#client">CLIENT</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;