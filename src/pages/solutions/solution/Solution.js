import React from 'react'
import LinearDeterminate from './Components/LinearDeterminate'
import Slider from './Components/Slider'
import FifthSlide from './Pages/FifthSlide'
import Firstslide from './Pages/Firstslide'
import FourthSlide from './Pages/FourthSlide'
import SecondSlide from './Pages/SecondSlide'
import SixthSlide from './Pages/SixthSlide'
import ThirdSlide from './Pages/ThirdSlide'
import Svg from './Components/Svg'
import './Solution.css'
import Svg2 from './Components/Svg2'


function Solution() {
  return (
    <div className="solutions">
      <Firstslide/>
      <SecondSlide/>
      <ThirdSlide/>
      <FourthSlide/>
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

export default Solution