import React from 'react'

import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

import logo from "../../assets/brand-image.png"

const Footer = () => {

    const date = new Date()


  return (
    <div className='Footer'>
        <div className="footer-container">
            <div className="footer-left">
               <img src={logo} alt="" />
            </div>
            <div className="footer-middle">
                <div className="footer-socials">
                <FaInstagram className='footer-socials-icon' />
                </div>
                <div className="footer-socials">
                <RiTwitterXLine className='footer-socials-icon'  />
                </div>
                <div className="footer-socials">
                <FaTiktok className='footer-socials-icon'  />
                </div>
            </div>
            <div className="footer-right">
                <p>© {date.getFullYear()} Vodzza.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer