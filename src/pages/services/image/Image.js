import React from 'react'
import EighthSection from './comps/EighthSection/EighthSection';
import FifthSection from './comps/FifthSection/FifthSection';
import FirstSection from './comps/FirstSection/FirstSection';
import FourthSection from './comps/FourthSection/FourthSection';
import NinethSection from './comps/NinethSection/NinethSection';
import SecondSection from './comps/SecondSection/SecondSection';
import SeventhSection from './comps/SeventhSection/SeventhSection';
import SixthSection from './comps/SixthSection/SixthSection';
import TenthSection from './comps/TenthSection/TenthSection';
import ThirdSection from './comps/ThirdSection/ThirdSection';
import './Image.css';
function Image() {
  return (
    <div className='image'>
          <div className='imageContainer'>
            <FirstSection />
            <SecondSection />
             <ThirdSection />
             <FourthSection />
             <FifthSection />
             <SixthSection />
             <SeventhSection />
             <EighthSection />
             <NinethSection />
             <TenthSection />
          </div>
      </div>
  )
}

export default Image
