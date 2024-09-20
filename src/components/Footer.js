import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <img src="assets/logo-dark.png" alt="logo" />
          <div className="footer__socials">
            <a href="https://www.facebook.com/elreyevents28/"><i className="ri-facebook-circle-fill"></i></a>
            <a href="https://www.instagram.com/el_rey_events/"><i className="ri-instagram-fill"></i></a>
            <a href="https://www.youtube.com/channel/UCqwiOZmzg7nKMnzg_PNoG4Q"><i className="ri-youtube-fill"></i></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#service">SERVICES</a></li>
            <li><a href="#client">CLIENT</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>STAY IN TOUCH</h4>
          <p>
            Phone: (91)7597457704<br />
            Email: elreyevents28@gmail.com<br />
            Time: Monday to saturday 10:00AM - 08:00PM
          </p>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 El Rey Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;