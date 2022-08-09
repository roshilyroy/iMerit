import React from 'react'
import {Grid} from '@mui/material'
import'./Cardcontent.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Cardcontent2() {
  return (
    <div><div className="cardcon"><h1 className='cardheadcontent'>INDUSTRIES USING MODERATION TODAY</h1>
    <div className="cardcontain">
    <Grid container spacing={3} >
    <Grid item lg={1.5} md={.5} sm={1} xs={1}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      > <Card className='advertisecardco' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Social-Media_Industry-1.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> SOCIAL MEDIA</h3>
            <h4 className='paracard'>Moderating content and activity is seen in online platforms such as LinkedIn, Facebook, Twitter, and Instagram. Media moderators ensure that user-generated content complies with necessary policies and make content moderation decisions to that effect, ideally without curbing the user’s ability to engage in free and open dialogue.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      >
       <Card className='advertisecardco' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Entertainment-Media.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>ENTERTAINMENT & MEDIA</h3>
            <h4 className='paracard'>With international content distribution, content creators must abide by the laws and contextual practices of suitable content for a particular audience and location. iMerit’s content moderators identify restricted content on the basis of guidelines and tag them to perform corrective action.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className='griddata1' item  xs={1}lg={.1} md={.1} sm={1}></Grid>
      <Grid  className='griddata1' item xs={1} lg={.1} md={.1} sm={1}></Grid>
       <Grid item xs={10} md={3.6} lg={3} sm={5}
      
      ><Card className='advertisecardco' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Commerce_Industry-1.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> E-COMMERCE</h3>
            <h4 className='paracard'>Today every company needs a digital presence to tap new markets and to have quicker reach and engagement. However, there is a risk of pushing fake or offensive content. Content moderation processes help filter out user-generated content to maintain brand reputation and improve overall visual experience.</h4>
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
      > <Card className='advertisecard' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Travel-Hospitality-.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>TRAVEL & HOSPITALITY</h3>
            <h4 className='paracard'>The travel and hospitality industry is heavily influenced by user-generated content (UGC). Before making decisions, people look for reviews on either social media or the travel application itself. Content moderation helps manage UGC and feedback while also monitoring brand reputation.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
       
      >
       <Card className='advertisecard' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Government-content-moderators.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>GOVERNMENT</h3>
            <h4  className='paracard'>Content in the government sector is far more abundant and diverse than ever before. Given today's context, content moderators have to define policies on when and how to delete offensive and objectionable content, while also ensuring the right to free speech and expression is not curbed.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className="gridres" item xs={1} sm={1}></Grid>
      <Grid className="gridres" item xs={1} sm={1}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      
      ><Card className='advertisecard' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Healthcare-Industry.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> HEALTHCARE</h3>
            <h4 className='paracard'>Efficacy of online healthcare platforms and telemedicine depends on proper interaction between doctors and patients and satisfactory online consultations. Content moderators keep a regular check on service content and the comments and feedback of patient and filter out offensive comment.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid item xs={1}></Grid>
 
      </Grid></div></div></div>
  )
}

export default Cardcontent2