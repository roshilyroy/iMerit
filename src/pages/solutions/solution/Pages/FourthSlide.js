import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FourthSlide.css';
function FourthSlide() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} className="firstbox">
      <Grid container spacing={1}>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={10}>
            <div className="card">
        <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s  uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2021/08/Edge-Cases-Were-Capable-of-Solving-For.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <div className="contents">
                                <h3 >POST</h3>
                                <p>Four Edge Cases Solved With Out-of-the-Box Thinking</p>
                                <div className="cardlast1">
                                  <hr/>
                                <p3>READ MORE</p3>
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

{/* This is the next section */}


<Box sx={{ flexGrow: 1 }} className="secondbox">
      <Grid container spacing={1}>

     <Grid item xs={1}>

     </Grid>

<Grid item xs={10}>
<div className="cardd">
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2021/08/Edge-Cases-Were-Capable-of-Solving-For.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
            <div className="contents">
                                <h3 >POST</h3>
                                <p>Four Edge Cases Solved With Out-of-the-Box Thinking</p>
                                <div className="cardlast1">
                                  <hr/>
                                <p3>READ MORE</p3>
                                <img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg" alt=""/>
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

export default FourthSlide