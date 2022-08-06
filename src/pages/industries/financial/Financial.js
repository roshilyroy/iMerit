import React from 'react'
import FirstCard from './components/firstcard/FirstCard'
import FirstGrid from './components/firstgrid/FirstGrid'
import FourthCard from './components/fourthcard/FourthCard'
import ImageTitle from './components/imagetitle/ImageTitle'
import ColumnsGrid1 from './components/counter/ColumnsGrid1'
import OnlyTitle from './components/onlytitle/OnlyTitle'
import SecondCard from './components/secondcard/SecondCard'
import ThirdCard from './components/third card/ThirdCard'
import SlideShow from './components/slideshow/SlideShow'

function Financial() {
  return (
    <div>
      <FirstGrid/>
      <FirstCard/>
      <ImageTitle/>
      <SecondCard/>
      <ColumnsGrid1/>
      <ThirdCard/>
      <FourthCard/>
      <SlideShow/>
      <OnlyTitle/>
    </div>
  )
}

export default Financial