import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ThirdSlide.css'

function ThirdSlide() {
  return (
    <div className="section3">


<Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={1}>
        
          <Grid item xs={12}>
            <div className="sec3">
            <div className="triangle3"></div>
                <div className="quote3">
                <h1>
            <b>"I appreciate the love iMerit brought to the work and will be delighted to collaborate further on data challenges."</b>
            <h3>Chief Digital Officer, Leading cultural institution</h3>
          </h1>
          <img src='https://imerit.net/wp-content/uploads/2020/05/Cultural-Institution.jpg' alt=''/>

                </div>
                </div>
         </Grid>

        </Grid>
    </Box>
  

    </div>
  )
}

export default ThirdSlide