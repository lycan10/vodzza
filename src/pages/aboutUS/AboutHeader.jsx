import React from 'react'
import p1 from "../../assets/tt4.png"
import p2 from "../../assets/marble1.jpg"
import p3 from "../../assets/faf3.png"
import p4 from "../../assets/cs.png"
import p5 from "../../assets/ra3.png"
import p6 from "../../assets/TU.png"

import "./aboutus.css"

const AboutHeader = () => {
  return (
           <div className="aboutus-header-container">
                <div className="aboutus-header-left">
                    <div className="aboutus-header-left-top-image">
                        <img src={p4} alt="" />
                    </div>
                    <div className="aboutus-header-left-bottom-image">
                        <img src={p2} alt="" />
                    </div>
                </div>
                <div className="aboutus-header-right">
                        <div className="aboutus-header-right-top-image">
                            <img src={p6} alt="" />
                        </div>
                        <div className="aboutus-header-right-bottom-image">
                            <div className="aboutus-header-right-bottom-left-image">
                                <img src={p3} alt="" />
                            </div>
                            <div className="aboutus-header-right-bottom-right-image">
                                <img src={p1} alt="" />
                            </div>
                        </div>
                </div>
            </div>
  )
}

export default AboutHeader