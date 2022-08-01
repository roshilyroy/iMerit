//import { Slide } from '@mui/material';
import React from 'react'
import './Datastudio.css'
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
//import Slide4 from './Slide4';
import Cardgrid from './Cardgrid';
import Slide5 from './Slide5';
import Slide6 from './Slide6';
//import Slide7 from './Slide7';


function Datastudio() {
  return (
    
    <div>
      <Slide1/> 
      <Slide2/>
      <Slide3/>
    
      <Cardgrid/>
      <Slide5/>
      <Slide6/>
    
     
    </div>
  )
}

export default Datastudio