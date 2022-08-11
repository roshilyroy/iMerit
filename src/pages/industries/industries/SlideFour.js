import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './SlideFour.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function SlideFour() {
  return (<div>
    <div className='slidefour'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12} sm={12} xs={12}>
          <Item id='s9grid1'><span className='s9text1'>FEATURED < p className='s9imertis'>CONTENT</p></span>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    <div className='cardwomen'>
    <div class="uk-width-1-1@m">
<div>
                    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2021/07/Why-ML-Projects-Fail-and-How-to-Avoid-Them.jpg" alt="" uk-cover="" />
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body" id='cardbody'>
                            <p class="content-type">Post</p>
                                
                                <p className='women50'><a href="https://imerit.net/blog/top-takeaways-from-odsc-session-why-ml-projects-fail-and-how-to-avoid-them-all-pbm/">Top Takeaways from ODSC session: ‘Why ML Projects Fail and How to Avoid Them’</a></p>
                            </div>
                            <div class="uk-card-footer" id='cardreadmoretext'>
      <a class="featured-asset-cta" href="https://imerit.net/women-in-tech/" >
<p id='linkreadmore'>Read more</p>
<img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"  className='cardimagwomen'/>
</a>
    </div>
                        </div>
                    </div>
                </div>
                </div>
  </div>
  <div className='cardwomen769'>
  <div class="uk-child-width-1-2@sm" uk-grid>
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2021/07/Why-ML-Projects-Fail-and-How-to-Avoid-Them.jpg"   className='cardimagwomen769'/>
            </div>
            <div class="uk-first-column">
                            <div class="uk-card-body" id='cardbody'>
                            <p class="content-type">Post</p>
                            <p className='women50'><a href="https://imerit.net/blog/top-takeaways-from-odsc-session-why-ml-projects-fail-and-how-to-avoid-them-all-pbm/">Top Takeaways from ODSC session: ‘Why ML Projects Fail and How to Avoid Them’</a></p>
                            </div>
                            <div class="uk-card-footer" id='cardreadmoretext'>
      <a class="featured-asset-cta" href="https://imerit.net/women-in-tech/" >
<p id='linkreadmore'>Read more</p>
<img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"  className='cardimagwomen'/>
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
