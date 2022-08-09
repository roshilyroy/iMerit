import React from 'react'
import Card2lidar from './Card2lidar/Card2lidar'
import Cardlidar from './Cardlidar/Cardlidar'
import Cardlidar2 from './Cardlidar/Cardlidar2'
import Firstpart1 from './Firstpart1/Firstpart1'
import Fourlidar from './Fourlidar/Fourlidar'
import Process1 from './Process1/Process1'
import Secondpart1 from './Second1/Secondpart1'
import Thirdlidar from './Thirdlidar/Thirdlidar'

function Lidar() {
  return (
    <div><Firstpart1/>
    <Secondpart1/>
    <Cardlidar2/>
    <Process1/>
    <Cardlidar/>
    <Thirdlidar/>
    <Fourlidar/>
    <Card2lidar/></div>

  )
}

export default Lidar