
import React from 'react'
import { Grid } from '@mui/material'
import './Foursentiment.css'
function Foursentiment() {
  return (
    <div className='thirdsent'>
    <h1 className='thirdheadsent'>SENTIMENT ANALYSIS CASE STUDIES</h1>
    <div className='thirdcontainer'>
        <Grid container>
        <Grid item xs={1} md={.5} lg={1} sm={.5}></Grid>
            <Grid item xs={10}  md={4} lg={4} sm={4}>
                <div className='thirdcont'>
                <img src="https://imerit.net/wp-content/uploads/2021/07/SPECIALIZED-DOMAIN-LEVEL.jpg" alt="" /></div>
            </Grid>
            <Grid className='gridres' item xs={.5}></Grid>
            <Grid item xs={10} md={6} sm={6} lg={6}><div className='thirdcont'>
                <h1 className='subheadsent'>SENTIMENT ANALYSIS FOR A LARGE PRIVATE EQUITY FIRM</h1>
                <p className='thirdpara'><strong>Client Profile:</strong> Large private equity firm</p>

<p className='thirdpara'><strong>Client data type:</strong> Images of private equity firm reports</p>

<p className='thirdpara'><strong>Challenge:</strong>  Building a training and validation dataset that precisely identifies and separates invaluable information from noise. As projects like this scale, so too does annotation complexity.</p>
<p className='thirdpara'><strong>Volume:</strong>Over 10 million NLP data points</p>
<p className='thirdpara'><strong>Outcome: </strong>The resulting pattern recognition was infused with true subject-matter expertise, and could effectively identify sentiment in the face of challenging discourse.</p>
           </div></Grid>
           <Grid item xs={2} md={1.5} sm={1.5}lg={1}></Grid>
            <Grid item xs={.5} md={.5} sm={.5} lg={1}></Grid>
           
            <Grid item xs={10} md={6} lg={6} sm={6}><div className='thirdcont'>
                <h1 className='subheadrightsent'>SENTIMENT ANALYSIS FOR SPEECH RECOGNITION</h1>
                <p className='thirdpara1'><strong>Client Profile:</strong>  Top speech recognition company</p>
                <p className='thirdpara1'><strong>Client data type:</strong>  Feedback and reviews from customers</p>
                <p className='thirdpara2'><strong>Challenge:</strong> Annotating and identifying entities, sentiments, intents, and relationships in vast amounts of unstructured textual data like emails, reviews, customer interactions, and social media posts.</p>

                <p className='thirdpara1'><strong>Outcome: </strong> Data was assembled to narrow the scope, context, and subject understanding to create a highly curated pipeline, with over 95% accuracy.</p>

           </div></Grid>
          
           <Grid className='gridres' item xs={1}></Grid>
           <Grid item xs={10} md={5} sm={4} lg={4}>
               <div className='thirdcontsent'> <img src="https://imerit.net/wp-content/uploads/2021/07/SPEECH-RECOGNITION.jpg" alt="" /></div>
            </Grid>
            <Grid item xs={1}></Grid>
           
        </Grid>
    </div>
 </div>
  )
}

export default Foursentiment