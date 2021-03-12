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
      <div className="footer-contaainer1">
        <img src={logoW} alt="" className="footer__logo"/>
        <div className="footer-icons">
          <img src={facebook} alt="" className="footer__icon"/>
          <img src={youtube} alt="" className="footer__icon"/>
          <img src={twitter} alt="" className="footer__icon"/>
          <img src={pinterest} alt="" className="footer__icon"/>
          <img src={instagram} alt="" className="footer__icon"/>
        </div>
      </div>
      <div className="footer-texts">
        <div className="footer-text1">
          <p className="footer__text">About Us</p>
          <p className="footer__text">Contact</p>
          <p className="footer__text">Blog</p>
        </div>
        <div className="footer-text2">
          <p className="footer__text">Careers</p>
          <p className="footer__text">Support</p>
          <p className="footer__text">Privacy Policy</p>
        </div>
      </div>
      <div className="footer-container3">
        <button className="footer__button">Request invite</button>
        <p className="footer__reserved">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer