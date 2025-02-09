import React from 'react'
import icon from "../../assets/a1.jpg"

import "./portfoliocards.css"
import { Link } from 'react-router-dom'

const PortfolioCards = ({title, img, body, header, goTo}) => {

    const handleClick = () => {
        window.open(goTo, '_blank', 'noopener,noreferrer');
      };

  return (
    <div className='portfolio-card '>
    <div className='portfolio-card-container'>
        <img src={img} alt="" />
        <div className="portfolio-card-title-container">
            <h1>{header}</h1>
            <div className="portfolio-card-title">
                <p>{title}</p>
            </div>
                <div className="portfolio-card-title card-button" onClick={handleClick}>
                    <p >visit</p>
                </div>
            
        </div>
        <div className="portfolio-card-description">
            <p>{body}</p>
        </div>
    </div>
    {/* <div className="portfolio-card-container2-main">
    <div className='portfolio-card-container smaller-img'>
        <img src={icon} alt="" />
        <div className="portfolio-card-title-container">
            <h1>Total Trailer</h1>
            <div className="portfolio-card-title">
                <p>saas</p>
            </div>
        </div>
        <div className="portfolio-card-description">
            <p>Real-time employee feedback, direct from the micro-kitchen</p>
        </div>
    </div>
    <div className='portfolio-card-container smaller-img'>
        <img src={icon} alt="" />
        <div className="portfolio-card-title-container">
            <h1>Total Trailer</h1>
            <div className="portfolio-card-title">
                <p>saas</p>
            </div>
        </div>
        <div className="portfolio-card-description">
            <p>Real-time employee feedback, direct from the micro-kitchen</p>
        </div>
    </div>
    </div> */}
   
    </div>
  )
}

export default PortfolioCards