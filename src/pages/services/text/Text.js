import React from 'react'
import TextEighthSection from './comps3/TextEighthSection/TextEighthSection'
import TextFifthSection from './comps3/TextFifthSection/TextFifthSection'
import TextFirstSection from './comps3/TextFirstSection/TextFirstSection'
import TextFourthSection from './comps3/TextFourthSection/TextFourthSection'
import TextNinethSection from './comps3/TextNinethSection/TextNinethSection'
import TextSecondSection from './comps3/TextSecondSection/TextSecondSection'
import TextSeventhSection from './comps3/TextSeventhSection/TextSeventhSection'
import TextSixthSection from './comps3/TextSixthSection/TextSixthSection'
import TextThirdSection from './comps3/TextThirdSection/TextThirdSection'
import './Text.css'
function Text() {
  return (
    <div className='text'>
      <div className='textContainer'>
          <TextFirstSection />
          <TextSecondSection />
          <TextThirdSection />
          <TextFourthSection />
          <TextFifthSection />
          <TextSixthSection />
          <TextSeventhSection />
          <TextEighthSection />
          <TextNinethSection />
      </div>
    </div>
  )
}

export default Text