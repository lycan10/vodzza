import React, {useState} from 'react'

import  "./portfolio.css"
import Marquee from "react-fast-marquee";
import PortfolioMarquee from '../../components/portfolio-marquee/PortfolioMarquee';
import PortfolioCards from '../../components/portfoliocard/PortfolioCards';
import CTA from '../../components/cta/CTA';
import Footer from '../../components/footer/Footer';
import ServicesCards from '../../components/services-cards/ServicesCards';

import pic from "../../assets/artificial-intelligence.png"
import Navbar from '../../components/navbar/Navbar';

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <Navbar />
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1>You dream it, we build it</h1>    
                <p>We bring world-class products to your <br /> customers at lightning speed.</p>
            </div>
            <div className="portfolio-marquee-container">
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
            <div className="portfolio-services-container">
                <div className="portfolio-services-title">
                    <h3>OUR SERVICES</h3>
                    <p>Customize a team of experts to meet your needs</p>
                </div>
                <div className="portfolio-services-cards-container">
                    <div className="portfolio-services-cards1">
                        <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                        <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                        <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                        <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                        <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                    </div>
                    <div className="portfolio-services-cards2">
                    <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                    <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                    <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                    <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />
                    <ServicesCards img={pic} title="AI expertise" content= "Cutting-edge AI / ML implementation from strategy through execution." />'
                    </div>
                </div>
               
            </div>
            <div className="portfolio-services">
                    <div className="services-top">
                        <PortfolioCards />
                    </div>
                    
                </div>
                <CTA />
                <Footer />
        </div>
    </div>
  )
}

export default Portfolio