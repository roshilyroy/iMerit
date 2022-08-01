import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FifthSlide.css'

function FifthSlide() {
  return (
    <div class="fifth2">
  
  <Box sx={{ flexGrow: 1 }} className="secondbox10">
      <Grid container spacing={1}>
        <Grid item xl={12} lg={12} md={12} xs={12}>
        <div className="heading7">
    <h2>FEAUTURED<br/>
  <strong>CONTENT</strong>
   </h2>
   </div>
        </Grid>
  <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
    
  </Grid>
<Grid item xl={10} lg={10} md={10} sm={10} xs={10}>


<div className="card5">
        <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s  uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2020/09/Data-Deduplication-retail.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <div className="contents5">
                                <h3 >WHITEPAPER</h3>
                                <p>Data Services&Annotation for Commerce</p>
                                <div className="cardlast5">
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
<Grid item xl={1} lg={1} md={1} sm={1} xs={1}>

</Grid>
  </Grid>
    </Box>

{/* this is the next section */}




<Box sx={{ flexGrow: 1 }} className="secondbox9">
      <Grid container spacing={1} columnSpacing={{xs:1}}>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="heading9">
    <h2>FEAUTURED<br/>
  <strong>CONTENT</strong>
   </h2>
   </div>
        </Grid>



     <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>

     </Grid>

<Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
<div className="cardd9">
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img className="cardimages2" src="https://imerit.net/wp-content/uploads/2020/09/Data-Deduplication-retail.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
            <div className="contents9">
                                <h3 >WHITEPAPER</h3>
                                <p>Data Services&Annotation for Commerce</p>
                                <div className="cardlast9">
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

export default FifthSlide