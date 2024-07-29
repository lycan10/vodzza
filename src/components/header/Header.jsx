import React from 'react'
import "./header.css"

import Spline from '@splinetool/react-spline';



import { FaArrowRightLong } from "react-icons/fa6";
import brand from "../../assets/brand-image.png"

const Header = () => {
  return (
    <div className='header'> 
        <div className="header-contatiner">
            <div className="header-top">
                <div className="header-top-text">
                    <h1 style={{color: "#36BA98"}}>Let's help you <br /> Shape the future <span>.</span> </h1>
             <p>Vodzza ignites innovation by uniting a team of software development professionals and data scientists, dedicated to creating and deploying groundbreaking software solutions, tailored to your needs.</p>
                    {/* <div className="header-bottom">
              <h1>The go-to partner for world-leading brands and high-growth startups. See our work <span><FaArrowRightLong /></span></h1>
              <div className="header-business-logos">
                <img src={brand} alt="" />
                <img src={brand} alt="" />
                <img src={brand} alt="" />
                <img src={brand} alt="" />
                <img src={brand} alt="" />
              </div>
            </div> */}
                </div>
                {/* <div className="header-top-3d">
                <Spline scene="https://prod.spline.design/DbgijjSLRSq0CT9Q/scene.splinecode" />
                </div> */}
                  <div className="header-top-3d">
                  <Spline scene="https://prod.spline.design/46rRk4-fCXB-dQkP/scene.splinecode" />
                </div>
          </div>
       
        </div>
    </div>
  )
}

export default Header