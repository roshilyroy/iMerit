import React, { useEffect } from 'react'
import './TextSeventhSection.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
function TextSeventhSection() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    },[])
  return (
    <div className='seventhContainer'>
    <div className='container'>
      <div className='row'>
          <h1 className='seventhHead'>TEXT ANNOTATION IN NUMBERS</h1>
      </div>
      <div className='row'>
          <div className='sec11'>
              <div className='col-md-6 col-12'>
                  <h1 data-aos='fade-up' className='sec11head1Text' data-aos-duration='2000'> 
                      <CountUp start={13} end={20}  duration={.6}  />
                  Mn</h1>
                  <div className='gradientline1'>.</div>
                      <p data-aos='fade-up' className='sec11para1'data-aos-delay='200'>TEXT DATA POINTS ANNOTATED</p>
              </div>
              <div className='col-md-6 col-12'>
                  <h1   className='sec11head2'>
                      <CountUp start={60} end={97} duration={.6} suffix='%'   />
                  </h1>
                  <div className='gradientline2'>.</div>
                      <p data-aos='fade-up' data-aos-delay='600' className='sec11para2'>ACCURACY</p>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default TextSeventhSection
