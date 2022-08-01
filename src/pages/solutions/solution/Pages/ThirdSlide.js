import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ThirdSlide.css'

function ThirdSlide() {
  return (
    <div className="section">


<Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={1}>
        
          <Grid item xs={12}>
            <div className="sec">
            <div className="triangle"></div>
                <div className="quote">
                <h1>
            <b>"iMerit consistently delivers high-quality work quickly, and enables us to meet enrichment goals ahead of schedule."</b>
            <h3>ANNA BERCIL,PROGRAM MANAGER,AUTODESK</h3>
          </h1>
          <img src='https://imerit.net/wp-content/uploads/2020/03/quote.jpg' alt=''/>

                </div>
                </div>
         </Grid>

        </Grid>
    </Box>
  

    </div>
  )
}

export default ThirdSlide