import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FifthSlide.css'


function FifthSlide() {
  return (
    <div>
   <Box sx={{ flexGrow: 1}} className="overlaycomp">
      <Grid container spacing={1}>
      <Grid item xs={1}>
</Grid>

<Grid item xs={10}>
    <div className="trio">
<div class="ui three column grid">
  <div class="column">
    <div class="ui card">
  <div class="contentmp">
    <h4>POST MORE</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/22-image-datasets-CV.jpg" alt=""/>
  <div className="img__overlay">
    <p className="description">25 Best NLP datasets for Machine Learning</p>
  </div>
  </div>
  <div class="contentmp1">
    <p>READ MORE</p>
  </div>
  
</div>
  </div>
  <div class="column">
  <div class="ui card">
  <div class="contentmp">
    <h4>POST MORE</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/06/Edge-Cases-Hinder-Autonomous-Vehicle-Development.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Picking the Best ML Optimizer </p>
  </div> 
  </div>
  <div class="contentmp1">
    <p>READ MORE</p>
  </div>
  
</div>
  </div>
  <div class="column">
  <div class="ui card">
  <div class="contentmp">
    <h4>POST MORE</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/5-CV-companies_feature.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Structure Your Process to Reduce Training Time </p>
  </div>
  </div>
  <div class="contentmp1">
    <p>READ MORE</p>
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


{/* this is the next section */}

<Box sx={{ flexGrow: 1}} className="overlaymp">
      <Grid container spacing={1}>
        <Grid item sm={1}>

        </Grid>

      <Grid item sm={10}>
      < div className='persongrid'>
<div
  uk-slider="clsActivated: uk-transition-active"
  className="uk-slider uk-slider-container"
>
  <div
    className="uk-position-relative uk-visible-toggle uk-light"
    tabIndex={-1}
  >
    <ul
      className="uk-slider-items  uk-child-width-1-2@s  uk-child-width-1-3@m uk-grid"
      id='persongridmove'
    >
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}>
        <div class="column">
    <div class="ui card">
  <div class="contentmp">
    <h4>POST MORE</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/22-image-datasets-CV.jpg" alt=""/>
  <div className="img__overlay">
    <p className="description">25 Best NLP datasets for Machine Learning</p>
  </div>
  </div>
  <div class="contentmp1">
    <p>READ MORE</p>
  </div>
  
</div>
  </div>
      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}>
<div class="column">
  <div class="ui card">
  <div class="contentmp">
    <h4>POST MORE</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/08/NLP-with-words-and-picture.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Natural Language processing with Words and Pictures</p>
  </div> 
  </div>
  <div class="contentmp1">
    <p>READ MORE</p>
  </div>
  
</div>
  </div>
      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      >
         <div class="column">
  <div class="ui card">
  <div class="contentmp">
    <h4>POST MORE</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/5-CV-companies_feature.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Structure Your Process to Reduce Training Time </p>
  </div>
  </div>
  <div class="contentmp1">
    <p>READ MORE</p>
  </div>
  
</div>
  </div>
      </li>
    
    </ul>
  </div>
  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" id='summlink'>
    <li uk-slider-item={0} className="uk-active">
      <a href="" />
    </li>
    <li uk-slider-item={1} className="">
      <a href="" />
    </li>
    <li uk-slider-item={2} className="">
      <a href="" />
    </li>
    <li uk-slider-item={3} className="">
      <a href="" />
    </li>
    <li uk-slider-item={4} className="">
      <a href="" />
    </li>
    <li uk-slider-item={5} className="">
      <a href="" />
    </li>
    <li uk-slider-item={6} className="">
      <a href="" />
    </li>
    <li uk-slider-item={7} className="">
      <a href="" />
    </li>
  </ul>
  <div className='gradLin2'>.</div>
</div>
</div>

</Grid>
<Grid item sm={1}>

</Grid>











</Grid>
</Box>

























    </div>
  )
}

export default FifthSlide