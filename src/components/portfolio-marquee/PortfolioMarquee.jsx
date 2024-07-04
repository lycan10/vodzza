import React from 'react'
import icon from "../../assets/a1.jpg"

import "./portfoliomarque.css"

const PortfolioMarquee = ({img, header, title}) => {
  return (
    <div className='portfolio-marquee'>
        <img src={img} alt="Portfolio marque" />
        <div className="portfolio-marquee-title-container">
            <h1>{header}</h1>
            <div className="portfolio-marquee-title">
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default PortfolioMarquee