import React from 'react'

import "./servicescards.css"

const ServicesCards = ({img, title, content}) => {
  return (
    <div className='ServicesCards'>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default ServicesCards