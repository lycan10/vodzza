import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./cta.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbTransactionDollar } from "react-icons/tb";

const CTA = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lceyyds', 'template_ssb72hp', form.current, 'V2lwSnLkrs3RcA85f')
      .then( 
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='cta'>
      <div className="cta-container">
        <div className="cta-form-title">
          <h1>Get a quote </h1>
          <p style={{ color: "" }} className='cta-title'>Across product strategy, UI/UX design, and end-to-end development, we craft the team and project to your needs.</p>
        </div>
        <form className="cta-form-container" ref={form} onSubmit={sendEmail}>
          <div className="form-left">
            <div className="form-left-input">
              <input type="text" name="firstname" placeholder='First Name' required/>
            </div>
            <div className="form-left-input">
              <input type="text" name="lastname" placeholder='Last Name' required/>
            </div>
            <div className="form-left-input stuff">
              <AiOutlineMail className='form-icon' />
              <input type="email" name="email" placeholder='Email' required/>
            </div>
            <div className="form-left-input stuff">
              <BsFillBuildingsFill className='form-icon' />
              <input type="text" name="company" placeholder='Company name' required/>
            </div>
            <div className="form-left-input stuff">
              <TbTransactionDollar className='form-icon' />
              <input type="text" name="budget" placeholder='Budget ($)' required/>
            </div>
          </div>
          <div className="form-right">
            <div className="form-left-textarea">
              <textarea name="message" placeholder='Tell us about your project....' required></textarea>
            </div>
          </div>
          <div className="cta-footer-container">
            <h1>By continuing you agree to our <span>Privacy Policy</span></h1>
            <button className="cta-footer-button" type="submit">
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CTA;
