import React from 'react'
import {Grid} from '@mui/material'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cardcontent1() {
   
  return (
    <div className='cardsent'><div className="cardcon"><h1 className='cardheadsentiment'>iMERIT’S CONTENT MODERATION SOLUTION</h1>
    <p className='cardparasent'>iMerit provides various content moderation services that cater to a client’s project needs. Common workflows can be applied to varying types of content to include image moderation, video moderation, and text moderation. iMerit’s team works with a client to calibrate their quality and throughput requirements and builds custom processes to support client needs.



</p>
    <div className='cardcontain'>
    <Grid container spacing={2} >
    <Grid item lg={1.5} md={.5} sm={1} xs={1}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      > <Card className='advertisecardse' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Image-moderation-.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1se'> IMAGE MODERATION</h3>
            <h4 className='paracardse'>Expert moderators evaluate user-submitted images on online communities and forums for sensitive content, quality, and guideline violations. Platforms are then able to accurately identify violence, offensive comments, drug and weapon use, and to add metadata to large datasets.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      >
       <Card className='advertisecardse' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Video-moderation-.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1se'> VIDEO MODERATION</h3>
            <h4 className='paracardse'>Video content moderation helps rate, evaluate and flag offensive video content and trolls that can harm brand image and removes that content from the videos. iMerit expert moderators can moderate frame-by-frame and still images using real-time reporting.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={4}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      >
      <Card className='advertisecardse' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Text-moderation.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1se'> TEXT MODERATION</h3>
            <h4 className='paracardse'>Text moderation is performed on documents, discussion boards, chatbot conversations, e-commerce catalogs, and chat room transcripts. Text moderators can search for duplicate content, offensive content, or other pieces of content that do not comply with community standards and remove them.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid item xs={1}></Grid>
 
      </Grid></div></div></div>
  )
  
}

export default Cardcontent1