import { Grid } from '@mui/material'
import React from 'react'
import './Four.css'
function Four() {
  return (
    <div className='fourthpart'>
    
    <div className='fourthcontiner'>
        < h1 className='fourhead'>DATA ANNOTATION IN NUMBERS</h1>
        <Grid container>
            <Grid item xs={12} md={1} lg={1} sm={1.5}></Grid>
            <Grid item xs={12} lg={3} md={3} sm={3}>
                <h1 className='fourtext'>250Mn</h1>
                <div class="gradient-line"></div>
                <span className='fourtext1'>DATA POINTS</span>
            </Grid>
            <Grid item xs={12} md={.5} sm={.5} lg={.5}></Grid>
            <Grid item xs={12} lg={3} md={3} sm={3}>
                <h1 className='fourtextda'>5,500</h1>
                <div class="gradient-line"></div>
                <span className='fourtext1'>DATA EXPERTS</span> 
            </Grid>
            <Grid item  xs={12} md={.5} sm={.5} lg={.5}></Grid>
            <Grid item xs={12} lg={3} md={3} sm={3}>
            <h1 className='fourtextdat'>95%</h1>
            <div class="gradient-line"></div>
            <span className='fourtext1'>ACCURACY</span> 
            </Grid>
          
            <Grid item xs={12} md={1} lg={1} sm={1.5}></Grid>

        </Grid>
        
    </div>
    </div>
  )
}

export default Four