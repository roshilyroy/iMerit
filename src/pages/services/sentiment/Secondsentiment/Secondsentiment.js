
import { Grid } from '@mui/material'
import React from 'react'
import './Secondsentiment.css'
function Secondsentiment() {
  return (
    <div>
    <div className='secondseclidar'>
        <div className='secondlidar'>
            <Grid container>
                <Grid item xs={1} sm={.5} lg={1} md={.5}></Grid>
               <Grid item xs={10} lg={4} md={4} sm={4}>
               <div className="secondimgsec">
                <img src="https://imerit.net/wp-content/uploads/2021/07/what-is-sentiment-analysis.jpg" alt="" />
               
                </div>
          
               </Grid>

                <Grid item xs={10} sm={6} md={6}lg={6}>
                 <div className="tstpart">
            
                    <h1 className='secondheadsent'>WHAT IS SENTIMENT ANALYSIS?</h1>
                    <p className="secondparasent">So much of interpersonal communication goes beyond the words a person uses. Sentiment analysis comes naturally to us humans, as we learn to identify and navigate non-verbal cues, tones of voice, and general demeanors that effectively convey feelings of happiness, sadness, anger, and apathy. Online, these non-verbal cues manifest as emojis, punctuation, and images such as GIFs.
</p>
<p className="secondparasent">Computers, by comparison, must be taught to understand the spectrum of human sentiment. Positive sentiment and negative sentiment can be subtle and need not have high polarity. Thus, training a computer to accurately detect sentiment within a given text can be a challenging task that requires high-quality human language datasets in order to be effective. Sentiment analysis is a valuable NLP application that’s built on unstructured text datasets, word classifications, positive/negative/neutral phrasing, and is over the infinite complexities of varying categories, topics, and entities within a phrase.</p>
</div> </Grid>
                <Grid item xs={1} md={1.5} lg={1}></Grid>
                <Grid item xs={1.5} md={.5} sm={.5} lg={1}></Grid>
                <Grid item xs={10} sm={4} lg={4} md={4}>
               <div className="secondimgsec">
                <img src="https://imerit.net/wp-content/uploads/2022/02/Sentiment-analysis-categorized.jpg" alt="" />
               
                </div>
          
               </Grid>

                <Grid item xs={6}  sm={6} md={6}>
                 <div className="tstpart">
            
                    <h1 className='secondheadsent'>WHAT IS SENTIMENT ANALYSIS?</h1>
                   
                    <p className="secondparasent">Sentiment analysis can best be categorized into three groups:</p>
                    <div className='secondparasentiment'>
                    <p className="secondparalidar">1.<strong>Rule-based:</strong> these systems perform sentiment analysis automatically based on a set of manually crafted rules and a lexicon of terms with known sentiment.</p>
                    <p className="secondparalidar">2.<strong>Automatic:</strong> these systems usually rely on machine learning techniques to learn from training data. This involves training classifiers to perform binary sentiment classification or multi-class sentiment classification when nuanced emotions (angry, amused, sad, jealous) are being considered. Open source Python toolkits such as NLTK typically implement this form of sentiment analysis.</p>
                    <p className="secondparalidar">3.<strong>Hybrid:</strong> these systems combine both rule-based linguistics and automatic approaches to assess sentiment from a semantic perspective.</p>
                    </div>
<p className="secondparasent">Any sentiment analysis can be deployed as an API to enable real-time access to model insights.</p>
</div> </Grid>
            </Grid>
        </div>
     
   </div>
   <div className='sec'>
        <h1 className='secondsecheadsentiment'>
    
        IMPORTANCE OF SENTIMENT ANALYSIS SERVICES 
        </h1>
        <p className='secondsecparasentiment'>
        Sentiment analysis empowers companies to rapidly identify online chatter about their brands and subsequently categorize it as positive, negative, or neutral. This empowers brands to better measure marketing and PR campaigns, improve customer service, and identify successful product & service features to further expand upon.
        </p>
        </div>
        <div className='thirdsecsentiment'>
          <Grid container spacing={2}>
            <Grid item lg={1} sm={1} md={1}> </Grid>
            <Grid item lg={3} sm={5} md={3}><div class="gradient-linesentiment"></div>
                <h1 className='fourtextsentiment1'>IMPROVE CUSTOMER EXPERIENCE</h1>
                <p className='fourtext1sentiment'>Customer sentiment analysis is the process of analyzing customers’ experiences and emotions in online communications like social networks or forums to find out how customers feel about products, services, or brands, and respond effectively. Categorizing and understanding customer feedback via opinion mining is key to understanding demographic trends, identifying market niches, and capitalizing on new product opportunities.</p></Grid>
                <Grid item sm={.1} lg={.5} md={.5}></Grid>
            <Grid item lg={3} sm={5} md={3}>
            <div class="gradient-linesentiment"></div>
                <h1 className='fourtextsentiment1'>REAL TIME ANALYSIS</h1>
                <p className='fourtext1sentiment'>Real-time sentiment and text analysis can track and provide powerful insights about a brand as they appear and automatically analyze without human involvement. It can greatly enhance marketing campaigns by providing understanding of specific markets and demographics to target.</p>
            </Grid>
            <Grid item sm={4} lg={.5} md={.5}></Grid>
            <Grid item lg={3} sm={5} md={3}>
            <div class="gradient-linesentiment"></div>
            <h1 className='fourtextsentiment3'>SORTING DATA AT SCALE</h1>
            <p className='fourtext1sentiment'>Once trained, sentiment analysis algorithms help businesses process the extensive amount of data in the form of chats, conversations, and other data points more affordably and efficiently.</p> 
            </Grid>
            <Grid item lg={1.5}></Grid>

          </Grid>
        </div>
        <div className='mobilesenti'>
                <div  class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">

    <ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
        <li class="uk-width-3-4">
            <div class="uk-cover-container">
            <div class="gradient-linesentiment"></div>
                <h1 className='fourtextsentiment1sent'>IMPROVE CUSTOMER EXPERIENCE</h1>
                <p className='fourtext1sentiment1'><strong>IMPROVE CUSTOMER EXPERIENCE</strong><br/>Customer sentiment analysis is the process of analyzing customers’ experiences and emotions in online communications like social networks or forums to find out how customers feel about products, services, or brands, and respond effectively. Categorizing and understanding customer feedback via opinion mining is key to understanding demographic trends, identifying market niches, and capitalizing on new product opportunities.</p>
            </div>
        </li>
        <li class="uk-width-3-4" >
            <div class="uk-cover-container">
            <div class="gradient-linesentiment"></div>
   
                <h1 className='fourtextsentiment1sent'>REAL TIME ANALYSIS</h1>
                <p className='fourtext1sentiment1'><strong>REAL TIME ANALYSIS</strong><br/> Real-time sentiment and text analysis can track and provide powerful insights about a brand as they appear and automatically analyze without human involvement. It can greatly enhance marketing campaigns by providing understanding of specific markets and demographics to target.</p>
           </div>
        </li>
        <li class="uk-width-3-4" >
            <div class="uk-cover-container">
            <div class="gradient-linesentiment"></div>
            <h1 className='fourtextsentiment1sent'>SORTING DATA AT SCALE</h1>
            <p className='fourtext1sentiment1'> <strong>SORTING DATA AT SCALE</strong><br/>Once trained, sentiment analysis algorithms help businesses process the extensive amount of data in the form of chats, conversations, and other data points more affordably and efficiently.</p> 
           </div>
        </li>
    </ul>

   

</div>
</div>

   

            </div>
  )
}

export default Secondsentiment