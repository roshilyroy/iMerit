
import React from 'react'
import { Grid } from '@mui/material'
import './Thirdlidar.css'
function Thirdlidar() {
  return (
    <div className='third'>
    <h1 className='thirdheadlidar'>LIDAR ANNOTATION SERVICES CASE STUDIES</h1>
    <div className='thirdcontainer'>
        <Grid container>
            <Grid item xs={1} md={.5} lg={1}></Grid>
            <Grid item xs={10}  md={4} lg={4} sm={4}>
                <div className='thirdcont '>
                <img src="https://imerit.net/wp-content/uploads/2021/07/LIDAR-BOX-LABELING-for-AV.jpg" alt="" /></div>
            </Grid>
            <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={.5}></Grid>
            <Grid item xs={10} md={6} sm={6} lg={6}><div className='thirdcont'>
                <h1 className='subheadlidar'>LIDAR BOX LABELING FOR AUTONOMOUS VEHICLE COMPANY</h1>
                <p className='thirdparali'><strong>Client Profile:</strong> Leading developer of autonomous vehicles</p>

<p className='thirdparali'><strong>Client data type:</strong> Street scene imagery</p>

<p className='thirdparali'><strong>Challenge:</strong> Data annotation in the areas of pedestrian classification, headlight tagging, and driver behavioral prediction </p>
<p className='thirdparali'><strong>Outcome: </strong>Working closely with the limited data on hand, iMerit experts annotated images using Lidar box labeling, a method that helps the machine to ‘see’ and understand the surrounding environment and react appropriately.</p>
           </div></Grid>
            <Grid item xs={1} md={1.5} lg={1}></Grid>
            <Grid item xs={1} md={.5} lg={1}></Grid>
           
            <Grid item xs={10} md={6} lg={6} sm={6}><div className='thirdcont'>
                <h1 className='subheadrightlidar'>LIDAR LABELING FOR TOP AGRICULTURAL SERVICES COMPANY</h1>
                <p className='thirdpara1li'><strong>Client Profile:</strong> Top agricultural services company</p>
                <p className='thirdpara1li'><strong>Client data type:</strong> Lidar imagery of palm oil plantations</p>
                <p className='thirdpara1li'><strong>Challenge:</strong> Analyzing the proliferation of palm oil trees within a specific region.</p>
                <p className='thirdpara1li'><strong>Volume:</strong> Over 1 million aerial images</p>
                <p className='thirdpara1li'><strong>Outcome: </strong>Using LiDar, the teams classified the region into three specific layers of images: RGB, false color, and near-infrared. In just three months, this team successfully identified areas that were ripe for the planting of new palm oil trees.</p>

           </div></Grid>
           <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={.5}></Grid>
           <Grid item xs={10} md={5} sm={5} lg={5}>
               <div className='thirdcont imglidarthird'> <img src="https://imerit.net/wp-content/uploads/2021/07/LiDAR-Palm-oil-Tree-labeling.jpg" alt="" /></div>
            </Grid>
            <Grid item xs={1}></Grid>
           
        </Grid>
    </div>
 </div>
  )
}

export default Thirdlidar