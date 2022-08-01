import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './Slider.css'

function Slider() {
  return (
    <div>
 <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={1}/>
      <Grid item xs={1}>

      </Grid>
      <Grid item xs={10}>
    <div className="show">
            <p>Working with global AI leaders</p>

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true;autoplay-interval: 3000 ;" style={{backgroundColor:'#f8f8f9'}}>


    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m">
      

<li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/tripadvisor.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/Kitware.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2020/04/autodesk_logo.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/microsoft.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/sentera.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/american_ancestors.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/raven.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/Kinatrax.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/Crowdreason.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>9</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/logo-orbital-insight.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>10</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/02/Reactive-Reality.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>10</h1></div>
        </li>
        <li>
            <img src="https://imerit.net/wp-content/uploads/2022/01/sentera.png" width="450" height="220" alt=""/>
            <div class="uk-position-center uk-panel"><h1>10</h1></div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>





    </div>
    </Grid>
    </Box>
    </div>
  )
}

export default Slider