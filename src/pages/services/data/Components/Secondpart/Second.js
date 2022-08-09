import { Grid } from '@mui/material'
import React from 'react'
import './Second.css'
function Second() {
  return (
    <div>
    <div className='secondsec'>
        <div className='second'>
            <Grid container>
                <Grid item xs={1} lg={1} md={1} sm={.5}></Grid>
               <Grid item xs={10} lg={4} md={4} sm={4}>
               <div className="secondimgsec">
                <img src="https://imerit.net/wp-content/uploads/2021/07/WHAT-IS-DATA-ANNOTATION.jpg" alt="" />
               
                </div>
          
               </Grid>
               <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
                <Grid item xs={11} md={6} lg={6} sm={6}  >
                 <div className="tstpart">
            
                    <h1 className='secondhead'>WHAT IS DATA ANNOTATION?</h1>
                    <p className="secondpara">Data annotation is the process of labeling unstructured data and information to train machine learning models. Today we find ourselves surrounded by high volumes of raw data. This raw data comes in unique formats like images, video, text, and audio.
</p>
<p className="secondpara">Appropriately labeled, quality data is used to help supervised machine learning models identify objects, understand sentiment, and perform functions like speech recognition or even driving.</p>
</div> </Grid>
                <Grid item xs={1} sm={1.5} lg={1} md={1}></Grid>
            </Grid>
        </div>
     
   </div>
   <div className='sec'>
        <h1 className='secondsechead'>
        TYPES OF DATA ANNOTATION
        </h1>
        <p className='secondsecpara'>
        iMerit’s data annotation services are catered to the unique needs of our clients. Our most common labeling services focus on high-quality text annotation, video annotation, audio annotation, and image annotation. iMerit teams work with clients to calibrate their quality requirements using custom processes that guarantee validation of the annotation work. All annotation work is turned around rapidly by a highly-qualified team of subject matter .
        </p>
        </div></div>
  )
}

export default Second