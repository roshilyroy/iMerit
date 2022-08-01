import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ForthSlide.css'

function ForthSlide() {
  return (
    <div class="fourth0">
  
  <Box sx={{ flexGrow: 1 }} className="secondbox0">
      <Grid container spacing={1}>
        <Grid item xl={12} lg={12} md={12} xs={12}>
        <div className="heading0">
    <h2>FEAUTURED<br/>
  <strong>CONTENT</strong>
   </h2>
   </div>
        </Grid>
  <Grid item xl={1} lg={1} md={1} sm={1}>
    
  </Grid>
<Grid item xl={10} lg={10} md={10} sm={10}>


<div className="card0">
        <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s  uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2021/07/Key-Takeaways-from-CVPR-2021.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <div className="contents0">
                                <h3 >POST</h3>
                                <p>Top Takeaways from CVPR session: How ‘Context’ Improves Data Annotation Accuracy</p>
                                <div className="cardlast0">
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
<Grid item xl={1} lg={1} md={1} sm={1}>

</Grid>
  </Grid>
    </Box>

{/* this is the next section */}




<Box sx={{ flexGrow: 1 }} className="secondbox01">
      <Grid container spacing={1}>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="heading01">
    <h2>FEAUTURED<br/>
  <strong>CONTENT</strong>
   </h2>
   </div>
        </Grid>



     <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>

     </Grid>

<Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
<div className="cardd01">
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img className="cardimages2" src="https://imerit.net/wp-content/uploads/2020/09/Data-Deduplication-retail.jpg" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
            <div className="contents01">
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

export default ForthSlide