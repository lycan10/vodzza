import React from 'react';
import "./homediscover.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";

import PortfolioCards from '../portfoliocard/PortfolioCards';

import p1 from "../../assets/tt4.png";
import p2 from "../../assets/marble1.jpg";
import p3 from "../../assets/faf3.png";
import p4 from "../../assets/cs.png";
import p5 from "../../assets/ra3.png";
import p6 from "../../assets/TU.png";

const HomeDiscover = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 6000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };


  const navigateToPortfolio = () => {
    const newUrl = "/portfolio"
    window.location.href = newUrl
  }

  return (
    <div className='homediscover'>
      <div className='homediscover-container'>
        <div className="homediscover__title">
          <h1 style={{ color: '#36BA98' }}>Explore our portfolio</h1>
        </div>
        <div className="home-discover-cards-container">
          <div className="homediscover__slider">
            <Slider {...settings}>
              <PortfolioCards header={"The Unburden"} title={"SaaS"} img={p6} body={"An exceptional blog application designed for seamless content creation and sharing."} />
              <PortfolioCards header={"Rayyan Bank"} title={"SaaS"} img={p5} body={"A comprehensive microfinance banking solution tailored for all financial services."} />
              <PortfolioCards header={"The Marbles"} title={"Web dev"} img={p2} body={"Empowering children in West Africa through education."} />
              <PortfolioCards header={"Total Trailer"} title={"SaaS"} img={p1} body={"A premium e-commerce website offering a top-tier online shopping experience."} />
              <PortfolioCards header={"Your Connerstore"} title={"SaaS"} img={p4} body={"Your ultimate one-stop shop for all retail needs."} />
              <PortfolioCards header={"Fafaeda NGO"} title={"Web dev"} img={p3} body={"Supporting underprivileged families in West Africa through dedicated web resources."} />
            </Slider>
          </div>
        </div>
        <div className="home-discovery-button" onClick={navigateToPortfolio}>
          <p>Learn more</p>
          <FaArrowRightLong className='home-about-icon discover-icon' />
        </div>
      </div>
    </div>
  );
}

export default HomeDiscover;
