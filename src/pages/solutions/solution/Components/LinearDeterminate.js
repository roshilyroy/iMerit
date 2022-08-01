import React from 'react'
import './LinearDeterminate.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function LinearDeterminate() {
  



  return (
    <div>
   <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={1}>
      <Grid item xs={1}>
</Grid>
<Grid item xs={10}>
<div className="gradiant">.</div>
</Grid>
<Grid item xs={1}>
</Grid>
</Grid>
    </Box>
    </div>
  )
}

export default LinearDeterminate