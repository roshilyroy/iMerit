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

export default function Slide6() {
  return (<div>
  <div className='s6'>
    <p className='s6services'>
    iMERIT SERVICES
    </p>
    <Box   sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
 
        <Grid item  md={4} sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6'>
    <p class="uk-card-titles6">IMAGE ANNOTATION</p>
    <p className='s6cardtext1'> Marking and labeling images to help computer vision models interpret visual data effectively.</p>
</div></Item>
        </Grid>
        <Grid item  md={4} sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6'>
    <p class="uk-card-titles6">VIDEO ANNOTATION</p>
    <p className='s6cardtext1'> Extracting intelligence from videos by annotating objects in each frame and helping models identify them.</p>
</div></Item>
        </Grid>
        <Grid item  md={4} sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6'>
    <p class="uk-card-titles6">TEXT ANNOTATION</p>
    <p className='s6cardtext1'> Identifying, classifying, and linking relevant text strings to help ML models interpret text data.</p>
</div></Item>
        </Grid>
        
        <Grid item  md={4} sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6'>
    <p class="uk-card-titles6">AUDIO TRANSCRIPTION</p>
    <p className='s6cardtext1'> Transforming speech from audio files like interview recordings or court proceedings into text.</p>
</div></Item>
        </Grid>
        <Grid item  md={4} sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6'>
    <p class="uk-card-titles6">SENTIMENT ANALYSIS</p>
    <p className='s6cardtext1'> Classifying sentiment in material containing text and images, as positive, negative, or neutral.</p>
</div></Item>
        </Grid>
        <Grid item  md={4}sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6'>
    <p class="uk-card-titles6">LIDAR ANNOTATION</p>
    <p className='s6cardtext1'> Labeling images and videos in 360° visibility captured by multi-sensor cameras, using high-precision tools.</p>
</div></Item>
        </Grid>
        
        <Grid item  md={4}sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6'>
    <p class="uk-card-titles6">AUDIO TRANSCRIPTION</p>
    <p className='s6cardtext1'> Transforming speech from audio files like interview recordings or court proceedings into text.</p>
</div></Item>
        </Grid>
        <Grid item  md={4} sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6'>
    <p class="uk-card-titles6">SENTIMENT ANALYSIS</p>
    <p className='s6cardtext1'> Classifying sentiment in material containing text and images, as positive, negative, or neutral.</p>
</div></Item>
        </Grid>
        <Grid item  md={4} sm={6}>
          <Item id='s6box1'><div class="uk-card uk-card-default uk-card-body uk-width-1-1@m" id='mergecards6769'>
    <p class="uk-card-titles6">LIDAR ANNOTATION</p>
    <p className='s6cardtext1'> Labeling images and videos in 360° visibility captured by multi-sensor cameras, using high-precision tools.</p>
</div></Item>
        </Grid>
        
      </Grid>
    </Box>
    </div>
    <div className='s6gradi'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><div class="gradient-line-gy"></div>
          <p className='kick'>KICKSTART YOUR DATA PROJECT</p>
         
          <Button variant="outlined" href="#outlined-buttons" id='btns6'>
  get a free Quote  <svg id="button-svg"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="triangle" d="M0.4 0.5 C9.9 0.5 19.39 0.5 28.9 0.5 19.39 13.5 9.9 26.5 0.4 39.5 0.4 26.5 0.4 13.5 0.4 0.5 " fill="none" stroke-width="1" data-original="M0.4,0.5h28.5l-28.5,39V0.5z"  className='svgcolor'></path><line id="line" x1="0" y1="20" x2="0" y2="20" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" className='svgcolor'></line></svg>
<span className='hai'>hai</span></Button>
<p className='s6secur'>Securely Upload Your Sample Data Set</p></Item>
        </Grid>
      
      </Grid>
    </Box>
    </div>

    
    </div>
  );
}

