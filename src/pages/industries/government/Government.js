import React from 'react'
import FirstCard from './components/firstcard/FirstCard'
import FirstGrid from './components/firstgrid/FirstGrid'
import FourthCard from './components/fourhcard/FourthCard'
import ImageTitle from './components/imagetitle/ImageTitle'
import OnlyTitle from './components/onlytitle/OnlyTitle'
import SecondCard from './components/secondcard/SecondCard'
import SlideShow from './components/slideshow/SlideShow'
import ThirdCard from './components/thirdcard/ThirdCard'

function Government() {
  return (
    <div>
      <FirstGrid/>
      <SecondCard/>
      <ImageTitle/>
      <FirstCard/>
      <ThirdCard/>
      <FourthCard/>
      <SlideShow/>
      <OnlyTitle/>
    </div>
  )
}

export default Government