import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './GeoFeatured.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function GeoFeatured() {
  return (<div>
    <div className='Geofeatured'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12} sm={12} xs={12}>
          <Item id='gegrid1'><span className='getext1'>FEATURED < p className='geimertis'>CONTENT</p></span>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    <div className='cardgeos'>
    <div class="uk-width-1-1@m">
<div>
                    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2021/09/Making-Unmanned-Data-Actionable-Through-ML-AI.jpg" alt="" uk-cover="" />
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body" id='cardbody'>
                            <p class="content-ge">WEBINAR</p>
                                
                                <p className='ge50'><a href="https://imerit.net/blog/case-studies-autonomous-vehicle-safety-avi-pdt/">Making Unmanned Data Actionable Through ML/AI</a></p>
                            </div>
                            <div class="uk-card-footer" id='cardreadmoretext2'>
      <a class="featured-asset-cta" href="https://imerit.net/women-in-tech/" >
<p id='linkreadmore2'>WATCH ON DEMAND</p>
<img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"  className='cardimagge'/>
</a>
    </div>
                        </div>
                    </div>
                </div>
                </div>
  </div>
  <div className='ge769'>
  <div class="uk-child-width-1-2@sm" uk-grid>
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2021/09/Making-Unmanned-Data-Actionable-Through-ML-AI.jpg"   className='cardge769'/>
            </div>
            <div class="uk-first-column">
                            <div class="uk-card-body" id='cardbody'>
                            <p class="content-ge">WEBINAR</p>
                            <p className='ge50'><a href="https://imerit.net/blog/case-studies-autonomous-vehicle-safety-avi-pdt/">Making Unmanned Data Actionable Through ML/AI</a></p>
                            </div>
                            <div class="uk-card-footer" id='cardreadmoretext2'>
      <a class="featured-asset-cta" href="https://imerit.net/women-in-tech/" >
<p id='linkreadmore2'>WATCH ON DEMAND</p>
<img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"  className='cardimagge'/>
</a>
    </div>
    </div>
        </div>
    </div>
    <div>
    </div>
</div>
  </div>
  </div>
  );
}
