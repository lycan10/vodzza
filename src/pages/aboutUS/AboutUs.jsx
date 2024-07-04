import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import CTA from '../../components/cta/CTA'
import Reviews from '../../components/reviews/Reviews'


import "./aboutus.css"
import PortfolioMarquee from '../../components/portfolio-marquee/PortfolioMarquee'
import Marquee from "react-fast-marquee";

import p1 from "../../assets/tt4.png"
import p2 from "../../assets/marble1.jpg"
import p3 from "../../assets/faf3.png"
import p4 from "../../assets/cs.png"
import p5 from "../../assets/ra3.png"
import p6 from "../../assets/TU.png"
import AboutHeader from './AboutHeader'

const AboutUs = () => {
  return (
    <div className='aboutus'> 
        <div className="aboutus-container">
            <Navbar />
            <div className="portfolio-header">
                <h1>Coding your dreams into reality.</h1>    
                <p>Bridging the gap between imagination and innovation <br /> one code block at a time.</p>
            </div>
           
            <div className="aboutus-header">
               <AboutHeader />
                <div className="portfolio-marquee-container about-marquee">
                <div className="portfolio-marquee">
                <Marquee>
                        <PortfolioMarquee img={p1} header={"Total Trailer"} title={"Saas"} />
                        <PortfolioMarquee img={p6} header={"The Unburden"} title={"Saas"} />
                        <PortfolioMarquee img={p3} header={"Fafaeda NGO"} title={"Web dev"} />
                        <PortfolioMarquee img={p4} header={"Your Connerstore"} title={"Saas"} />
                        <PortfolioMarquee img={p2} header={"The Marbles"} title={"Web dev"} />
                        <PortfolioMarquee img={p5} header={"Rayyan Bank"} title={"Web dev"} />
                    </Marquee>
                </div>
            </div>
            </div>
           
            <div className="aboutus-mission-container">
                <div className="aboutus-mission">
                    <h3>OUR MISSION</h3>
                    <p>To empower businesses through innovative web development, data analysis, and robust cybersecurity solutions, using cutting-edge technology.</p>
                </div>
                <div className="aboutus-mission">
                    <h3>OUR VISION</h3>
                    <p>Our vision is to be a global leader in delivering transformative digital solutions that enhance efficiency, security, and user experience. </p>
                </div>
            </div> 
            <div className="aboutus-stats-main">
                <div className="aboutus-stats-title">
                    <h3>VODZZA</h3>
                    <p>Committed to delivering exceptional results...</p>
                </div>
                <div className="aboutus-stats-container">
                    <div className="aboutus-stats">
                        <h1><span>150+</span> thousand users</h1>
                        <p>engaged with our innovative solutions</p>
                    </div>
                    <div className="aboutus-stats">
                        <h1><span>10+</span> satisfied clients</h1>
                        <p>who trust us to drive their success</p>
                    </div>
                    <div className="aboutus-stats">
                        <h1><span>120+</span> million users</h1>
                        <p>benefited from our cutting-edge technologies</p>
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