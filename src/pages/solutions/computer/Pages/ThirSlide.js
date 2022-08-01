import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ThirSlide.css'


function ThirSlide() {
  return (
    <div className="thirdscomp">
   <Box sx={{ flexGrow: 1 }} className="cardsection0">
      <Grid container spacing={4} >
     <Grid item xs={12}>
        <div className="heading0">
     <h2>INDUSTRIES</h2>
     </div>
</Grid>
      <Grid item xs={1}>

</Grid>
<Grid item xs={5}>
    <div className="left0">
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src="https://imerit.net/wp-content/uploads/2020/06/Multi-sensor-Fusion@1x.jpg" alt="" uk-cover="" sx={{height: '284px', width: '425px'}}/>
                    <canvas width="1800" height="1200"></canvas>
                </div>
                <div class="uk-first-column">
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">AUTONOMOUS VEHICLES</h3>
            <p>Engage with iMerit’s advanced workforce and learn more about its end-to-end data for 2D and 3D data annotation solution for the autonomous vehicle domain.</p>
                    <div className="para0">
                    <p1>LEARN MORE</p1>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    </Grid>
                   


    <Grid item xs={5}>
                <div className="right0">
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2020/06/Medical-AI@1x.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">MEDICAL AI</h3>
                                <p>iMerit’s specialized enrichment teams are trained twice, first on the company's tools and technology and second within the domain itself. This knowledge base enables quality work with nuanced use cases.</p>
                                <div className="para0">
                    <p1>LEARN MORE</p1>
                    </div>

                            </div>
                        </div>
                    </div>
                    </div>
            </Grid>
            <Grid item xs={1}>
                
            </Grid>


<Grid item xs={1}>

</Grid>

<Grid item xs={5}>

<div className="left0">
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src="https://imerit.net/wp-content/uploads/2020/06/Geospatial@1x.jpg" alt="" uk-cover="" sx={{height: '284px', width: '425px'}}/>
                    <canvas width="1800" height="1200"></canvas>
                </div>
                <div class="uk-first-column">
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">GEOSPATIAL INTELLIGENCE</h3>
            <p>Leverage the intelligence contained in aerial, drone, and satellite imagery with iMerit’s precise and highly-detailed data enrichment solution.</p>
                    
            <div className="para0">
                    <p1>LEARN MORE</p1>
                    </div>
                                        </div>
                </div>
            </div>
            </div>
    
</Grid>

<Grid item xs={5}>

<div className="right0">
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2020/06/Keypoint-Annotation@1x-1.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">GOVERNMENT</h3>
                                <p>iMerit’s secure and monitored facilities offer a reliable and efficient solution for sensitive data that requires processing for the public sector at the federal, state and local level.</p>
                                <div className="para0">
                    <p1>LEARN MORE</p1>
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

<Box sx={{ flexGrow: 1 }} className="cardsection01">
      <Grid container spacing={4} columnSpacing={{ xs:0,sm:4}}>
     <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
     <div className="heading01">
     <h2>INDUSTRIES</h2>
     </div>
</Grid>
<Grid item sm={1}>
    </Grid>
<Grid item sm={5} xs={12}>
<div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2020/06/Multi-sensor-Fusion@1x.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">AUTONOMOUS<br/> VEHICLES</h3>
                <p>Engage with iMerit’s advanced workforce and learn more about its end-to-end data for 2D and 3D data annotation solution for the autonomous vehicle domain.</p>
                <div className="learn01">
            <p1>LEARN MORE</p1>
          </div>
            </div>
        </div>
    
</Grid>
<Grid item sm={5} xs={12}>
<div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2020/06/Medical-AI@1x.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">MEDICAL AI</h3>
                <p>iMerit’s specialized enrichment teams are trained twice, first on the company's tools and technology and second within the domain itself. This knowledge base enables quality work with nuanced use cases.</p>
                <div className="learn01">
            <p1>LEARN MORE</p1>
          </div>
            </div>
        </div>
</Grid>



<Grid item sm={1}></Grid>
<Grid item sm={1}>
    </Grid>
<Grid item sm={5} xs={12}>
<div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2020/06/Geospatial@1x.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">GEOSPATIAL INTELLIGENCE</h3>
                <p>Leverage the intelligence contained in aerial, drone, and satellite imagery with iMerit’s precise and highly-detailed data enrichment solution.</p>
                <div className="learn01">
            <p1>LEARN MORE</p1>
          </div>
            </div>
        </div>
    
</Grid>
<Grid item sm={5} xs={12}>
<div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://imerit.net/wp-content/uploads/2020/06/Keypoint-Annotation@1x-1.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">GOVERNMENT</h3>
                <p>iMerit’s secure and monitored facilities offer a reliable and efficient solution for sensitive data that requires processing for the public sector at the federal, state and local level.</p>
                <div className="learn01">
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

export default ThirSlide