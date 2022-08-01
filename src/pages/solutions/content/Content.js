import React from 'react'
import Slider from '../solution/Components/Slider'
import Media from './Components/Media'
import FifthSlide from './Pages/FifthSlide'
import FirstSlide from './Pages/FirstSlide'
import SecondSlide from './Pages/SecondSlide'
import SixthSlides from './Pages/SixthSlides'
import ThirdSlide from './Pages/ThirdSlide'
import SixthSlide from '../solution/Pages/SixthSlide'
import './Content.css'
import ClipCard from './Pages/ClipCard'
import LinearDeterminate from '../solution/Components/LinearDeterminate'
import Svg from '../solution/Components/Svg'
import Svg2 from '../solution/Components/Svg2'

function Content() {
  return (
    <div className="contents7">
      <FirstSlide/>
      <SecondSlide/>
      <Media/>
      <ClipCard/>
      <ThirdSlide/>
      <FifthSlide/>
      <SixthSlides/>
      <Svg/>
       <Slider/>
       <LinearDeterminate/>
      <SixthSlide/>
      <Svg2/>
      <LinearDeterminate/>

    </div>
  )
}

export default Content