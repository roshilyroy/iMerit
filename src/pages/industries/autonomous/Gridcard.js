import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import './Gridcard.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gridcard() {
  return (
    <div className='sev-grid'>
        <div>
          <h2 className='serve'>
            SERVICES
          </h2>
          <br/><br/><br/>
        </div>
       
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: -2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
          
          <Grid item  xs={2} sm={4} md={4} id='card'>
            <Item>
               <CardMedia
                   component="img" id='grid1'
                   image="https://imerit.net/wp-content/uploads/2020/06/Multi-sensor-Fusion@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='au-h1'>MULTI-SENSOR FUSION</h3>
            <p className='au-txt1'>Combining LiDAR and images from multiple angles captured from different sensors, iMerit’s teams help to reduce uncertainty in navigation.</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Panoptic-Segmentation-4@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='au-h1'>PANOPTIC SEGMENTATION</h3>
            <p className='au-txt1'>Coupling instance and semantic segmentation, iMerit enrichment teams identify the pixels in images as belonging to a class and identify what instances of that class they belong to</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Lidar-Segmentation@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='au-h1'>LIDAR</h3>
            <p className='au-txt1'>iMerit teams label images and videos in 360 degree visibility, captured by multi-sensor cameras, in order to build accurate, high-quality, ground truth datasets to power autonomous driving algorithms.</p>
            </Item>
          </Grid>
      

          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" id="grid-2"
                   image="https://imerit.net/wp-content/uploads/2020/06/Image-Object-Classification@1x-1.jpg" 
                   alt="image" 
                 />
                 <h3 className='au-h1'>BOUNDING BOXES</h3>
            <p className='au-txt1'>iMerit Computer Vision experts use rectangular box annotation to illustrate objects and train data, enabling algorithms to identify and localize objects during ML processes.</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Semantic-Segmentation@1x-2.jpg" 
                   alt="image" 
                 />
                 <h3 className='au-h1'>POLYGON ANNOTATION</h3>
            <p className='au-txt1'>Expert annotators plot points on each vertex of the target object. Polygon annotation allows all of the object’s exact edges to be annotated, regardless of shape.</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Semantic-Segmention.jpg" 
                   alt="image" 
                 />
                 <h3 className='au-h1'>SEMANTIC SEGMENTATION</h3>
            <p className='au-txt1'>Images are segmented into component parts, by the iMerit team, and then annotated. iMerit Computer Vision experts detect desired objects within images at the pixel level.</p>
            </Item>
          </Grid>

          
          <Grid item  xs={12} sm={12} md={12}>
            <Item>
               <CardMedia
                   component="img" id="grid-3"
                   image="https://imerit.net/wp-content/uploads/2020/06/Object-Tracking-in-Video@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='au-h1'>OBJECT TRACKING</h3>
            <p className='au-txt1'>iMerit teams detect instances of semantic objects of a certain class in digital images and videos, use cases could include face detection and pedestrian detection.</p>
            </Item>
          </Grid>
        
     </Grid>
   </Box>
   <br/><br/><br/>
   <br/><br/><br/>
    
   </div>
  );
       }         



