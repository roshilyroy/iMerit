import React from 'react'
import ColumnsGrid1 from './components/counter/ColumnsGrid1'
import FirstCard from './components/firstcard/FirstCard'
import FirstGrid from './components/firstgrid/FirstGrid'
import FourthCard from './components/fourthcard/FourthCard'
import ImageTitle from './components/imagetitle/ImageTitle'
import OnlyTitle from './components/onlytitle/OnlyTitle'
import SecondCard from './components/secondcard/SecondCard'
import ThirdCard from './components/thirdcard/ThirdCard'
function Agricultural() {
  return (
    <div>
      <FirstGrid/>
      <FirstCard/>
      <ImageTitle/>
      <SecondCard/>
      <ColumnsGrid1/>
      <ThirdCard/>
      <FourthCard/>
      <OnlyTitle/>
    </div>
  )
}

export default Agricultural