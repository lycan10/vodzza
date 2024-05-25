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
                <h1>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</h1>
                <div className="reviews-content-author">
                    <h1>Rema Odunpo</h1>
                    <div className="reviews-content-author-title">
                        <h3>Ceo</h3>
                        <div> </div>
                        <h3>Google</h3>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='reviews-content-card'>
                <h1>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</h1>
                <div className="reviews-content-author">
                    <h1>Rema Odunpo</h1>
                    <div className="reviews-content-author-title">
                        <h3>Ceo</h3>
                        <div> </div>
                        <h3>Google</h3>
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
