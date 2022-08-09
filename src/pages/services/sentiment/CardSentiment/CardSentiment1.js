import React from 'react'
import {Grid} from '@mui/material'
import'./Cardpartsentiment.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Cardsentiment from './Cardsentiment';
function Cardsentiment1() {
   
  return (
    <div className='cardsent'><div className="cardcon"><h1 className='cardheadsentiment1'>SENTIMENT ANALYSIS SERVICES CHALLENGES</h1>
    <p className='cardparasent1'>Sentiment analysis is a challenging workflow and there are many nuances that need to be understood while undertaking these tasks.

</p>
    <div className='cardcontain'>
    <Grid container spacing={2} >
    <Grid item lg={1.5} md={.5} sm={1} xs={1}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      > <Card id="secsentcard1" >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Sarcasm-detection.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1se'> SARCASM DETECTION</h3>
            <h4 className='paracardse'>People often convey negative sentiments using positive words and phrases, leading to inaccurate sentiment analysis and therefore necessitating high-quality language comprehension and contextual analysis to accurately identify and prevent.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}>
       <Card  id="secsentcard2"  >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Text-Ambiguity.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1se'> TEXT AMBIGUITY</h3>
            <h4 className='paracardse'>All text is subject to interpretation. For a text-processing application to be successful, it must be able to identify text ambiguity and effectively attach sentiment to it.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={4}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      ><Card  id="secsentcard3"  >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Emoticons-vs-Emojis.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1se'> EMOTICON V/S EMOJI</h3>
            <h4 className='paracardse'>Emojis and emoticons can be used across a breadth of circumstances to convey sentiment. The ability to understand context and emoji/emoticon application is crucial to the success of sentiment analysis.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid item xs={1}></Grid>
 
      </Grid></div></div></div>
  )
  
}

export default Cardsentiment1