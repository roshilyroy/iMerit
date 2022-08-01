import Button from '@mui/material/Button';
import React from 'react';
import classes from './Slide6.module.css';

function Slide6() {
  return (
    <div className={classes.dataslide6}>
        <div className={classes.gradient1v}></div>
        <h2>GETTING</h2>
        <h1>STARTED!</h1>
        <p>The need for speed in high-quality data annotation has never 
            been greater. iMerit combines the best of predictive and automated annotation
            technology with world-class data annotation and subject matter experts to deliver 
            the data you need to get to production, fast.</p>
            <div className={classes.sec1}>
      <Button variant="outlined" color="error" id={classes.cbuttons}>
      <div className={classes.svgbut2 }>
                    LET'S CONNECT
                    <svg id={classes.buttonsvg2}  shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <line id={classes.line3first} x1="0" y1="0" x2="30" y2="0" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#E33D3B'}}></line>
                        <line id={classes.line1first} x1="0" y1="40" x2="50" y2="-25" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#E33D3B'}}></line>
                        <line id={classes.line2first} x1="0" y1="0" x2="0" y2="40" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#E33D3B'}}></line>
                        <line id={classes.linefirst} x1="0" y1="20" x2="30" y2="20" fill="none" stroke="#E33D3B" stroke-width="0" stroke-miterlimit="10" style={{stroke: '#E33D3B'}}></line>
                    </svg>
                    </div>
                    </Button> 
            </div>

        <div className={classes.gradient1v}></div>
    </div>
  )
}

export default Slide6