import React, { useEffect } from 'react'
import './SeventhSection.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

function SeventhSection() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    },[])
  return (
    <div className='seventhContainer'>
      <div className='container'>
        <div className='row'>
            <h1 className='seventhHead'>IMAGE ANNOTATION IN NUMBERS</h1>
        </div>
        <div className='row'>
            <div className='sec11'>
                <div className='col-md-6 col-12'>
                    <h1 data-aos='fade-up' className='sec11head1' data-aos-duration='2000'> 
                        <CountUp start={1} end={2}  duration={.7}  />
                    Million</h1>
                    <div className='gradientline1'>.</div>
                        <p data-aos='fade-up' className='sec11para1'data-aos-delay='200'>IMAGES ANNOTATED</p>
                </div>
                <div className='col-md-6 col-12'>
                    <h1   className='sec11head2'>
                        <CountUp start={60} end={95} duration={.6} suffix='%'   />
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

export default SeventhSection
