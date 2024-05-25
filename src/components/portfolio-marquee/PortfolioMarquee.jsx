import React from 'react'
import icon from "../../assets/a1.jpg"

import "./portfoliomarque.css"

const PortfolioMarquee = () => {
  return (
    <div className='portfolio-marquee'>
        <img src={icon} alt="" />
        <div className="portfolio-marquee-title-container">
            <h1>Total Trailer</h1>
            <div className="portfolio-marquee-title">
                <p>saas</p>
            </div>
        </div>
    </div>
  )
}

export default PortfolioMarquee