import React, { useEffect } from 'react'
 import './AudioNinethSection.css'
 import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
 function AudioNinethSection() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    },[])
   return (
    <div className='seventhContainer'>
    <div className='container'>
      <div className='row'>
          <h1 className='seventhHeadAudio'>AUDIO TRANSCRIPTION IN NUMBERS</h1>
      </div>
      <div className='row'>
          <div className='sec11Audio'>
              <div className='col-md-6 col-12'>
                  <h1 data-aos='fade-up' className='sec11Audiohead1' data-aos-duration='2000'> 
                      <CountUp start={80000} end={90000}  duration={.7}  />
                   </h1>
                  <div className='gradientline1'>.</div>
                      <p data-aos='fade-up' className='sec11Audiopara1'data-aos-delay='200'>AUDIO CLIPS TRANSCRIBED</p>
              </div>
              <div className='col-md-6 col-12'>
                  <h1   className='sec11Audiohead2'>
                      <CountUp start={60} end={90} duration={.6} suffix='%+'   />
                  </h1>
                  <div className='gradientline2'>.</div>
                      <p data-aos='fade-up' data-aos-delay='600' className='sec11Audiopara2'>ACCURACY</p>
              </div>
          </div>
      </div>
    </div>
  </div>
   )
 }
 
 export default AudioNinethSection
 
 
 
