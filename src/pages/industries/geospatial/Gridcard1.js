import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import './Gridcard1.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gridcard() {
  return (
    <div className='geo-grid1'>
        <div>
          <h2 className='geo-ser'>
            SERVICES
          </h2>
          <br/><br/><br/>
        </div>
       
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: -2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
      
          <Grid item  xs={2} sm={4} md={4} id='card1'>
            <Item>
               <CardMedia
                   component="img" id='gridge-1'
                   image="https://imerit.net/wp-content/uploads/2020/06/Polygon-Annotation@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='geoh1'>POLYGON ANNOTATION</h3>
            <p className='geotxt1'>Expert annotators plot points on each vertex of the target object. Polygon annotation allows all of the object’s exact edges to be annotated, regardless of shape.</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Geospatial@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='geoh1'>INSTANCE / SEMANTIC SEGMENTATION</h3>
            <p className='geotxt1'>Images are segmented into component parts, by the iMerit team, and then annotated. iMerit Computer Vision experts detect desired objects within images at the pixel level</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Geospatial-Image-Classification@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='geoh1'>IMAGE CLASSIFICATION</h3>
            <p className='geotxt1'>iMerit annotators classify images or objects within images based on custom multi-level taxonomies, including land use, crops, residential property features, among others.</p>
            </Item>
          </Grid>
      

          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" id="gridge2"
                   image="https://imerit.net/wp-content/uploads/2020/06/Object-tracking-@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='geoh1'>OBJECT TRACKING</h3>
            <p className='geotxt1'>iMerit teams detect instances of semantic objects of a certain class in digital images and videos, providing a deeper understanding of the scene</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/LiDAR-Annotation-3@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='geoh1'>LIDAR ANNOTATION</h3>
            <p className='geotxt1'>iMerit teams label images and videos in 360-degree visibility, captured by multi-sensor cameras, in order to build accurate, high-quality, ground truth datasets.</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Area-Point-of-Interest-Marking@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='geoh1'>POINT OF INTEREST MARKING</h3>
            <p className='geotxt1'>Trained teams extract intelligence about regions of interest including attributes, seasonal and temporal variations, and behavioral patterns.</p>
            </Item>
          </Grid>

          
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" id="gridge3"
                   image="https://imerit.net/wp-content/uploads/2020/06/Keypoint-Annotation@1x-1.jpg" 
                   alt="image" 
                 />
                 <h3 className='geoh1'>POINT ANNOTATION</h3>
            <p className='geotxt1'>Data experts annotate images by placing points on specific parts within an image to help locate its component parts</p>
            </Item>
          </Grid>
        
     </Grid>
   </Box>
    
   </div>
  );
       } 