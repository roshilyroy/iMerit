import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  './Svg.css'
import { Button } from '@mui/material';

function Svg() {
  return (
    <div>
         <Box sx={{ flexGrow: 1}} className="animatiom">
      <Grid container spacing={1}>
     <Grid item xl={4} lg={4} md={4} sm={4} xs={4}></Grid>
   <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
<div className="sec1">
      <Button variant="outlined" color="error" id="cbuttons">
      <div className="svgbut2">
                    VIEW MORE
                    <svg id="buttonsvg2"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <line id="line3first" x1="0" y1="0" x2="30" y2="0" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#E33D3B'}}></line>
                        <line id="line1first" x1="0" y1="40" x2="50" y2="-25" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#E33D3B'}}></line>
                        <line id="line2first" x1="0" y1="0" x2="0" y2="40" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#E33D3B'}}></line>
                        <line id="linefirst" x1="0" y1="20" x2="30" y2="20" fill="none" stroke="#E33D3B" stroke-width="0" stroke-miterlimit="10" style={{stroke: '#E33D3B'}}></line>
                    </svg>
                    </div>
                    </Button>
            </div>
 
</Grid>
<Grid item xl={4} lg={4} md={4} sm={4} xs={4}>

</Grid>
 </Grid>
    </Box>
    </div>
  )
}

export default Svg