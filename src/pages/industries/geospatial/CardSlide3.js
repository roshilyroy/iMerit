import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardSlide3.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function CardSlide2() {
  return (
    <div className='geo-card'>
      
        
     
    <Box sx={{ width: '100%' }}>
          <div className='cardgeo'>
          <h1 className='geo-crd'>SOLUTIONS</h1>
      <Grid container rowSpacing={0} columnSpacing={0}>
    <Grid item xs={12} sm={6} md={6}>
          <Item>
        <div className='card-one1'>
        <Card className='basecard3' sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle3'>
            COMPUTER VISION
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide13'>
           Engage with Merit’s teams who have deep experience across Computer Vision projects in the autonomous vehicle domain.
          </Typography>
          <Typography variant="h6" className='cardbutton3'>
            LEARN MORE
          </Typography>
        </CardContent>
        </Box>
        <CardMedia
            component="img3"
            className='cardimg3'
            image=" https://imerit.net/wp-content/uploads/2020/06/Image-Object-Classification@1x-1.jpg"
            alt="vehicles"
        />
        </Card>
        </div>
          </Item>
    </Grid>
    <Grid item xs={6}>
          <Item>
          <div className='card-two2'>
        <Card className='basecard3' sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle3'>
           NATURAL LANGUAGE PROCESSING
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide13'>
          Leverage the expertise of iMerit’s linguistic labeling experts to build top-in-class, in-vehicle communication systems.
          </Typography>
          <Typography variant="h6" className='cardbutton3'>
            LEARN MORE
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img2"
        className='cardimg2'
        image="https://imerit.net/wp-content/uploads/2020/06/Moderation-Verification@1x-1.jpg"
        alt=""
      />
    </Card>
    </div>

    </Item>
        </Grid>
      </Grid>
      </div>
    </Box>
    </div>

    );
    }