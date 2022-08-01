import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Media.css'

function Media() {
  return (
    <div className="media00">
 <Box sx={{ flexGrow: 1}} className="media0">
 <Grid container spacing={{xl:11,lg:10,md:10,xs:0}} columnSpacing={{xl:3,xs:1}}>
      <Grid item xl={1} lg={1} md={1} >
     </Grid>


     <Grid item xl={10} lg={10} md={10} xs={12}>
    

     <div class="ui three column grid">
      <div className="firstmedia0">
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Image-Object-Classification@1x.jpg" alt=""/>
      </div>
      <div class="content">
       <h1>BOUNDING BOXES</h1>
        <p2>iMerit Computer Vision experts use rectangular box annotation to illustrate objects and train data, enabling algorithms to identify and localize objects during the ML processes.</p2>
      </div>
    </div>
    </div>
  </div>
  <div class="column">
  <div className="firstmedia0">
<div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Polygon-Bounding-Box-Annotation@1x.jpg" alt=""/>
      </div>
      <div class="content">
        <h1>POLYGON ANNOTATION</h1>
        <p2>Expert annotators plot points on each vertex of the target object. Polygon annotation allows all of the object's exact edges to be annotated, regardless of shape.</p2>
      </div>
      </div>
    </div>
  </div>
  <div class="column">
  <div className="firstmedia0">
<div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Semantic-Segmention.jpg" alt=""/>
      </div>
      <div class="content">
        <h1>SEMANTIC SEGMENTATION</h1>
        <p2>Images are segmented into component parts, by the iMerit team, and then annotated. iMerit Computer Vision experts detect desired objects within images at the pixel level.</p2>
      </div>
    </div>
  </div>
  </div>
</div>


      

</Grid>
<Grid item xl={1} lg={1} md={1}>
</Grid>

<Grid item xl={3} lg={3} md={3} xs={1}>
    </Grid>

    <Grid item xl={6} lg={6} md={6} xs={10}>

    <div class="ui two column grid">

    <div class="column">
      <div className="secondmedia">
    <div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Panoptic-Segmentation-4@1x.jpg" alt=""/>
      </div>
      <div class="content">
       <h1>PANOPTIC SEGMENTATION</h1>
        <p2>Coupling instance and semantic segmentation, iMerit enrichment teams identify the pixels in images as belonging to a class and identify what instances of that class they belong to</p2>   </div>
    </div>
  </div>
  </div>

  <div class="column">
  <div className="secondmedia">
 <div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Lidar-Segmentation@1x.jpg" alt=""/>
      </div>
      <div class="content">
       <h1>LIDAR ANNOTATION</h1>
        <p2>iMerit teams label images and videos in 360 degree visibility, captured by multi-sensor cameras, in order to build accurate, high-quality, ground truth datasets for use cases including autonomous vehicles.
</p2>
      </div>
    </div>
  </div>
</div>
</div>






</Grid>

<Grid item xl={3} lg={3} md={3} xs={1}>
</Grid>
</Grid>
    </Box>

{/* this is the next section */}

<Box sx={{ flexGrow: 1}} className="media01">
 <Grid container spacing={{xl:11,lg:10,md:10,sm:6}} columnSpacing={{xl:3,xs:3}}>


<Grid item sm={1} xs={1}>

</Grid>
<Grid item sm={5} xs={5}>
<div class="column">
<div className="real">

    <div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Image-Object-Classification@1x.jpg" alt=""/>
      </div>
      <div class="content">
       <h1>BOUNDING BOXES</h1>
        <p2>iMerit Computer Vision experts use rectangular box annotation to illustrate objects and train data, enabling algorithms to identify and localize objects during the ML processes.</p2>
      </div>
    </div>
  </div>
  </div>
</Grid>
<Grid item sm={5} xs={5}>
<div class="column">
  <div className="real">
    <div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Polygon-Bounding-Box-Annotation@1x.jpg" alt=""/>
      </div>
      <div class="content">
        <h1>POLYGON ANNOTATION</h1>
        <p2>Expert annotators plot points on each vertex of the target object. Polygon annotation allows all of the object's exact edges to be annotated, regardless of shape.</p2>
      </div>
    </div>
  </div>  
  </div>
</Grid>
<Grid item sm={1} xs={1}>
  
</Grid>
<Grid item sm={1} xs={1}>

</Grid>
<Grid item sm={5} xs={5}>
<div class="column">
  <div className="barca">
    <div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Semantic-Segmention.jpg" alt=""/>
      </div>
      <div class="content">
        <h1>SEMANTIC SEGMENTATION</h1>
        <p2>Images are segmented into component parts, by the iMerit team, and then annotated. iMerit Computer Vision experts detect desired objects within images at the pixel level.</p2>
      </div>
    </div>
  </div>
  </div>

</Grid>

<Grid item sm={5} xs={5}>
<div class="column">
  <div className="barca">
    <div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Panoptic-Segmentation-4@1x.jpg" alt=""/>
      </div>
      <div class="content">
       <h1>PANOPTIC SEGMENTATION</h1>
        <p2>Coupling instance and semantic segmentation, iMerit enrichment teams identify the pixels in images as belonging to a class and identify what instances of that class they belong to</p2>   </div>
    </div>
  </div>
  </div>
</Grid>

<Grid item sm={1} xs={1}>
  
</Grid>

<Grid item sm={4} xs={1}>

</Grid>
<Grid item sm={4} xs={10}>
<div class="column">
  <div className="atleti">
    <div class="ui fluid card">
      <div class="image">
        <img src="https://imerit.net/wp-content/uploads/2020/06/Lidar-Segmentation@1x.jpg" alt=""/>
      </div>
      <div class="content">
       <h1>LIDAR ANNOTATION</h1>
        <p2>iMerit teams label images and videos in 360 degree visibility, captured by multi-sensor cameras, in order to build accurate, high-quality, ground truth datasets for use cases including autonomous vehicles.
</p2>
      </div>
    </div>
    </div>
  </div>

</Grid>
<Grid item sm={4} xs={1}>

</Grid>


 </Grid>
</Box>

    </div>
  )
}

export default Media