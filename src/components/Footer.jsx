import React from 'react';
import '../styles/Footer.css';
import logoW from '../assets/images/logo-white.svg';
import facebook from '../assets/images/icon-facebook.svg';
import youtube from '../assets/images/icon-youtube.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return(
    <footer className="footer">
      <img src={logoW} alt="" className="footer__logo"/>
      <div className="footer-icons">
        <img src={facebook} alt="" className="footer__icon"/>
        <img src={youtube} alt="" className="footer__icon"/>
        <img src={twitter} alt="" className="footer__icon"/>
        <img src={pinterest} alt="" className="footer__icon"/>
        <img src={instagram} alt="" className="footer__icon"/>
      </div>
      <div className="footer-texts">
        <p className="footer__text">About Us</p>
        <p className="footer__text">Contact</p>
        <p className="footer__text">Blog</p>
        <p className="footer__text">Careers</p>
        <p className="footer__text">Support</p>
        <p className="footer__text">Privacy Policy</p>
      </div>
      <button className="footer__button">Request invite</button>
      <p className="footer__reserved">© Easybank. All Rights Reserved</p>
    </footer>
  )
}

export default Footer