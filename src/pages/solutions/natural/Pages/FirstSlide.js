import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FirstSlide.css'

function FirstSlide() {
  return (
    <div className="primary1">

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xl={1}  lg={1} md={1}>

        </Grid>
      
      
        <Grid item xl={6} lg={6} md={6} sm={6}>
            
    <div className="cont1">
    <h3>NATURAL LANGUAGE PROCESSING
</h3>
   <p1>iMerit collaborates to deploy AI and Machine Learning in Autonomous Technology, Geospatial Technology, Medical AI, and other industries by enriching, annotating and labeling data.</p1> 
    </div>
        </Grid>
        <Grid item xl={5} lg={5} md={5} sm={6}>
        <div className="picture1">
     <img class="ui large circular image" src="https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x.jpg" alt=''/>
     <img className="triangle2"  src="https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg" alt=""/>

</div>
        </Grid>
        
        
      </Grid>
    </Box>




    </div>
  )
}

export default FirstSlide