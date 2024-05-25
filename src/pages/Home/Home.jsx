import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import HomeAbout from '../../components/home-about/HomeAbout'
import HomeDiscover from '../../components/home-discover/HomeDiscover'
import Reviews from '../../components/reviews/Reviews'
import CTA from '../../components/cta/CTA'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='app'>
      <header>
        <Navbar />
        <Header />
      </header>
      <HomeAbout />
      <HomeDiscover />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home