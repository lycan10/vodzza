import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import CTA from '../../components/cta/CTA'
import Reviews from '../../components/reviews/Reviews'

import icon from "../../assets/a1.jpg"

import "./aboutus.css"
import PortfolioMarquee from '../../components/portfolio-marquee/PortfolioMarquee'
import Marquee from "react-fast-marquee";


const AboutUs = () => {
  return (
    <div className='aboutus'> 
        <div className="aboutus-container">
            <Navbar />
            <div className="portfolio-header">
                <h1>You dream it, we build it</h1>    
                <p>We bring world-class products to your <br /> customers at lightning speed.</p>
            </div>
           
            <div className="aboutus-header">
                <div className="aboutus-header-container">
                <div className="aboutus-header-left">
                    <div className="aboutus-header-left-top-image">
                        <img src={icon} alt="" />
                    </div>
                    <div className="aboutus-header-left-bottom-image">
                        <img src={icon} alt="" />
                    </div>
                </div>
                <div className="aboutus-header-right">
                        <div className="aboutus-header-right-top-image">
                            <img src={icon} alt="" />
                        </div>
                        <div className="aboutus-header-right-bottom-image">
                            <div className="aboutus-header-right-bottom-left-image">
                                <img src={icon} alt="" />
                            </div>
                            <div className="aboutus-header-right-bottom-right-image">
                                <img src={icon} alt="" />
                            </div>
                        </div>
                </div>
                </div>
                <div className="portfolio-marquee-container about-marquee">
                <div className="portfolio-marquee">
                    <Marquee>
                        <PortfolioMarquee />
                        <PortfolioMarquee />
                        <PortfolioMarquee />
                        <PortfolioMarquee />
                        <PortfolioMarquee />
                    </Marquee>
                </div>
            </div>
            </div>
           
            <div className="aboutus-mission-container">
                <div className="aboutus-mission">
                    <h3>OUR MISSION</h3>
                    <p>Build the world’s most innovative products and realize your fullest potential.</p>
                </div>
            </div> 
            <div className="aboutus-stats-main">
                <div className="aboutus-stats-title">
                    <h3>VODZZA</h3>
                    <p>Collectively, our work has impacted...</p>
                </div>
                <div className="aboutus-stats-container">
                    <div className="aboutus-stats">
                        <h1><span>100+</span> million users</h1>
                        <p>reached with our products</p>
                    </div>
                    <div className="aboutus-stats">
                        <h1><span>100+</span> million users</h1>
                        <p>reached with our products</p>
                    </div>
                    <div className="aboutus-stats">
                        <h1><span>100+</span> million users</h1>
                        <p>reached with our products</p>
                    </div>
                </div>
            </div>
            <Reviews />
            <CTA />
            <Footer />
        </div>
    </div>
  )
}

export default AboutUs