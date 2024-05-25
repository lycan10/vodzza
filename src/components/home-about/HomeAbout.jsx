import React from 'react'
import "./homeabout.css"
import { FaArrowRightLong } from "react-icons/fa6";

import logo from "../../assets/web-design.png"

const HomeAbout = () => {
  return (
    <div>
        <div className="home-about-container">
            <div className="home-about-title">
                <h1>What we do</h1>
                <p>Across product strategy, UI/UX design, and end-to-end development, we craft the team and project to your needs.</p>
            </div>
            <div className="home-about-cards-container">
                <div className="home-about-cards">
                <img src={logo} alt="" />
                <h1>Product strategy</h1>
                <p>A strategic vision to define your product’s unique value and successfully bring it to market.</p>
                </div>
                <div className="home-about-cards">
                <img src={logo} alt="" />
                <h1>Product strategy</h1>
                <p>A strategic vision to define your product’s unique value and successfully bring it to market.</p>
                </div>
                <div className="home-about-cards">
                <img src={logo} alt="" />
                <h1>Product strategy</h1>
                <p>A strategic vision to define your product’s unique value and successfully bring it to market.</p>
                </div>
                <div className="home-about-cards">
                <img src={logo} alt="" />
                <h1>Product strategy</h1>
                <p>A strategic vision to define your product’s unique value and successfully bring it to market.</p>
                </div>
            </div>
            <div className="home-about-cards-button">
                <p>Learn more</p>
                <FaArrowRightLong className='home-about-icon' />
            </div>
        </div>
    </div>
  )
}

export default HomeAbout