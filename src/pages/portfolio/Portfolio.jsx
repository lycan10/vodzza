import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';
import PortfolioMarquee from '../../components/portfolio-marquee/PortfolioMarquee';
import PortfolioCards from '../../components/portfoliocard/PortfolioCards';
import CTA from '../../components/cta/CTA';
import Footer from '../../components/footer/Footer';
import ServicesCards from '../../components/services-cards/ServicesCards';
import pic from '../../assets/artificial-intelligence.png';
import Navbar from '../../components/navbar/Navbar';
import p1 from '../../assets/tt4.png';
import p2 from '../../assets/marble1.jpg';
import p3 from '../../assets/faf3.png';
import p4 from '../../assets/cs.png';
import p5 from '../../assets/ra3.png';
import p6 from '../../assets/TU.png';
import './portfolio.css';
import Reviews from '../../components/reviews/Reviews';

import logo from "../../assets/pd.png"
import logo2 from "../../assets/pd2.png"
import logo3 from "../../assets/pd3.png"
import logo4 from "../../assets/pd8.png"

import logo5 from "../../assets/p10.png"
import logo6 from "../../assets/p11.png"
import logo7 from "../../assets/p12.png"
import logo8 from "../../assets/p13.png"
import logo9 from "../../assets/p14.png"

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const titleHeight = titleRef.current.offsetHeight;

      ScrollTrigger.create({
        trigger: titleRef.current,
        start: 'top top',
        end: () => `+=${containerHeight - titleHeight}`,
        pin: true,
        pinSpacing: false,
        markers: true, // Remove or set to false in production
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  useEffect(() => {
    gsap.to('.portfolio-services-cards1', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.portfolio-services-container',
        start: 'top 30%',
        end: 'bottom top',
        scrub: true,
        markers: true,
      },
    });

    gsap.to('.portfolio-services-cards2', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.portfolio-services-container',
        start: 'top 30%',
        end: 'bottom top',
        scrub: true,
        markers: true,
      },
    });
  }, []);





  return (
    <div className='portfolio'>
      <Navbar />
      <div className='portfolio-container'>
        <div className='portfolio-header'>
        <h1>Coding your dreams into reality.</h1>    
        <p>Bridging the gap between imagination and innovation <br /> one code block at a time.</p>
        </div>

        <div className='portfolio-marquee-container'>
          <div className='portfolio-marquee'>
            <Marquee>
              <PortfolioMarquee img={p1} header={'Total Trailer'} title={'Saas'} />
              <PortfolioMarquee img={p6} header={'The Unburden'} title={'Saas'} />
              <PortfolioMarquee img={p3} header={'Fafaeda NGO'} title={'Web dev'} />
              <PortfolioMarquee img={p4} header={'Your Connerstore'} title={'Saas'} />
              <PortfolioMarquee img={p2} header={'The Marbles'} title={'Web dev'} />
              <PortfolioMarquee img={p5} header={'Rayyan Bank'} title={'Web dev'} />
            </Marquee>
          </div>
        </div>

        <div className='portfolio-services-container desktop-portfolio'>
          <div className='portfolio-services-title' ref={titleRef}>
            <h3>OUR SERVICES</h3>
            <p>Customize a team of experts to meet your needs</p>
          </div>
          <div className='portfolio-services-cards-container' ref={containerRef}>
          <div className='portfolio-services-cards1'>
            <ServicesCards img={logo4} title='Web App Development' content='We build dynamic and responsive web applications tailored to your business needs. From initial concept to final deployment, our team creates intuitive and high-performing web apps that drive engagement and deliver results.' />
            <ServicesCards img={pic} title='AI Expertise' content='Unlock the potential of artificial intelligence with our expert solutions. We offer end-to-end AI and machine learning services, from strategy and development to deployment, to help you leverage data for smarter decisions and innovative products.' />
            <ServicesCards img={logo2} title='Data Analysis' content='Transform raw data into actionable insights with our comprehensive data analysis services. We use advanced analytics techniques to uncover trends, predict outcomes, and provide strategies that support your business goals.' />
            <ServicesCards img={logo} title='Product Design (UI/UX)' content='Create user-centric designs that enhance the user experience and drive satisfaction. Our UI/UX design services focus on creating aesthetically pleasing and highly functional interfaces that resonate with your target audience.' />
            <ServicesCards img={logo3} title='Cyber Security' content='Protect your digital assets with our robust cyber security solutions. We provide comprehensive security assessments, threat detection, and response strategies to safeguard your business from cyber threats and vulnerabilities.' />
          </div>
          <div className='portfolio-services-cards2'>
            <ServicesCards img={logo8} title='Mobile App Development' content='Reach your audience on-the-go with our mobile app development services. We design and develop intuitive and high-performing mobile apps for both iOS and Android platforms, ensuring a seamless experience for users.' />
            <ServicesCards img={logo9} title='SEO' content='Improve your online visibility and attract more customers with our expert SEO services. We optimize your website to rank higher in search engine results, driving organic traffic and increasing your digital presence.' />
            <ServicesCards img={logo5} title='Cloud-Based Development' content='Harness the power of the cloud for scalable and flexible solutions. Our cloud-based development services include creating cloud applications, managing infrastructure, and ensuring seamless integration with your existing systems.' />
            <ServicesCards img={logo6} title='Business Intelligence' content='Make informed business decisions with our advanced business intelligence services. We offer solutions for data visualization, reporting, and analysis to help you understand market trends and make strategic choices.' />
            <ServicesCards img={logo7} title='IT Consulting' content='Leverage expert advice to navigate complex IT challenges. Our IT consulting services provide strategic guidance, technology recommendations, and project management to help you achieve your IT objectives efficiently.' />
          </div>

          </div>
        </div>

        <div className='portfolio-services-container Mobile-portfolio'>
          <div className='portfolio-services-title'>
            <h3>OUR SERVICES</h3>
            <p>Customize a team of experts to meet your needs</p>
          </div>
          <div className='portfolio-services-cards-container'>
          <div className='portfolio-services-cards1-mobile'>
            <ServicesCards img={pic} title='Web App Development' content='We build dynamic and responsive web applications tailored to your business needs. From initial concept to final deployment, our team creates intuitive and high-performing web apps that drive engagement and deliver results.' />
            <ServicesCards img={pic} title='AI Expertise' content='Unlock the potential of artificial intelligence with our expert solutions. We offer end-to-end AI and machine learning services, from strategy and development to deployment, to help you leverage data for smarter decisions and innovative products.' />
            <ServicesCards img={pic} title='Data Analysis' content='Transform raw data into actionable insights with our comprehensive data analysis services. We use advanced analytics techniques to uncover trends, predict outcomes, and provide strategies that support your business goals.' />
            <ServicesCards img={pic} title='Product Design (UI/UX)' content='Create user-centric designs that enhance the user experience and drive satisfaction. Our UI/UX design services focus on creating aesthetically pleasing and highly functional interfaces that resonate with your target audience.' />
            <ServicesCards img={pic} title='Cyber Security' content='Protect your digital assets with our robust cyber security solutions. We provide comprehensive security assessments, threat detection, and response strategies to safeguard your business from cyber threats and vulnerabilities.' />
          </div>
          <div className='portfolio-services-cards2-mobile'>
            <ServicesCards img={pic} title='Mobile App Development' content='Reach your audience on-the-go with our mobile app development services. We design and develop intuitive and high-performing mobile apps for both iOS and Android platforms, ensuring a seamless experience for users.' />
            <ServicesCards img={pic} title='SEO' content='Improve your online visibility and attract more customers with our expert SEO services. We optimize your website to rank higher in search engine results, driving organic traffic and increasing your digital presence.' />
            <ServicesCards img={pic} title='Cloud-Based Development' content='Harness the power of the cloud for scalable and flexible solutions. Our cloud-based development services include creating cloud applications, managing infrastructure, and ensuring seamless integration with your existing systems.' />
            <ServicesCards img={pic} title='Business Intelligence' content='Make informed business decisions with our advanced business intelligence services. We offer solutions for data visualization, reporting, and analysis to help you understand market trends and make strategic choices.' />
            <ServicesCards img={pic} title='IT Consulting' content='Leverage expert advice to navigate complex IT challenges. Our IT consulting services provide strategic guidance, technology recommendations, and project management to help you achieve your IT objectives efficiently.' />
          </div>

          </div>
        </div>

        <div className='portfolio-services'>
  <div className='services-top'>
    <div className='iframe-container frame-mobile'>
      <iframe
        src='http://localhost:3000/'
        title='Website Demo'
        width={'100%'}
        height={'80%'}
      />
      <div className='portfolio-card-title-container'>
        <h1>The Unburden</h1>
        <div className='portfolio-card-title'>
          <p>Saas</p>
        </div>
      </div>
      <div className='portfolio-card-description'>
        <p>An exceptional blog application designed for seamless content creation and sharing.</p>
      </div>
    </div>
    <div className='services-bottom'>
      <PortfolioCards header={'The Marbles'} title={'Web Dev'} img={p2} body={'Empowering children in West Africa through education.'} />
      <PortfolioCards header={'Total Trailer'} title={'Saas'} img={p1} body={'A premium e-commerce website offering top-tier online shopping experience.'} />
    </div>
  </div>
  <div className='services-top'>
    <div className='iframe-container frame-mobile'>
      <iframe
        src='https://corona.totaltrailerparts.com/'
        title='Website Demo'
        width={'100%'}
        height={'80%'}
      />
      <div className='portfolio-card-title-container'>
        <h1>Corona Int'l Events</h1>
        <div className='portfolio-card-title'>
          <p>Web Dev</p>
        </div>
      </div>
      <div className='portfolio-card-description'>
        <p>Tailored solutions for bespoke weddings and general event planning.</p>
      </div>
    </div>
    <div className='services-bottom'>
      <PortfolioCards header={'Your Connerstore'} title={'Saas'} img={p4} body={'Your ultimate one-stop shop for all retail needs.'} />
      <PortfolioCards header={'Fafaeda NGO'} title={'Web Dev'} img={p3} body={'Supporting underprivileged families in West Africa through dedicated web resources.'} />
    </div>
  </div>
</div>

        <Reviews />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
