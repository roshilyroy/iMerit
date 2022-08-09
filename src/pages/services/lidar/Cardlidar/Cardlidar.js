import React from 'react'
import {Grid} from '@mui/material'
import'./Cardpartlidar.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cardlidar() {
  return (
    <div><div className="cardcon"><h1 className='cardheadli'>INDUSTRIES USING LIDAR ANNOTATION SERVICE TODAY
 
    </h1>
    <div className="cardcontain">
    <Grid container spacing={3} >
        <Grid item lg={1.5} md={.5} sm={1} xs={1}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      > <Card className='advertisecardli' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/LiDAR-AV.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> AUTONOMOUS VEHICLE</h3>
            <h4 className='paracardli'>AV uses a combination of three forms of sensors – cameras, laser-based Lidar, and traditional 2D radar – that work in tandem to sense the road, identify objects and discern differences between passing scenery and potentially threatening objects.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      >
       <Card className='advertisecardli' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Agriculture.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> AGRICULTURE</h3>
            <h4 className='paracardli'>In agriculture, Lidar training data can be used to train machine learning algorithms to identify areas that require more water or fertilizer. This information can help farmers save on cost, time, and labor.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={4}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      ><Card className='advertisecardli' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Lidar-govt.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1'> GOVERNMENT</h3>
            <h4 className='paracardli'>Lidar technology in government agencies is used in numerous ways. It is used by intelligence agencies to secure a direct line of sight and clear built-up areas visited by high-risk category of people.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid item xs={1}></Grid>
  
      </Grid></div></div></div>
  )
}

export default Cardlidar