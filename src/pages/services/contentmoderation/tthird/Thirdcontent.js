
import React from 'react'
import { Grid } from '@mui/material'
import './Thirdcontent.css'
function Thirdcontent() {
  return (
    <div className='thirdcon'>
    <h1 className='thirdheadsent'>CONTENT MODERATION CASE STUDIES</h1>
    <div className='thirdcontainer'>
        <Grid container>
        <Grid item xs={1} md={.5} lg={1} sm={.5}></Grid>
            <Grid item xs={10}  md={4} lg={4} sm={4}>
                <div className='thirdcont'>
                <img src="https://imerit.net/wp-content/uploads/2021/07/Content-moderation-for-E-Commerce-sites-.jpg" alt="" /></div>
            </Grid>
            <Grid className='gridres' item xs={.5}></Grid>
            <Grid item xs={10} md={6} sm={6} lg={6}><div className='thirdcont'>
                <h1 className='subheadsentcon'>CONTENT MODERATION FOR E- COMMERCE SITES</h1>
                <p className='thirdpara'><strong>Client Profile:</strong> Leading e-commerce site</p>

<p className='thirdpara'><strong>Client data type:</strong>Customer reviews</p>

<p className='thirdpara'><strong>Challenge:</strong>  Content moderation and approval of user-generated content for the site</p>

<p className='thirdpara'><strong>Outcome: </strong>iMerit Content Moderation team reviewed all users being onboarded, with service level agreements, and the task was completed as required with all submissions moderated accurately.</p>
           </div></Grid>
           <Grid item xs={2} md={1.5} sm={1.5}lg={1}></Grid>
            <Grid item xs={.5} md={.5} sm={.5} lg={1}></Grid>
           
            <Grid item xs={10} md={6} lg={6} sm={6}><div className='thirdcont'>
                <h1 className='subheadrightcon'>CONTENT MODERATION FOR DONATION SOLUTION</h1>
                <p className='thirdpara1'><strong>Client Profile:</strong>Donation record platform</p>
                <p className='thirdpara1'><strong>Client data type:</strong>Campaign images submitted by users</p>
                <p className='thirdpara2'><strong>Challenge:</strong>Moderation and approval of user-submitted campaign content for donation campaigns</p>

                <p className='thirdpara1'><strong>Outcome: </strong> iMerit’s image moderation team helped the client interpret subjective guidelines for disturbing and explicit imagery content and flag inappropriate material not adhering to the guidelines, along with actual abuse.</p>

           </div></Grid>
           <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
           <Grid item xs={10} md={5} sm={4} lg={4}>
               <div className='thirdcont'> <img src="https://imerit.net/wp-content/uploads/2021/07/Content-moderation-for-donation-solution-.jpg" alt="" /></div>
            </Grid>
            <Grid item xs={1}></Grid>
           
        </Grid>
    </div>
 </div>
  )
}

export default Thirdcontent