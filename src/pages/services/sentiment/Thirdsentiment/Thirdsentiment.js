
import { Grid } from '@mui/material'
import React from 'react'
import './Thirdsentiment.css'
function Thirdsentiment() {
  return (
    <div> <div className='fourthpartsent'>
    
    <div className='fourthcontiner'>
        < h1 className='fourheadsentiment'>HOW DOES SENTIMENT ANALYSIS WORK?</h1>
        <p className='sentimentp'>Sentiment analysis is powered by Natural Language Processing (NLP) and Machine Learning (ML) methods and algorithms to accomplish the following: </p>
        <Grid container>
            <Grid item xs={1} lg={1} sm={1} md={.5}></Grid>
            <Grid item xs={10} lg={2.8} sm={3} md={3}>
                <h1 className='fourtext'>1</h1>
                <div class="gradient-line"></div>
                <p className='fourtext1sent'>SPLITTING TEXT DOCUMENTS INTO ITS BASIC COMPONENTS PARTS LIKE PHRASES, SENTENCES, TOKENS, AND PARTS OF SPEECH.</p>
            </Grid>
        
            <Grid item xs={1.5} lg={1} md={.8} sm={.5}></Grid>
            <Grid item xs={10} sm={3}  md={3}lg={2.8}>
                <h1 className='fourtext'>2</h1>
                <div class="gradient-line"></div>
                <p className='fourtext1sent'>EACH SENTIMENT-RELATED COMPONENT AND PHRASE IS IDENTIFIED.</p> 
            </Grid>
            <Grid item xs={1.5} lg={1} md={.8} sm={.5}></Grid>
            <Grid item xs={10} sm={3}  lg={2.8} md={3}>
            <h1 className='fourtext'>3</h1>
            <div class="gradient-line"></div>
            <p className='fourtext1sent'>SENTIMENT SCORES RANGING FROM -1 TO +1 ARE ASSIGNED TO EACH PART OF THE PHRASE OR COMPONENT.</p> 
            </Grid>
          
            <Grid item xs={1} sm={1}></Grid>

        </Grid>
        
    </div>
    
    </div>
     </div>
  )
}

export default Thirdsentiment