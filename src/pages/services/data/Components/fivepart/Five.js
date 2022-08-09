import { Grid } from '@mui/material'
import React from 'react'
import './Five.css'

function Five() {
  return (
    <div><div className='fifthfirstpart'><h1 className='fifthhead'>WE PROVIDE DATA ANNOTATION SERVICES TO AI LEADERS</h1>
    <div>
        <Grid container>
        <Grid item xs={0} lg={1} md={1} sm={1.5}></Grid>
        <Grid item xs={4}  sm={1.5} md={1.5} lg={1.5}>
           <img className='fifthimage' src="https://imerit.net/wp-content/uploads/2020/04/logo-ebay.png" alt="" />
        </Grid>
        <Grid item xs={1} lg={1} md={1} sm={1.5}></Grid>
        <Grid item xs={4} md={1.5} lg={1.5}  sm={1.5}>
            <img  className="fifthimage"src="https://imerit.net/wp-content/uploads/2020/04/logo-tripadvisor.png" alt="" />
        </Grid>
        <Grid item xs={0} lg={1} md={1} sm={1.5}></Grid>
        <Grid item xs={4}sm={1.5} lg={1.5} md={1.5}>
            <img className="fifthimage" src="https://imerit.net/wp-content/uploads/2020/04/autodesk_logo.png" alt="" />
        </Grid>
        <Grid item xs={2} lg={1} md={1} sm={5}></Grid>
        <Grid item xs={4} md={1.5} lg={1.5}>
            <img  className="fifthimage" src="https://imerit.net/wp-content/uploads/2020/04/logo-microsoft.png" alt="" />
        </Grid>
        <Grid item xs={2}></Grid></Grid></div></div>
       </div>
  )
}

export default Five