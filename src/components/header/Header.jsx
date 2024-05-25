import React from 'react'
import "./header.css"

import { FaArrowRightLong } from "react-icons/fa6";
import brand from "../../assets/brand-image.png"

const Header = () => {
  return (
    <div className='header'> 
        <div className="header-contatiner">
            <div className="header-top">
                <div className="header-top-text">
                    <h1>Let's build <br /> the future together <span>.</span> </h1>
                    <p>Vodzza is a team of passionate software development experts,  trusted by leading businesses to craft, build, and launch groundbreaking software solutions.</p>
                </div>
                <div className="header-top-3d"></div>
            </div>
            <div className="header-bottom">
              <h1>The go-to partner for world-leading brands and high-growth startups. See our work <span><FaArrowRightLong /></span></h1>
              <div className="header-business-logos">
                <img src={brand} alt="" />
                <img src={brand} alt="" />
                <img src={brand} alt="" />
                <img src={brand} alt="" />
                <img src={brand} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header