import React from 'react'

import logo from "../../assets/logo/logo2.png"

import "./navbar.css"

const Navbar = () => { 

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

  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="navbar-logo" onClick={navigateToHome}>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-menu">
              <ul>
                <li onClick={navigateToAboutUs}>who we are</li>
                <li onClick={navigateToPortfolio}>what we do</li>
                <li onClick={navigateToQuote}>Request a quote</li>
              </ul>
            </div>
            <div className="navbar-cta">
              <p>Get in touch</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar