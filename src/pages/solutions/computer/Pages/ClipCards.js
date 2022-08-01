import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './CardClip.css'

function ClipCards() {
  return (
    <div className="section7">


<Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={1}>
        
          <Grid item xs={12}>
            <div className="sec5">
            <div className="triangle7"></div>
                <div className="quote7">
                <h1>
            <b>"iMerit's data annotation enables us to build accurate models and actionable insights for hundreds of MLB pitchers"</b>
            <h3><p>STEVEN CADAVID PRESIDENT,KINATRAX </p></h3>
          </h1>
          <img src='https://imerit.net/wp-content/uploads/2020/05/Baseball.jpg' alt=''/>

                </div>
                </div>
         </Grid>

        </Grid>
    </Box>
  

    </div>
  )
}

export default ClipCards