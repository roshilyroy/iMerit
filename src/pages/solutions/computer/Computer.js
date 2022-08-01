import React from 'react'
import LinearDeterminate from '../solution/Components/LinearDeterminate'
import Slider from '../solution/Components/Slider'
import SixthSlide from '../solution/Pages/SixthSlide'
import Media from './Components/Media'
import ClipCards from './Pages/ClipCards'
import FifthSlide from './Pages/FifthSlide'
import Firstslide from './Pages/FirstSlide'
import ForthSlide from './Pages/ForthSlide'
import SeconSlide from './Pages/SeconSlide'
import ThirSlide from './Pages/ThirSlide'
import './Computer.css'
import Svg from '../solution/Components/Svg'
import Svg2 from '../solution/Components/Svg2'

function Computer() {
  return (
    <div className="computer1">
      <Firstslide/>
      <SeconSlide/>
      <Media/>
      <ClipCards/>
      <ThirSlide/>
      <ForthSlide/>
      <FifthSlide/>
      <Svg/>
      <Slider/>
      <LinearDeterminate/>
      <SixthSlide/>
      <Svg2/>
      <LinearDeterminate/>

    </div>
  )
}

export default Computer