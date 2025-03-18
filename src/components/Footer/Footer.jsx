import React from 'react';
import { Link } from 'react-router-dom'; // React Router Link kullanıyoruz
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // React Icons kullanıyoruz
import css from './Footer.module.css'; // CSS dosyasını import ediyoruz
import logo from '../../assets/logo/android-chrome-512x512.png'

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.logo}>
          <h1><span>
            <img src={logo} alt='logo' width={80} />
            </span>Nexora</h1>
          <p>Connecting you to the future.</p>
        </div>
        <div className={css.contact}>
          <h2>Contact Us</h2>
          <p>Email: info@nexora.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className={css.social}>
          <h2>Follow Us</h2>
          <div className={css.icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>


      </div>

      <div className={css.footerBottom}>
        <p>&copy; 2025 Nexora. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
