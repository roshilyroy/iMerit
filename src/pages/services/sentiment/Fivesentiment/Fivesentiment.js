import { Grid } from '@mui/material'
import React from 'react'
import'./fivesenti.css'

function Fivesentiment() {
  return (
    <div className='grad'><Grid container>
    <Grid item xs={1} ></Grid>
    <Grid item xs={10}><div className="gradient-line-purple" ></div></Grid>
    
    <Grid item xs={1}></Grid></Grid>
    <div>
    <Grid container>
    <Grid item xs={1}></Grid>
    <Grid item xs={10}>
        <h1 className='Sixheadsent'>GETTING STARTED WITH SENTIMENT ANALYSIS</h1>
        <p className='sixtxt'>The need for speed in high-quality sentiment analysis has never been greater. iMerit combines the best predictive and automated transcription technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.

</p>
        <button className='svgbut4 '>
                <a href='#' className='btnlidar'>TALK TO AN EXPERT</a>
                <svg id="button-svg4"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                    <line id="line3first" x1="0" y1="0" x2="30" y2="0" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#e33d3b'}}></line>
                    <line id="line1first" x1="0" y1="40" x2="50" y2="-25" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#e33d3b'}}></line>
                    <line id="line2first" x1="0" y1="0" x2="0" y2="40" fill="none" stroke="#531cb3" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#e33d3b'}}></line>
                    <line id="linefirst" x1="0" y1="20" x2="30" y2="20" fill="none" stroke="#531cb3" stroke-width="0" stroke-miterlimit="10" style={{stroke: '#e33d3b'}}></line>
                </svg>
</button>
    </Grid>
    
    <Grid item xs={1}></Grid></Grid> </div>
    <Grid container>
    <Grid item xs={1}></Grid>
    <Grid item xs={10}><div className="gradient-line-purple bottom" ></div></Grid>
    
    <Grid item xs={1}></Grid></Grid></div>
  )
}

export default Fivesentiment