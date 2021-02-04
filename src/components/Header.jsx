import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';
import image from '../assets/images/image-mockups.png';
import introMobile from '../assets/images/bg-intro-mobile.svg';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: "deactive",
      nav: "deactive-nav"
    }
  }
  render(){
    
    const handleStyle = () => {
      if(this.state.menu === "active"){
        this.setState({
          menu: "deactive",
          nav: "deactive-nav"
        })
      }else if(this.state.menu === "deactive"){
        this.setState({
          menu: "active",
          nav: "active-nav"
        })
      }
    }

    return(
      <header className="header">
        <div className="container-header">
          <img className="logo" src={logo} alt="Logo de la empresa EasyBank"/>
          <img className="menu-icon" src={hamburger} alt="Menú de navegación" onClick={handleStyle}/>
          <img className="close-icon" src={close} alt="Cerrar menú de navegación"/>
        </div>
        <nav className={this.state.nav}>
          <ul className={this.state.menu}>
            <li className="menu__item"><a href="#" className="link">Home</a></li>
            <li className="menu__item"><a href="#" className="link">About</a></li>
            <li className="menu__item"><a href="#" className="link">Contact</a></li>
            <li className="menu__item"><a href="#" className="link">Blog</a></li>
            <li className="menu__item"><a href="#" className="link">Careers</a></li>
          </ul>
        </nav>
        <img className="intro-mobile" src={introMobile} alt=""/>
        <img className="header__img" src={image} alt=""/>
        <div className="header-info">
          <h1 className="title">Next generation digital banking</h1>
          <p className="header__text">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgenting, investing, and much more.</p>
          <button className="header__button">Request Invite</button>
        </div>
      </header>
    )
  }
}

export default Header