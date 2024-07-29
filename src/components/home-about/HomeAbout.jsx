import React from 'react'
import "./homeabout.css"
import { FaArrowRightLong } from "react-icons/fa6";

import logo from "../../assets/pd.png"
import logo2 from "../../assets/pd2.png"
import logo3 from "../../assets/pd3.png"
import logo4 from "../../assets/pd8.png"

import d1 from "../../assets/d1.jpg"
import d2 from "../../assets/d2.jpg"
import d3 from "../../assets/d3.jpg"
import d4 from "../../assets/d6.jpg"


const HomeAbout = () => {

    const navigateToAboutUs = () => {
        const newUrl = "/about"
        window.location.href = newUrl
      }

  return (
    <div>
        <div className="home-about-container">
            <div className="home-about-title-container">
                <div className="home-about-title">
                    <h1>We tailor our team of creatives to meet your needs. </h1>
                </div>
                <div className="home-about-cards-button" onClick={navigateToAboutUs}>
                <p>Learn more</p>
                <FaArrowRightLong className='home-about-icon' />
            </div>
            </div>
            <div className="home-about-cards-container">
                <div className="home-about-cards-main">
                    <div className="home-about-cards"> 
                        <div className="home-about-card-image">
                        <   img src={d1} alt="" />
                        </div>
                        <div className="home-about-card-opacity"></div>
                        <div className="home-about-card-title-container">
                            <div className="home-about-card-title">
                            <   img src={logo} alt="" />
                            <h1>Product design</h1>
                            </div>
                            <div className="home-about-card-content">
                                <p>User-friendly and visually appealing interfaces for software applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-about-cards"> 
                        <div className="home-about-card-image">
                        <   img src={d2} alt="" />
                        </div>
                        <div className="home-about-card-opacity"></div>
                        <div className="home-about-card-title-container">
                            <div className="home-about-card-title">
                            <   img src={logo2} alt="" />
                            <h1>Data analysis</h1>
                            </div>
                            <div className="home-about-card-content">
                                <p>Comprehensive data analysis for data-driven decision making </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-about-cards-main about-reverse">
                    <div className="home-about-cards"> 
                        <div className="home-about-card-image">
                        <   img src={d3} alt="" />
                        </div>
                        <div className="home-about-card-opacity"></div>
                        <div className="home-about-card-title-container">
                            <div className="home-about-card-title">
                            <   img src={logo3} alt="" />
                            <h1>Cyber security</h1>
                            </div>
                            <div className="home-about-card-content">
                                <p>Proactive threat detection, robust data protection measures, and regulatory compliance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-about-cards"> 
                        <div className="home-about-card-image">
                        <   img src={d4} alt="" />
                        </div>
                        <div className="home-about-card-opacity"></div>
                        <div className="home-about-card-title-container">
                            <div className="home-about-card-title">
                            <   img src={logo4} alt="" />
                            <h1>Full product development</h1>
                            </div>
                            <div className="home-about-card-content">
                                <p>Build custom web apps for your businesses, including e-commerce, and content management systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default HomeAbout