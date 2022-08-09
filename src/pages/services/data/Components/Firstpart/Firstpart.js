import { Grid } from '@mui/material'
import React from 'react'
import './Firstpart.css'
function Firstpart() {
  return (
    <div className='dataanalysis'>
        <Grid container>
            <Grid item lg={8} md={6} sm={5} xs={12}>
                <div className='headfirstdiv'><h1 className="headFirst">
                DATA  ANNOTATION
                SERVICES
                </h1></div>
<p className='firstpara firstdatapara'>Looking to deploy artificial intelligence and machine learning? iMerit helps top companies across multiple industries annotate their data and achieve their AI goals.

</p>

<button className='svgbut2 '>
                    <a href='#' className='btn'>LET'S CONNECT</a>
                    <svg id="button-svg2"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <line id="line3first" x1="0" y1="0" x2="30" y2="0" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                        <line id="line1first" x1="0" y1="40" x2="50" y2="-25" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                        <line id="line2first" x1="0" y1="0" x2="0" y2="40" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                        <line id="linefirst" x1="0" y1="20" x2="30" y2="20" fill="none" stroke="#531cb3" stroke-width="0" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                    </svg>
</button>


            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={12}>
<img  className="firstimage"src="https://imerit.net/wp-content/uploads/2021/05/data-annotation-hero.jpg" alt="" />
<div className='triangle' id="triangle-up"></div>
            </Grid>

        </Grid>
    </div>
  )
}

export default Firstpart