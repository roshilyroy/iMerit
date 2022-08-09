import { Grid } from '@mui/material'
import React from 'react'
import './Firstpart1.css'

function Firstpart1() {
  return (
    <div className='lidaranalysis'>
    <Grid container>
        <Grid item lg={8} md={6} sm={5} xs={12}>
            <div className='headfirstdiv1'><h1 className="headFirst1">
            LIDAR ANNOTATION SERVICES
            </h1></div>
<p className='firstpara1'>iMerit delivers Lidar annotation services that power AI, Machine Learning, and data operation strategies.

</p>

<button className='svgbut1 '>
                <a href='#' className='btn'>LET'S CONNECT</a>
                <svg id="button-svg1"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                    <line id="line3first" x1="0" y1="0" x2="30" y2="0" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                    <line id="line1first" x1="0" y1="40" x2="50" y2="-25" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                    <line id="line2first" x1="0" y1="0" x2="0" y2="40" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                    <line id="linefirst" x1="0" y1="20" x2="30" y2="20" fill="none" stroke="#531cb3" stroke-width="0" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                </svg>
</button>


        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
<img  className="firstimage1"src="https://imerit.net/wp-content/uploads/2021/07/Lidar-Segmentation@1x-1.jpg"  style={{borderRadius:180}}alt="" />
<div className='triangle1' id="triangle-up1"></div>
        </Grid>

    </Grid>
</div>
)
 
}

export default Firstpart1