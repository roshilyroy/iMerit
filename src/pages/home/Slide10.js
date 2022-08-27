import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Slide10() {
  return (<div>
    <div className='s10'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Item id='s7grid1'><span className='s7text1'>GETTING < p className='s7imertis'>STARTED!</p></span>
          <p className='data'>The need for speed in high-quality data annotation has never been greater. iMerit combines the best of predictive and automated annotation technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.</p>
          <Button variant="outlined" href="#outlined-buttons" id='btns11'>
  Learn More     
  <svg id="button-svg"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="triangle" d="M0.4 0.5 C9.9 0.5 19.39 0.5 28.9 0.5 19.39 13.5 9.9 26.5 0.4 39.5 0.4 26.5 0.4 13.5 0.4 0.5 " fill="none" stroke-width="1" data-original="M0.4,0.5h28.5l-28.5,39V0.5z"  className='svgcolor'></path><line id="line" x1="0" y1="20" x2="0" y2="20" fill="none"  stroke-width="1" stroke-miterlimit="10" className='svgcolor2'></line></svg>
<span className='hai'>hai</span></Button></Item>
        </Grid>
        
      </Grid>
    </Box>
    <div className='gradLin2'>.</div>
    </div>
    </div>
  );
}
