import React from 'react'
import Slider from '../solution/Components/Slider'
import Media from './Components/Media'
import Fifthslide from './Pages/Fifthslide'
import FirstSlide from './Pages/FirstSlide'
import FourthSlide from './Pages/FourthSlide'
import SecondSlide from './Pages/SecondSlide'
import SixthSlides from './Pages/SixthSlides'
import SixthSlide from '../solution/Pages/SixthSlide'
import './Natural.css'
import ThirdSlide from './Pages/ThirdSlide'
import LinearDeterminate from '../solution/Components/LinearDeterminate'
import Svg from '../solution/Components/Svg'
import Svg2 from '../solution/Components/Svg2'

function Natural() {
  return (
    <div className="natural">
      <FirstSlide/>
      <SecondSlide/>
      <Media/>
      <ThirdSlide/>
      <FourthSlide/>
      <Fifthslide/>
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

export default Natural