import React from 'react'
import "./homediscover.css"
import { FaArrowRightLong } from "react-icons/fa6";

import pic from "../../assets/a1.jpg"
import brandImg from "../../assets/2.png"

const HomeDiscover = () => {
  return (
    <div className='homediscover'>
        <div className='homediscover-container'>
            <div className="home-about-title">
                <h1 style={{color:'black'}}>Explore our portfolio</h1>
            </div>
            <div className="home-discover-cards-container">
                <div className="home-discover-cards">
                <div className="home-discover-cards-title">
                    <img src={brandImg} alt="" />
                    <h1>Product strategy</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div><img src={pic} alt="" />
                </div>
                <div className="home-discover-cards">
                <div className="home-discover-cards-title">
                    <img src={brandImg} alt="" />
                    <h1>Product strategy</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div>
                <img src={pic} alt="" />
                </div>
                <div className="home-discover-cards">
                <div className="home-discover-cards-title">
                    <img src={brandImg} alt="" />
                    <h1>Product strategy</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div><img src={pic} alt="" />
                </div>
            
            </div>
            <div className="home-discovery-button">
                <p>Learn more</p>
                <FaArrowRightLong className='home-about-icon' />
            </div>
        </div>
    </div>
  )
}

export default HomeDiscover