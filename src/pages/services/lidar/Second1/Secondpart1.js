import { Grid } from '@mui/material'
import React from 'react'
import './Second1.css'

function Secondpart1() {
  return (
    <div> <div>
    <div className='secondsec1'>
        <div className='second1'>
            <Grid container>
                <Grid item xs={1}  lg={1} md={1} sm={.5}> </Grid>
               <Grid item xs={10} lg={4} md={4} sm={4}>
               <div className="secondimgsec1">
                <img src="https://imerit.net/wp-content/uploads/2021/07/WHAT-IS-LIDAR-ANNOTATION.jpg" alt="" />
               
                </div>
          
               </Grid>
               <Grid className='gridres' item xs={1}></Grid>
                <Grid item xs={11} md={6} lg={6} sm={6} >
                 <div className="tstpart1">
            
                    <h1 className='secondhead1'>WHAT IS LIDAR ANNOTATION?</h1>
                    <p className="secondpara1">Lidar (Light Detection & Ranging) data is an essential sensor for geospatial technology, autonomous technology, and many other industry applications. Lidar utilizes lasers, scanners, and specialized GPS receivers to calculate distances to a given object. Annotating Lidar data is a challenging and time-consuming task that demands an expert-level understanding of data annotation. Lidar annotation can be combined with image annotation to train computer vision and other deep learning models to perform a variety of tasks.
</p>

</div> </Grid>
                <Grid item xs={1} sm={1.5} lg={1} md={1}></Grid>
            </Grid>
        </div>
     
   </div>
   <div className='sec1'>
        <h1 className='secondsechead1'>
        iMERIT’S LIDAR ANNOTATION SOLUTION
        </h1>
        <p className='secondsecpara1'>
        iMerit experts are trained in annotating Lidar point cloud data and bring decades of individual experience processing thousands of data points. iMerit provides various Lidar data labeling services that cater to a client’s project needs including semantic annotation, 3D cuboid/box annotation, landmark annotation, polygon annotation, and polyline annotation. iMerit’s team provides a full-service annotation platform and builds custom automation processes for clients after calibrating their quality and throughput requirements.
        </p>
        </div></div></div>
  )
}

export default Secondpart1