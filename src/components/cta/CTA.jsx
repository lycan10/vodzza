import React from 'react'
import "./cta.css"
import { AiOutlineMail } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbTransactionDollar } from "react-icons/tb";


const CTA = () => {
  return (
    <div className='cta'>
        <div className="cta-container">
        <div className="cta-form-title">
                <h1>Get a quote </h1>
                <p style={{color: ""}} className='cta-title'>Across product strategy, UI/UX design, and end-to-end development, we craft the team and project to your needs.</p>
            </div>
            <div className="cta-form-container">
            <div className="form-left">
                    <div className="form-left-input">
                        <input type="text" placeholder='First Name'/>
                    </div>
                    <div className="form-left-input">
                        <input type="text" placeholder='Last Name'/>
                    </div>
                    <div className="form-left-input stuff">
                    <AiOutlineMail className='form-icon' />
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="form-left-input stuff">
                    <BsFillBuildingsFill className='form-icon' />
                        <input type="text" placeholder='Company name'/>
                    </div>
                    <div className="form-left-input stuff">
                    <TbTransactionDollar className='form-icon' />
                        <input type="text" placeholder='Budget'/>
                    </div>
                </div>
                <div className="form-right">
                <div className="form-left-textarea">
                        <textarea type="text" placeholder='Tell us about your project....'/>
                    </div>
                </div>
            </div>
            <div className="cta-footer-container">
                <h1>By continuing you agree to our <span>Privacy Policy</span></h1>
                <div className="cta-footer-button">
                    <p>Submit</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA