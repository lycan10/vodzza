import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import { AiOutlineMail } from "react-icons/ai";
import { PiBuildingOfficeThin } from "react-icons/pi";

import "./quote.css"
import CTA from '../../components/cta/CTA';

const Quote = () => {
  return (
    <div className='quote'>
        <Navbar />
        <div className="quote-container">
        <CTA />
        </div>
        <Footer />
    </div>
  )
}

export default Quote