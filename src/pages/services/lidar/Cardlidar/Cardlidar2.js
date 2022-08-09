import React from 'react'
import {Grid} from '@mui/material'
import'./Cardpartlidar.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Cardlidar2() {
   
  return (
    <div><div className="cardconlidar">
    <div className="cardcontain ">
    <Grid container spacing={2} >
        <Grid item xs={1} lg={1.5} sm={1} md={.5}></Grid>
      <Grid item xs={10} lg={3} md={3.6} sm={5}
      > <Card className='advertisecard2' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Lidar-vegetation-Labeling.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1lidar'> SEMANTIC SEGMENTATION</h3>
            <h4 className='paracardlidar'>Lidar semantic segmentation is one of the key building blocks of autonomous technology, where a class label is assigned to each data point in the input modality.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      >
       <Card className='advertisecard2' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2022/02/3d-point-cloud.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1lidar'> 3D POINT CLOUD ANNOTATION</h3>
            <h4 className='paracardlidar'>Fine-grained details can be captured through 3d point cloud annotation, allowing models to perform object detection and distinguish multiple 3d objects in a scene.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className='griddata1' item  xs={1}lg={.1} md={.1} sm={1}></Grid>
      <Grid  className='griddata1' item xs={1} lg={.1} md={.1} sm={1} xs={1}></Grid>
       <Grid item xs={10} md={3.6} lg={3} sm={5}
      ><Card className='advertisecard2' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Lidar-box-Labeling.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1lidar'>3D CUBOID ANNOTATION & BOUNDING BOX ANNOTATION</h3>
            <h4 className='paracardlidar'>Lidar box labeling helps autonomous vehicles identify objects from 3D images. Through 3d Lidar sensor data machines learn to easily identify annotated objects instead of generalized ones within a given environment.</h4>
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
      > <Card className='advertisecard2' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Landmark-Annotation.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1lidar'>LANDMARK ANNOTATION</h3>
            <h4 className='paracardlidar'>Lidar landmark annotation labels anatomical or structural points of interest to generate accurate datasets determining the shape of different sized objects, thus enabling machine learning algorithms to detect smaller images.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
    <Grid className="griddata1" item xs={1} sm={1}></Grid>
      <Grid className="griddata1" item xs={1} sm={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      >
       <Card className='advertisecard2' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/Lidar-Polygon-annotation.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1lidar'> POLYGON ANNOTATION</h3>
            <h4  className='paracardlidar'>Lidar polygon annotations are suitable for training object localization & detection algorithms for objects like logos, signboards, and different postures of humans, with pixel-perfect polygons that are accurately drawn around the object of interest.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid className='gridres' item xs={1}></Grid>
    <Grid className='gridres' item xs={1}></Grid>
       <Grid item xs={10} lg={3} md={3.6} sm={5}
      ><Card className='advertisecard2' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/07/LiDAR-Polyline.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            <h3 className='cardhead1lidar'> POLYLINE ANNOTATION</h3>
            <h4 className='paracardlidar'>Lidar polyline annotation helps autonomous vehicles detect street lanes across roads on cities and highways. iMerit’s labelers annotate raw highways and city street data and images to make the road structure easily recognizable to self-driving cars.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Grid>
  <Grid item xs={1}></Grid>
 
      </Grid></div></div>
      </div>
  )
  
}

export default Cardlidar2