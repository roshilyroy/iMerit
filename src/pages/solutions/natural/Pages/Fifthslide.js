import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './FifthSlide.css'


function Fifthslide() {
  return (
    <div className="fifth">
        <Box sx={{ flexGrow: 1 }} className="firstbox1">
      <Grid container spacing={1}>
        <Grid item xl={12} lg={12} md={12}>
        <div className="heading2">
    <h2>FEAUTURED<br/>
  <strong>CONTENT</strong>
   </h2>
   </div>
        </Grid>
  <Grid item xl={1} lg={1} md={1}>
    
  </Grid>
<Grid item xl={10} lg={10} md={10}>


<div className="card1">
        <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s  uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img className="cardimage" src="https://imerit.net/wp-content/uploads/2021/09/How-to-Navigate-Data-Labeling-Solutions-for-NLP.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <div className="contents1">
                                <h3 >POST</h3>
                                <p>Four Edge Cases Solved With Out-of-the-Box Thinking</p>
                                <div className="cardlast12">
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
<Grid item xl={1} lg={1} md={1}>

</Grid>
  </Grid>
    </Box>
{/* this is the next section */}







<Box sx={{ flexGrow: 1 }} className="secondbox2">
      <Grid container spacing={1}>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="heading2">
    <h2>FEAUTURED<br/>
  <strong>CONTENT</strong>
   </h2>
   </div>
        </Grid>



     <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>

     </Grid>

<Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
<div className="cardd2">
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img className="cardimages2" src="https://imerit.net/wp-content/uploads/2021/09/How-to-Navigate-Data-Labeling-Solutions-for-NLP.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
            <div className="contents2">
                                <h3 >POST</h3>
                                <p>Four Edge Cases Solved With Out-of-the-Box Thinking</p>
                                <div className="cardlast13">
                                  <hr/>
                                <p3>READ MORE</p3>
                                <img src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg" alt=""/>
                            </div>
                            </div>
            </div>
        </div>
    </div>
      
     </Grid>
     <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
      
      </Grid>


      </Grid>
    </Box>










    </div>
  )
}

export default Fifthslide