import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SecondSlide.css'
function SecondSlide() {
  return (
<div className="secondnatural">
   <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={1}>
      <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
     </Grid>
     <Grid item xl={8 } lg={8} md={8} xs={8}>
        <div className="text1">
        <p>With expertise cultivated over 20 million annotations, iMerit helps its customers extract business insights and build next-generation conversational technology through its advanced NLP solutions.</p>
       <h3>SERVICES</h3>
       </div>
     </Grid>
     <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
</Grid>


      </Grid>
    </Box>
    </div>  )
}

export default SecondSlide