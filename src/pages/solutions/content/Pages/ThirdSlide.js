import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ThirdSlide.css'

function ThirdSlide() {
  return (
    <div className="third5">

<Box sx={{ flexGrow: 1 }} className="cardsection8">
      <Grid container spacing={4}>
     <Grid item xl={12} lg={12} md={12}>
        <div className="heading8">
     <h2>INDUSTRIES</h2>
     </div>
</Grid>
      <Grid item xl={1} lg={1} md={1}>

</Grid>
<Grid item xl={5} lg={5} md={5}>
    <div className="left5">
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src="https://imerit.net/wp-content/uploads/2020/06/Categorization@1x-1.jpg" alt="" uk-cover="" sx={{height: '284px', width: '425px'}}/>
                    <canvas width="1800" height="1200"></canvas>
                </div>
                <div class="uk-first-column">
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">RETAIL</h3>
            <p>iMerit data annotation services help merchants realize compelling CX for E-Commerce and other digital platforms with organized, searchable and relevant data. </p>
                    <div className="para5">
                    <p1>LEARN MORE</p1>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    </Grid>
                   


    <Grid item xl={5} lg={5} md={5}>
                <div className="right5">
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2020/06/Data-Extraction@1x.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">FINANCE&<br/>INSURANCE</h3>
                                <p>Unlock the intelligence contained in visual and text datasets to implement Machine Learning and Robotic Process automation for increased efficiency. </p>
                                <div className="para5">
                    <p1>LEARN MORE</p1>
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

    <Box sx={{ flexGrow: 1 }} className="cardsection9">
      <Grid container spacing={4} columnSpacing={{sm:4, xs:0}}>
     <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
     <div className="heading9">
     <h2>INDUSTRIES</h2>
     </div>
</Grid>
<Grid item sm={1}>
    </Grid>
<Grid item sm={5} xs={12}>
<div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2020/06/Categorization@1x-1.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">FINANCE&<br/>RETAIL</h3>
                <p>iMerit data annotation services help merchants realize compelling CX for E-Commerce and other digital platforms with organized, searchable and relevant data. </p>
                <div className="learn9">
            <p1>LEARN MORE</p1>
          </div>
            </div>
        </div>
    
</Grid>
<Grid item sm={5} xs={12}>
<div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2020/06/Data-Extraction@1x.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">FINANCE&<br/>INSURANCE</h3>
                <p>Unlock the intelligence contained in visual and text datasets to implement Machine Learning and Robotic Process automation for increased efficiency.</p>
                <div className="learn9">
            <p1>LEARN MORE</p1>
          </div>
            </div>
        </div>
</Grid>



<Grid item sm={1}></Grid>


</Grid>
</Box>

    </div>
  )
}

export default ThirdSlide