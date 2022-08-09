import React from 'react'
import {Grid} from '@mui/material'
import'./Cardpartsentiment.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Cardsentiment() {
  return (
    <div><div className="cardcon"><h1 className='cardheadsentiment'>APPLICATIONS OF SENTIMENT ANALYSIS AND INDUSTRY USE CASES</h1>
    <div className="cardcontain">
    <Grid container spacing={3} >
    <Grid item xs={1} md={.5} lg={1.5} sm={1}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      > <Card id="sentcard1" >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Finance_Industry.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> FINANCE</h3>
            <h4 className='paracardse'>Sentiment analysis experts help customers improve business operations, analyze performance, and formulate future plans by leveraging machine learning technology and RPA. It can also be used to analyze news articles, inform investment decision-making, and predict market trends.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}>
       <Card id="sentcard2" >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Sentiment-analysis-Insurance.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>INSURANCE</h3>
            <h4 className='paracardse'>Sentiment analysis experts help insurance companies develop chatbots, allowing customers to file claims and carry out other processes smoothly and with minimal intervention.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className='griddata1' item  xs={1}lg={.1} md={.1} sm={1}></Grid>
      <Grid  className='griddata1' item xs={1} lg={.1} md={.1} sm={1}></Grid>
       <Grid item xs={10} md={3.6} lg={3} sm={5}
      ><Card id="sentcard3">
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Government.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> GOVERNMENT</h3>
            <h4 className='paracardse'>Sentiment analysis in the public sector can detect and tackle fake news and cyber attacks. It helps to understand the intent behind words and the sentiment of suspicious posts on various social media channels.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid  className=" griddata" item md={.1} lg={1.5} sm={.1}></Grid>
  <Grid className=" griddata" item  lg={1.5} md={.1} sm={.1}> </Grid>
  <Grid className=" griddata" item xs={2.6} lg={.1} md={.5} sm={.1}></Grid>
  <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
      <Grid item xs={10} md={3.6} lg={3} sm={5}
      > <Card id="sentcard4">
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Commerce_Industry.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>COMMERCE</h3>
            <h4 className='paracardse'>Sentiment analysis in commerce helps to analyze the sentiment within survey responses, Amazon product reviews, movie reviews, and other online reviews and to mine useful information from unstructured data to improve the customer experience or provide customer support for consumers. In conjunction with other forms of text analytics, it can be used to perform proactive market research and assess brand reputation.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      >
       <Card id="sentcard5">
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Social-Media_Industry.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>SOCIAL MEDIA</h3>
            <h4  className='paracardse'>Sentiment analysis can be applied to tweets and posts to interpret the live reactions of people on different social media platforms. Social media monitoring helps calibrate the emotions, opinions, and intentions of people around brands, products, or services.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
      </Grid>
      <Grid className="gridres" item xs={1} sm={1}></Grid>
      <Grid className="gridres" item xs={1} sm={1}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      ><Card id="sentcard6" >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Medical-AI_Industry.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> MEDICAL AI/HEALTHCARE</h3>
            <h4 className='paracardse'>In the healthcare industry, sentiment analysis is focused on improving patient experience by analyzing conversations to understand patient intent and emotion, while seeking specific information.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid item xs={1}></Grid>
 
      </Grid></div></div></div>
  )
}

export default Cardsentiment