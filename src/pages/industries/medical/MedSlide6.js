import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './MedSlide6.css';

function MedSlide6() {
  return (
    <div>
      <h3 className='fe4'>FEATURED</h3>
      <h1 className='co4'>CONTENT</h1>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
            <div className="card-post">
        <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s  uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2021/03/DATA-ANNOTATION-FOR-TOP-AI.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1350"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <div className="contents">
                                <h3 >POST</h3>
                                <br/><br/><br/><br/>
                                <h2 className='post-para'><a href="">Top Takeaways from ODSC session: ‘Why ML Projects Fail and How to Avoid Them’</a></h2>
                                <div className="cardlast">
                                  <hr/>
                                <h3>READ MORE</h3>
                                <img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg" alt=""/>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
        </Grid>
      <Grid item xs={1}>
      </Grid>
      </Grid>
    </Box>
    </div>
  )
}
export default MedSlide6
