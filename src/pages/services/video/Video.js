import React from 'react'
import VideoEighthSection from './comps2/VideoEighthSection/VideoEighthSection'
import VideoFifthSection from './comps2/VideoFifthSection/VideoFifthSection'
import VideoFirstSection from './comps2/VideoFirstSection/VideoFirstSection'
import VideoFourthSection from './comps2/VideoFourthSection/VideoFourthSection'
import VideoNinethSection from './comps2/VideoNinethSection/VideoNinethSection'
import VideoSecondSection from './comps2/VideoSecondSection/VideoSecondSection'
import VideoSeventhSection from './comps2/VideoSeventhSection/VideoSeventhSection'
import VideoSixthSection from './comps2/VideoSixthSection/VideoSixthSection'
import VideoThirdSection from './comps2/VideoThirdSection/VideoThirdSection'
import './Video.css'
function Video() {
  return (
    <div className='video'>
      <div className='videoContainer'>
        <VideoFirstSection />
        <VideoSecondSection />
        <VideoThirdSection />
        <VideoFourthSection />
        <VideoFifthSection />
        <VideoSixthSection />
        <VideoSeventhSection />
        <VideoEighthSection />
        <VideoNinethSection />
      </div>
    </div>
  )
}

export default Video