import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Media.css'
function Media() {
  return (
    <div className="media1">
    <Box sx={{ flexGrow: 1}} className="mediafirst">
         <Grid container spacing={1} rowSpacing={{xl:8}}  columnSpacing={{ xl: 1,lg:9,md:7}}>
         <Grid item xl={1} lg={1} md={1} >
        </Grid>
   
   
        <Grid item xl={10} lg={10} md={10} >
       
   
        <div class="ui three column grid">
     <div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/06/Named-Entity-Recognition-Linking@1x.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>NAMED ENTITY RECOGNITION (NER) & ENTITY CLASSIFICATION</h1>
           <p2>By identifying, classifying, and linking relevant text strings, iMerit powers innovations in digital document analysis, conversational AI development, and knowledge base curation.</p2>
         </div>
       </div>
       </div>
     <div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/06/Sentiment-Intent-Analysis@1x.jpg" alt=""/>
         </div>
         <div class="content">
           <h1>SENTIMENT & TOPIC ANALYSIS</h1>
           <p2>Identify trends and cultivate your brand using advanced sentiment and topic analysis solutions by iMerit’s analysts. Language specialists and domain experts interpret nuances in product reviews, financial news, and social media.</p2>
         </div>
       </div>
     </div>
     <div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/Speech-to-Text-Validation@1x.jpg" alt=""/>
         </div>
         <div class="content">
           <h1>AUDIO AND TEXT TRANSCRIPTION</h1>
           <p2>From doctors’ handwriting to today’s chaotic conference calls, iMerit’s transcription specialists digitally transform data, such as archival documents, contracts, medical records, and earnings calls.</p2>
         </div>
       </div>
     </div>
   </div>
   
   
         
   
   </Grid>
   <Grid item xl={1} lg={1} md={1}>
   </Grid>
   
   <Grid item xl={3} lg={3} md={3}>
       </Grid>
   
       <Grid item xl={6} lg={6} md={6}>
   
       <div class="ui two column grid">
   
       <div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/Intent-and-Conversation-Analysis.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>INTENT AND CONVERSATION ANALYSIS</h1>
           <p2>iMerit brings the building blocks of NLU together to drive the development of next-generation chatbots, digital assistants, and conversational AI products in retail, tech media, finance, and healthcare.

</p2>   </div>
       </div>
     </div>
   
     <div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/CV-Meets-NLP.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>COMPUTER VISION MEETS NATURAL LANGUAGE PROCESSING</h1>
           <p2>Unlock the combined power of CV and NLP with iMerit’s advanced solutions for integrating images, text, voice, and video. iMerit’s multimodal training datasets power the future of digital documents, assistive technology and RPA.
</p2>
         </div>
       </div>
     </div>
   
   </div>
   
   
   
   
   
   
   </Grid>
   
   <Grid item xl={3} lg={3} md={3}>
   </Grid>
   </Grid>
       </Box>


   {/* this is the next section */}

   <Box sx={{ flexGrow: 1}} className="mediasecond">
         <Grid container spacing={{xs:1}} rowSpacing={16}  columnSpacing={{ xl: 1,lg:5,md:5,sm:5}}>


<Grid item sm={1}>

</Grid>

<Grid item sm={5} xs={6}>
<div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/06/Named-Entity-Recognition-Linking@1x.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>NAMED ENTITY RECOGNITION (NER) & ENTITY CLASSIFICATION</h1>
           <p2>By identifying, classifying, and linking relevant text strings, iMerit powers innovations in digital document analysis, conversational AI development, and knowledge base curation.</p2>
         </div>
       </div>
       </div>
</Grid>
<Grid item sm={5} xs={6}>
<div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/06/Sentiment-Intent-Analysis@1x.jpg" alt=""/>
         </div>
         <div class="content">
           <h1>SENTIMENT & TOPIC ANALYSIS</h1>
           <p2>Identify trends and cultivate your brand using advanced sentiment and topic analysis solutions by iMerit’s analysts. Language specialists and domain experts interpret nuances in product reviews, financial news, and social media.</p2>
         </div>
       </div>
     </div>
</Grid>
<Grid item sm={1}>
  
</Grid>
<Grid item sm={1}>
  
</Grid>
<Grid item sm={5} xs={6}>
<div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/Speech-to-Text-Validation@1x.jpg" alt=""/>
         </div>
         <div class="content">
           <h1>AUDIO AND TEXT TRANSCRIPTION</h1>
           <p2>From doctors’ handwriting to today’s chaotic conference calls, iMerit’s transcription specialists digitally transform data, such as archival documents, contracts, medical records, and earnings calls.</p2>
         </div>
       </div>
     </div>
   
   
</Grid>
<Grid item sm={5} xs={6}>
<div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/Intent-and-Conversation-Analysis.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>INTENT AND CONVERSATION ANALYSIS</h1>
           <p2>iMerit brings the building blocks of NLU together to drive the development of next-generation chatbots, digital assistants, and conversational AI products in retail, tech media, finance, and healthcare.

</p2>   </div>
       </div>
     </div>

</Grid>
<Grid item sm={1}>
  
  </Grid>
  <Grid item sm={4} xs={1}>
  
  </Grid>
  <Grid item sm={4} xs={10}>
    <div className="row3">
  <div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/CV-Meets-NLP.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>COMPUTER VISION MEETS NATURAL LANGUAGE PROCESSING</h1>
           <p2>Unlock the combined power of CV and NLP with iMerit’s advanced solutions for integrating images, text, voice, and video. iMerit’s multimodal training datasets power the future of digital documents, assistive technology and RPA.
</p2>
         </div>
       </div>
     </div>
     </div>
  </Grid>
  <Grid item sm={4} xs={1}>
  
  </Grid>


</Grid>
</Box>
  

  {/* this is the third section */}
  <Box sx={{ flexGrow: 1}} className="mediathird">
         <Grid container spacing={1} rowSpacing={1}  columnSpacing={{ xs:1}}>

<Grid item xs={4}>
<div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/06/Named-Entity-Recognition-Linking@1x.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>NAMED ENTITY RECOGNITION (NER) & ENTITY CLASSIFICATION</h1>
           <p2>By identifying, classifying, and linking relevant text strings, iMerit powers innovations in digital document analysis, conversational AI development, and knowledge base curation.</p2>
         </div>
       </div>
       </div>

</Grid>
<Grid item xs={4}>
<div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/06/Sentiment-Intent-Analysis@1x.jpg" alt=""/>
         </div>
         <div class="content">
           <h1>SENTIMENT & TOPIC ANALYSIS</h1>
           <p2>Identify trends and cultivate your brand using advanced sentiment and topic analysis solutions by iMerit’s analysts. Language specialists and domain experts interpret nuances in product reviews, financial news, and social media.</p2>
         </div>
       </div>
     </div>





</Grid>
<Grid item xs={4}>

<div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/Speech-to-Text-Validation@1x.jpg" alt=""/>
         </div>
         <div class="content">
           <h1>AUDIO AND TEXT TRANSCRIPTION</h1>
           <p2>From doctors’ handwriting to today’s chaotic conference calls, iMerit’s transcription specialists digitally transform data, such as archival documents, contracts, medical records, and earnings calls.</p2>
         </div>
       </div>
     </div>


</Grid>

<Grid item xs={1}>

</Grid>
         
   <Grid item xs={5}>
   <div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/Intent-and-Conversation-Analysis.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>INTENT AND CONVERSATION ANALYSIS</h1>
           <p2>iMerit brings the building blocks of NLU together to drive the development of next-generation chatbots, digital assistants, and conversational AI products in retail, tech media, finance, and healthcare.

</p2>   </div>
       </div>
     </div>
    
    </Grid>      
         
    <Grid item xs={5}>
    <div class="column">
       <div class="ui fluid card">
         <div class="image">
           <img src="https://imerit.net/wp-content/uploads/2020/11/CV-Meets-NLP.jpg" alt=""/>
         </div>
         <div class="content">
          <h1>COMPUTER VISION MEETS NATURAL LANGUAGE PROCESSING</h1>
           <p2>Unlock the combined power of CV and NLP with iMerit’s advanced solutions for integrating images, text, voice, and video. iMerit’s multimodal training datasets power the future of digital documents, assistive technology and RPA.
</p2>
         </div>
       </div>
     </div>
    
    </Grid>          
    <Grid item xs={1}>

</Grid>   
         
         </Grid>
</Box>

       </div>  )
}

export default Media