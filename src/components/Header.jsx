import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: "active"
    }
  }
  render(){
    const handleStyle = () => {
      if(this.state.style === "active"){
        this.setState({
          style: "deactive"
        })
      }else if(this.state.style === "deactive"){
        this.setState({
          style: "active"
        })
      }
    }
    return(
      <header className="header">
        <div className="container-header">
          <img className="logo" src={logo} alt="Logo de la empresa EasyBank"/>
          <img className="menu-icon" src={hamburger} alt="Menú de navegación" onClick={handleStyle}/>
          <img className="close-icon" src={close} alt="Cerrar menú de navegación" onClick={handleStyle}/>
        </div>
        <nav className="nav">
          <ul className="menu">
            <li className="menu__item"><a href="#" className="link">Home</a></li>
            <li className="menu__item"><a href="#" className="link">About</a></li>
            <li className="menu__item"><a href="#" className="link">Contact</a></li>
            <li className="menu__item"><a href="#" className="link">Blog</a></li>
            <li className="menu__item"><a href="#" className="link">Careers</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header