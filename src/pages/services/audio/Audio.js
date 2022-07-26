import React from 'react'
import './Audio.css'
import AudioEighthSection from './comps4/AudioEighthSection/AudioEighthSection'
import AudioEleventhSection from './comps4/AudioEleventhSection/AudioEleventhSection'
import AudioFifthSection from './comps4/AudioFifthSection/AudioFifthSection'
import AudioFirstSection from './comps4/AudioFirstSection/AudioFirstSection'
import AudioFourthSection from './comps4/AudioFourthSection/AudioFourthSection'
import AudioNinethSection from './comps4/AudioNinethSection/AudioNinethSection'
import AudioSecondSection from './comps4/AudioSecondSection/AudioSecondSection'
import AudioSeventhSection from './comps4/AudioSeventhSection/AudioSeventhSection'
import AudioSixthSection from './comps4/AudioSixthSection/AudioSixthSection'
import AudioTenthSection from './comps4/AudioTenthSection/AudioTenthSection'
import AudioThirdSection from './comps4/AudioThirdSection/AudioThirdSection'
function Audio() {
  return (
    <div className='audio'>
        <div className='audioContainer'>
          <AudioFirstSection />
          <AudioSecondSection />
          <AudioThirdSection />
          <AudioFourthSection />
          <AudioFifthSection />
          <AudioSixthSection />
          <AudioSeventhSection />
          <AudioEighthSection />
          <AudioNinethSection />
          <AudioTenthSection />
          <AudioEleventhSection />
        </div>
    </div>
  )
}

export default Audio