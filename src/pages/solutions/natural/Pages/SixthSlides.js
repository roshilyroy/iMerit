import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SixthSlide.css'

function SixthSlides() {
  return (
    <div>


<Box sx={{ flexGrow: 1}} className="overlaynatural">
      <Grid container spacing={1}>
      <Grid item xs={1}>
</Grid>

<Grid item xs={10}>
    <div className="trio">
<div class="ui three column grid">
  <div class="column">
    <div class="ui card">
  <div class="contentna">
    <h4>WHITEPAPER</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x-1.jpg" alt=""/>
  <div className="img__overlay">
    <p className="description">Annotating Data for Natural Language processing</p>
  </div>
  </div>
  <div class="contentna1">
    <p>DOWNLOAD NOW</p>
  </div>
  
</div>
  </div>
  <div class="column">
  <div class="ui card">
  <div class="contentna">
    <h4>POST MORE</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/08/NLP-with-words-and-picture.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Natural Language processing with Words and Pictures</p>
  </div> 
  </div>
  <div class="contentna1">
    <p>READ MORE</p>
  </div>
  
</div>
  </div>
  <div class="column">
  <div class="ui card">
  <div class="contentna">
    <h4>WEBINAR</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2020/05/NLP-Webinar-1.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Getting started with Natural Language Processing:From unstructured text to labeled corpus</p>
  </div>
  </div>
  <div class="contentna1">
    <p>WATCH ON DEMAND</p>
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




<Box sx={{ flexGrow: 1}} className="overlayna">
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
  <div class="contentna">
    <h4>WHITEPAPER</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x-1.jpg" alt=""/>
  <div className="img__overlay">
    <p className="description">Annotating Data for Natural Language processing</p>
  </div>
  </div>
  <div class="contentna1">
    <p>DOWNLOAD NOW</p>
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
  <div class="contentna">
    <h4>POST MORE</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/08/NLP-with-words-and-picture.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Natural Language processing with Words and Pictures</p>
  </div> 
  </div>
  <div class="contentna1">
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
  <div class="contentna">
    <h4>WEBINAR</h4>
  </div>
  <div class="image">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2020/05/NLP-Webinar-1.jpg" alt=""/>
    <div className="img__overlay">
    <p className="description">Getting started with Natural Language Processing:From unstructured text to labeled corpus</p>
  </div>
  </div>
  <div class="contentna1">
    <p>WATCH ON DEMAND</p>
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

export default SixthSlides