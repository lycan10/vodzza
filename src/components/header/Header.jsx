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
                    <h1>Let's help you <br /> Shape the future <span>.</span> </h1>
                    <p>Vodzza ignites innovation by uniting a team of software development professionals and data scientists, dedicated to creating and deploying groundbreaking software solutions, tailored to yur needs.</p>
                    
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