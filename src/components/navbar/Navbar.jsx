import React, {useState} from 'react'

import logo from "../../assets/logo/logo2.png"

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom"

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import menuItems from './MenuItems';

import "./navbar.css"

const Navbar = () => { 

  const [active, setActive] = useState(false);

  const navigateToHome = () => {
    const newUrl = "/"
    window.location.href = newUrl
  }

  const navigateToPortfolio = () => {
    const newUrl = "/portfolio"
    window.location.href = newUrl
  }

  const navigateToAboutUs = () => {
    const newUrl = "/about"
    window.location.href = newUrl
  }
  const navigateToQuote = () => {
    const newUrl = "/quote"
    window.location.href = newUrl
  }

  const handleClick = () => {
    setActive(!active);
    if (!active) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="navbar-logo" onClick={navigateToHome}>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-menu">
              <ul>
                <li onClick={navigateToAboutUs}>Who we are</li>
                <li onClick={navigateToPortfolio}>What we do</li>
                <li onClick={navigateToQuote}>Request a quote</li>
              </ul>
            </div>
            <button class="btn draw-border">Get in touch</button>
            {/* <div className="btn draw-border">
              <p>Get in touch</p>
            </div> */}
        </div>
        
        <nav className="navbar-mobile">
      <div className='navbar-logo2' onClick={navigateToHome}>
                      <img src={logo} alt="" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
      
      {active ? <AiOutlineClose /> : <RxHamburgerMenu /> }
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
        
            <div className="navbar-menu-socials-mobile">
                <Link to={"https://www.facebook.com/profile.php?id=61561143368097"} ><FaFacebookF className='footer-socials-space cta-socials cta-mobile' /></Link>
                <Link to={"https://x.com/TUnburden"}><FaXTwitter className='footer-socials-space cta-socials cta-mobile' /></Link>
                <Link to={"https://www.instagram.com/unburden_okay?igsh=MWxkOTFjbndpdmI2dA%3D%3D&utm_source=qr"}><FaInstagram className='footer-socials-space cta-socials cta-mobile' /></Link>
                <Link to={"https://www.tiktok.com/@the.unburden?_t=8nOMw6g2oXB&_r=1"}><FaTiktok className='footer-socials-space cta-socials cta-mobile' /></Link>
            </div>
            <div className="navbar-menu-socials-mobile">
            </div>
            
      </ul>
     
    </nav>
    </div>
  )
}

export default Navbar