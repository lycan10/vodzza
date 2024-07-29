import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './reviews.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
   <div className="reviews">
    < div className='review-container'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='reviews-content-card'>
              <h1>"Vodzza manages all our IT needs, from software updates to hardware troubleshooting. Their support team is incredibly responsive and efficient. They have a knack for explaining complex technical issues in layman's terms, making it easy for us to understand the problem and the solution."</h1>
              <div className="reviews-content-author">
                  <h1>John Anderson</h1>
                  <div className="reviews-content-author-title">
                      <h3>Head of IT</h3>
                    <div> </div>
                    <h3>Total trailer</h3>
                  </div>
              </div>
          </div>
        </SwiperSlide>

            <SwiperSlide>
            <div className='reviews-content-card'>
                <h1>"Vodzza is a breath of fresh air in the tech industry. They're not your typical cold, impersonal tech company. Their team is genuinely passionate about helping businesses succeed and it shows in their work. "</h1>
                <div className="reviews-content-author">
                    <h1>Thomas Odunpo</h1>
                    <div className="reviews-content-author-title">
                        <h3>Founder</h3>
                        <div> </div>
                        <h3>FAFAEDA</h3>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='reviews-content-card'>
                <h1>"Working with Vodzza has been a fantastic experience. Their customer service is exceptional – they are always prompt, courteous, and go above and beyond to ensure client satisfaction. Whether it’s a simple query or a complex issue, the Vodzza team is always ready to help."</h1>
                <div className="reviews-content-author">
                    <h1>Donatus Akuh</h1>
                    <div className="reviews-content-author-title">
                        <h3>Head of Operations</h3>
                        <div> </div>
                        <h3>Corona Int'l Events</h3>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='reviews-content-card'>
                <h1>"Vodzza has been instrumental in the development of our custom software solutions. Their team is highly skilled, responsive, and innovative. They took the time to understand our needs and delivered a product that exceeded our expectations. The integration was seamless, and their support has been outstanding."</h1>
                <div className="reviews-content-author">
                    <h1>Victor Precious</h1>
                    <div className="reviews-content-author-title">
                        <h3>Team Lead</h3>
                        <div> </div>
                        <h3>The Unburden</h3>
                    </div>
                </div>
            </div>
            </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
    </div> 
  );
}

export default Reviews
