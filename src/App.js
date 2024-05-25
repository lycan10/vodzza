import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Portfolio from './pages/portfolio/Portfolio';
import Home from './pages/Home/Home';
import AboutUs from './pages/aboutUS/AboutUs';
import Quote from './pages/quote/Quote';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App