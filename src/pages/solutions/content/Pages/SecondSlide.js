import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SecondSlide.css'

function SecondSlide() {
  return (
<div className="second2">
   <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={1}>
      <Grid item xs={2}>
     </Grid>
     <Grid item xs={8}>
        <div className="text2">
        <p>iMerit helps merchants realize compelling CX for E-Commerce and other digital platforms with organized, searchable and relevant data. The iMerit workforce validates, enriches, moderates and tags data so it best serves the offering and enhances overall shopping practices. 

</p>
       <h3>SERVICES</h3>
       </div>
     </Grid>
     <Grid item xs={2}>
</Grid>


      </Grid>
    </Box>
    </div>  )
}

export default SecondSlide