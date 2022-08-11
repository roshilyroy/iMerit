import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './AutoFeatured.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function AutoFeatured() {
  return (<div>
    <div className='autofeatured'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12} sm={12} xs={12}>
          <Item id='augrid1'><span className='autext1'>FEATURED < p className='auimertis'>CONTENT</p></span>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    <div className='cardauto'>
    <div class="uk-width-1-1@m">
<div>
                    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2021/06/self-driving-vehicle-safe-and-ethically-trained.jpg" alt="" uk-cover="" />
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body" id='cardbody'>
                            <p class="content-au">Post</p>
                                
                                <p className='au50'><a href="https://imerit.net/blog/case-studies-autonomous-vehicle-safety-avi-pdt/">Case Study: Is your self-driving vehicle safe and ethically trained?</a></p>
                            </div>
                            <div class="uk-card-footer" id='cardreadmoretext1'>
      <a class="featured-asset-cta" href="https://imerit.net/women-in-tech/" >
<p id='linkreadmore1'>Read more</p>
<img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"  className='cardimagau'/>
</a>
    </div>
                        </div>
                    </div>
                </div>
                </div>
  </div>
  <div className='au769'>
  <div class="uk-child-width-1-2@sm" uk-grid>
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2021/06/self-driving-vehicle-safe-and-ethically-trained.jpg"   className='cardau769'/>
            </div>
            <div class="uk-first-column">
                            <div class="uk-card-body" id='cardbody'>
                            <p class="content-au">Post</p>
                            <p className='au50'><a href="https://imerit.net/blog/case-studies-autonomous-vehicle-safety-avi-pdt/">Case Study: Is your self-driving vehicle safe and ethically trained?</a></p>
                            </div>
                            <div class="uk-card-footer" id='cardreadmoretext1'>
      <a class="featured-asset-cta" href="https://imerit.net/women-in-tech/" >
<p id='linkreadmore1'>Read more</p>
<img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"  className='cardimagau'/>
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
