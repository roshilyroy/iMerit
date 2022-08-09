import React from 'react'
import {Grid} from '@mui/material'
import'./Cardpart.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Card1() {
  return (
    <div><div className="cardcon"><h1 className='cardheadsec'>INDUSTRIES USING ANNOTATION TODAY</h1>
    <div className="cardcontain">
    <Grid container spacing={3} >
        <Grid item xs={1} md={.5} lg={1.5} sm={1}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      > <Card className='advertisecardsec' id='datafirstcard1' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2020/06/Medical-video-labeling.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> HEALTHCARE</h3>
            <h4 className='paracard'>Data annotation in healthcare aids in machine learning projects by labeling x-rays, CT scans, ultrasounds and MRI reports. This data is then used to train neural network models in deep learning to detect medical conditions and suggest treatments.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10}  md={3.6} lg={3} sm={5}
      >
       <Card className='advertisecardsec' id='datafirstcard2'>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/04/ext-annotation-Financial-Global-Publication.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> FINANCE</h3>
            <h4 className='paracard'>Data annotation workflows organize vast sets of finance and insurance datasets into insights for better customer experiences. By annotating financial data, finance firms can detect market fluctuations and advise their clients.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
       <Grid item xs={10} md={3.6} lg={3} sm={5}
      ><Card className='advertisecardsec' id='datafirstcard3' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/04/Text-Annotation_Insurance.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> INSURANCE</h3>
            <h4 className='paracard'>Data annotation for insurance helps improve customer experiences through the use of machine learning models. These AI models can aid in risk assessment by creating complex behavioral patterns that can be analyzed.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid className="griddata" item xs={1} md={.5} lg={1.5} > </Grid>
  <Grid className="griddata"  item xs={1}  md={.5} lg={1.5}></Grid>
  <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
      <Grid item xs={10} md={3.6} lg={3} sm={5}
      > <Card className='advertisecardsec'  id='datafirstcard4'>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2020/09/Government-Artificial-Intelligence.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>GOVERNMENT</h3>
            <h4 className='paracard'>Government experts use data to understand public sentiment, inform policy making, and detect security leaks.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
       <Grid item xs={10} md={3.6} lg={3} sm={5}
      >
       <Card className='advertisecardsec' id='datafirstcard5'>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2020/05/Autonomous-Vehicles-White-Paper.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> AUTONOMOUS VEHICLE</h3>
            <h4  className='paracard'>Autonomous vehicles require expertly-labeled images and videos taken by multi-sensor cameras. These ground-truth datasets enable vehicles to see and engage with the environment as humans do.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} md={3.6} lg={3} sm={5}
      ><Card className='advertisecardsec' id='datafirstcard6'>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/04/Text-Annotation_Commerce.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> COMMERCE</h3>
            <h4 className='paracard'>Proper data annotation helps merchants realize compelling customer experiences and outputs for e-commerce and other digital platforms.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid  item xs={1 } md={.5} sm={1}></Grid>
  <Grid item xs={1} md={.5} lg={1.5} sm={1}></Grid>
      <Grid item xs={10} md={3.6} lg={3} sm={5}
      > <Card className='advertisecardsec'  id='datafirstcard7'>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/01/Semantic-Segmentation-for-Crops-Weeds.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> AGRICULTURE</h3>
            <h4 className='paracard'>Data annotation in agricultural data allows farmers to predict harvest yields, reduce water usage, and protect their crops.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} md={3.6} lg={3} sm={5}
      >
       <Card className='advertisecardsec' id='datafirstcard8' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/04/Text-Annotation_Social.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> SOCIAL MEDIA</h3>
            <h4 className='paracard'>Using sentiment analysis and natural language processing, companies can skip counting likes and comments on social media and instead understand the emotions and opinions surrounding their brand, product, or service.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
       <Grid item xs={10} md={3.6} lg={3} sm={5}
      ><Card className='advertisecardLast' id='datafirstcard9'>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/01/Environmental-Initiatives-And-An-All-important-Minerals-Census-US-mineral-map.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>GIS MAPPING SERVICES</h3>
            <h4 className='paracard'>Data annotation in GIS analytics and mapping is used to improve city planning, analyze project risks, and optimize infrastructure planning and management.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid> 
  <Grid className="griddata"  item xs={1} md={.5}></Grid>
  <Grid className="griddata" item xs={.5} md={.5} lg={1.5}></Grid>
  <Grid className="griddata" item xs={2.6} md={3.6} lg={3}></Grid>
  <Grid  item xs={10} md={3.6} lg={3} sm={5}>
  <Card className='advertisecardLast' id='datafirstcard10'>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2022/01/legal-industry.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'>LEGAL</h3>
            <h4 className='paracard'>The legal industry is increasingly using data annotation to train supervised machine learning models to automate many tasks that previously would have required manual labor to complete. Machine learning models may review and understand contracts, identify negotiable clauses, perform high-volume case law research, and facilitate due diligence and document discovery.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={1}></Grid>
      </Grid></div></div></div>
  )
}

export default Card1