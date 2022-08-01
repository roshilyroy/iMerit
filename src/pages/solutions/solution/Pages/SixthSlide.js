import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SixthSlide.css'

function SixthSlide() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
      <Grid item xs={1}>
     </Grid>
     <Grid item xs={10}>
        <div className="text">
    <h2>GETTING <br/>
    <strong>STARTED ! </strong></h2>
 <p>The need for speed in high-quality data annotation has never been greater. iMerit combines the best of predictive and automated annotation technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.
</p>     
    </div>
        </Grid>


        <Grid item xs={1}>
        </Grid>

     </Grid>
    </Box>

    </div>
  )
}

export default SixthSlide