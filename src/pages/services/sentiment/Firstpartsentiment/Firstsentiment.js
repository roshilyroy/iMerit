import { Grid } from '@mui/material'
import React from 'react'
import './Firstpartsentiment.css'
function Firstsentiment() {
  return (
    <div className="sentimentalanalysis">
    <Grid container>
        <Grid item lg={8} md={6} sm={5} xs={12}>
            <div className='headfirstdiv'><h1 className="headFirstsentiment">
            SENTIMENT ANALYSIS SERVICES
            </h1></div>
<p className='firstpara'>iMerit delivers stellar sentiment analysis services that power Artificial Intelligence, Machine Learning, and data operation strategies. Because the most effective sentiment analysis utilize deep learning and big data to achieve the best results, having accurately labeled data is vital to getting a sentiment analysis system to work.



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
        <Grid item lg={3} sm={3} md={3} xs={12}>
<img  className="firstimagesentiment"src="https://imerit.net/wp-content/uploads/2021/07/Sentiment-Analysis-hero.jpg"  style={{borderRadius:180}}alt="" />
<div className='triangle' id="triangle-upsentiment"></div>
        </Grid>

    </Grid>
</div>
  )
}

export default Firstsentiment