import React from 'react'
import {Grid} from '@mui/material'
import'./Cardpart.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Cardpart() {
   
  return (
    <div className='card'><div className="cardcon"><h1 className='cardhead'>iMERIT’S DATA ANNOTATION SOLUTION</h1>
    <div className='cardcontain'>
    <Grid container spacing={3} >
        <Grid item lg={1.5} md={.5} sm={1} xs={1}></Grid>
      <Grid item md={3.6} lg={3} sm={5} xs={10}
      > <Card  id="datasecondcard1" >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2020/06/Polygon-Annotation.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> IMAGE ANNOTATION</h3>
            <h4 className='paracard'>iMerit’s experts provide image annotation services including bounding boxes, polygon annotations, key point annotation, LiDar, semantic segmentation, semantic annotation, and image classification. Each workflow is designed to guarantee quality across every pixel of a given image.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item md={3.6} lg={3} sm={5} xs={10}
      >
       <Card  id="datasecondcard2">
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/05/video-annotation.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> VIDEO ANNOTATION</h3>
            <h4 className='paracard'>iMerit’s experts label video footage to train computer vision models to detect and identify objects. iMerit provides various video annotation services including bounding box annotation, polygon annotations, key point annotation, and semantic segmentation for use in self-driving cars, drones, robotics, and more.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className='griddata1' item lg={.1} md={.1} sm={1}></Grid>
      <Grid  className='griddata1' item lg={.1} md={.1} sm={1} xs={1}></Grid>
       <Grid item lg={3} md={3.6} sm={5} xs={10}
      ><Card id="datasecondcard3" >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/04/Text-Annotation_NER.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> AUDIO ANNOTATION</h3>
            <h4 className='paracard'>iMerit provides text annotation services including sentiment analysis, intent analysis, named-entity recognition (NER), and entity classification for use in NLP and machine learning models like chatbots to understand text and metadata for use in natural language processing, sentiment analysis, spam &amp; intent detection, and more.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid  className=" griddata" item md={.5} lg={1.5} sm={.1}></Grid>
  <Grid className=" griddata" item  lg={1.5} md={1.5} sm={.1}> </Grid>
  <Grid className=" griddata" item xs={2.6} lg={3} md={2.6} sm={.1}></Grid>
  <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
  <Grid item lg={3} md={3.6} sm={5} xs={10}>
  <Card  id="datasecondcard4" >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/05/Audio-Transcription.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> AUDIO TRANSCRIPTION</h3>
            <h4 className='paracard'>iMerit annotates audio material into text formats that machines and computers can understand. The text data can then be labeled to perform tasks like named entity recognition (NER), sentiment analysis, and conversation categorization.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={1}></Grid>
      </Grid></div></div></div>
  )
  
}

export default Cardpart