import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SecondSlide.css'
function SecondSlide() {
  return (
    <div className="trioslide" style={{backgroundColor:'#f8f8f9'}}>
 <Box sx={{ flexGrow: 1 }} className="firstsection">
      <Grid container rowSpacing={6}  columnSpacing={{ xl: 4,lg:4,md:4}}>
        <Grid item xl={1} lg={1 } md={1}>

        </Grid>
        <Grid item xl={5} lg={5} md={5}>
            <div className="left">
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2020/06/Artifical-Intelligence-Implementation@1x.jpg" alt="" uk-cover="" sx={{height: '284px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">COMPUTER VISION</h3>
                    <p>iMerit's data labeling teams have completed over 100 million data points to date, including complex training data projects with complex edge cases and nuanced taxonomies involving polygon and bounding box annotation, semantic segmentation, and LiDAR data annotation. </p>
                            <div className="learn">
                            <p1>LEARN MORE</p1>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </Grid>
            <Grid item xl={5} lg={5} md={5}>
                <div className="right">
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">NATURAL LANGUAGE PROCESSING</h3>
                                <p>With edge case insights, dedicated project management and custom tooling, iMerit’s team is led by linguistic experts and has experience in services including named entity recognition and linking, sentiment analysis, salience rating and speech-to-text validation.</p>
                                <div className="learn">
                            <p1>LEARN MORE</p1>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </Grid>
            <Grid item xl={1} lg={1} md={1}>
                
            </Grid>
            <Grid item xl={4} lg={4} md={4}>
             
            </Grid>
            <Grid item xl={5} lg={5} md={5}>
                <div className="middle">
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://imerit.net/wp-content/uploads/2020/06/Content-Services@1x.jpg" alt="" uk-cover="" sx={{height: '500px', width: '425px'}}/>
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">NATURAL LANGUAGE PROCESSING</h3>
                                <p>With edge case insights, dedicated project management and custom tooling, iMerit’s team is led by linguistic experts and has experience in services including named entity recognition and linking, sentiment analysis, salience rating and speech-to-text validation.</p>
                                <div className="learn">
                            <p1>LEARN MORE</p1>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </Grid>
            <Grid item xl={3} lg={3} md={3}>

            </Grid>

            </Grid>
    </Box>
{/* this is the next section */}
<Box sx={{ flexGrow: 1 }} className="nextsection">
      <Grid container columnSpacing={{xs:3,lg:3,md:3}} rowSpacing={{sm:0}} >
<Grid item xl={1} lg={1} md={1} sm={1} >

</Grid>
<Grid item xl={10} lg={10} md={10} sm={10} xs={12}>

<div class="ui two column grid">
   <div class="column">
   <div class="ui fluid card">
     <div class="image">
       <img src="https://imerit.net/wp-content/uploads/2020/06/Artifical-Intelligence-Implementation@1x.jpg" alt=""/>
     </div>
     <div class="content31" style={{backgroundColor:"white"}}>
      <h1>COMPUTER VISION</h1>
       <p2>iMerit’s data labeling teams have completed over 100 million data points to date, including complex training data projects with complex edge cases and nuanced taxonomies involving polygon and bounding box annotation, semantic segmentation, and LiDAR data annotation. </p2>   </div>
       <div className="learn">
<p1>LEARN MORE</p1>
     </div>
   </div>
 </div>
 <div class="column">
   <div class="ui fluid card">
     <div class="image">
       <img src="https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x.jpg" alt=""/>
     </div>
     <div class="content31">
      <h1>NATURAL LANGUAGE PROCESSING</h1>
       <p2>With edge case insights, dedicated project management and custom tooling, iMerit’s team is led by linguistic experts and has experience in services including named entity recognition and linking, sentiment analysis, salience rating and speech-to-text validation.</p2>
    
       <div className="learn">
<p1>LEARN MORE</p1>
</div> </div>
   </div>
 </div>

</div>

</Grid>
            <Grid item xl={1} lg={1} md={1} sm={1}>

                            </Grid>
<Grid item xl={4} md={4} lg={4} sm={4}>

</Grid>
<Grid item xl={4} md={4} lg={4} sm={4}>
<div className="centr">
<div class="column">
   <div class="ui fluid card">
     <div class="image">
       <img src="https://imerit.net/wp-content/uploads/2020/06/Content-Services@1x.jpg" alt=""/>
     </div>
     <div class="content31">
      <h1>COMPUTER SERVICE</h1>
       <p2>iMerit data annotation services help merchants realize compelling CX for e-commerce and other digital platforms with organized, searchable and relevant data. The data labeling team validates, enriches, moderates and tags data to enhance overall shopping practices.</p2>   </div>
       <div className="learn">
<p1>LEARN MORE</p1>
</div>
   </div>
 </div>
</div>



</Grid>
<Grid item xs={4} md={4} lg={4} sm={4}>

</Grid>

                          
</Grid>

</Box>
{/* this is the third section */}

<Box sx={{ flexGrow: 1 }} className="thirdsection">
      <Grid container columnSpacing={{xs:3,lg:3,md:3}}>
            <Grid item sm={12}>
            <div class="first">
   <div class="ui fluid card">
     <div class="image">
       <img src="https://imerit.net/wp-content/uploads/2020/06/Artifical-Intelligence-Implementation@1x.jpg" alt=""/>
     </div>
     <div class="contents" style={{backgroundColor:"white"}}>
      <h1>COMPUTER VISION</h1>
       <p2>iMerit’s data labeling teams have completed over 100 million data points to date, including complex training data projects with complex edge cases and nuanced taxonomies involving polygon and bounding box annotation, semantic segmentation, and LiDAR data annotation. </p2>   </div>
       <div className="learn">
<p1>LEARN MORE</p1>
     </div>
   </div>
 </div>
               
 </Grid>   
      
 <Grid item sm={12}>
<div class="second">
   <div class="ui fluid card">
     <div class="image">
       <img src="https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x.jpg" alt=""/>
     </div>
     <div class="contents" style={{backgroundColor:"white"}}>
      <h1>NATURAL LANGUAGE PROCESSING</h1>
       <p2>With edge case insights, dedicated project management and custom tooling, iMerit’s team is led by linguistic experts and has experience in services including named entity recognition and linking, sentiment analysis, salience rating and speech-to-text validation. </p2>   </div>
       <div className="learn">
<p1>LEARN MORE</p1>
     </div>
   </div>
 </div>
              </Grid>
              <Grid item sm={12}>
              <div class="third">
   <div class="ui fluid card">
     <div class="image">
       <img src="https://imerit.net/wp-content/uploads/2020/06/Content-Services@1x.jpg" alt=""/>
     </div>
     <div class="contents" style={{backgroundColor:"white"}}>
      <h1>NATURAL LANGUAGE PROCESSING</h1>
       <p2>With edge case insights, dedicated project management and custom tooling, iMerit’s team is led by linguistic experts and has experience in services including named entity recognition and linking, sentiment analysis, salience rating and speech-to-text validation.

</p2>   </div>
       <div className="learn">
<p1>LEARN MORE</p1>
     </div>
   </div>
 </div>
              </Grid>
              </Grid>

</Box>
    </div>
  )
}

export default SecondSlide