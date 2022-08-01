import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FifthSlide.css'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';









const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));






function FifthSlide() {
  return (
    <div>
   <Box sx={{ flexGrow: 1}} className="overlaycard">
      <Grid container spacing={1}>
      <Grid item xl={1} lg={1} md={1}>
</Grid>

<Grid item xl={10} lg={10} md={10}>
    <div className="trio">
<div class="ui three column grid">
  <div class="column">
    <div class="ui card">
  <div class="contents">
    <h4>POST </h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/25-Best-NLP-Datasets-for-Machine-Learning.jpg" alt=""/>
  <div className="img__overlay">
    <p className="description">25 Best NLP datasets for Machine Learning</p>
  </div>
  </div>
  <div class="contents1">
    <p>READ MORE</p>
  </div>
  
</div>
  </div>
  <div class="column">
  <div class="ui card">
  <div class="contents">
    <h4>POST</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/Picking-the-best-ML-Optimizer.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Picking the Best ML Optimizer </p>
  </div> 
  </div>
  <div class="contents1">
    <p>READ MORE</p>
  </div>
  
</div>
  </div>
  <div class="column">
  <div class="ui card">
  <div class="contents">
    <h4>POST </h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/Structure-Your-Process-to-Reduce-Training-Time.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Structure Your Process to Reduce Training Time </p>
  </div>
  </div>
  <div class="contents1">
    <p>READ MORE</p>
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

    <Box sx={{ flexGrow: 1}} className="overlay">
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
  <div class="contents">
    <h4>POST </h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/25-Best-NLP-Datasets-for-Machine-Learning.jpg" alt=""/>
  <div className="img__overlay">
    <p className="description">25 Best NLP datasets for Machine Learning</p>
  </div>
  </div>
  <div class="contents1">
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
  <div class="contents">
    <h4>POST </h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/25-Best-NLP-Datasets-for-Machine-Learning.jpg" alt=""/>
  <div className="img__overlay">
    <p className="description">25 Best NLP datasets for Machine Learning</p>
  </div>
  </div>
  <div class="contents1">
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
  <div class="contents">
    <h4>POST</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/07/Picking-the-best-ML-Optimizer.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Picking the Best ML Optimizer </p>
  </div> 
  </div>
  <div class="contents1">
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