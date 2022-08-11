import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardSlide4.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function CardSlide2() {
  return (
    <div className='medical-card' >
      
        
     
    <Box sx={{ width: '100%' }}>
          <div className='cardmedical'>
          <h1 className='medical-crd'>SOLUTIONS</h1>
      <Grid container rowSpacing={0} columnSpacing={0}>
    <Grid item xs={6}>
          <Item>
        <div className='card-1one'>
        <Card className='basecard4' sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle4'>
            COMPUTER VISION
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide14'>
          iMerit's specialized medical image and video labeling teams perform Computer Vision annotation tasks across a variety of healthcare datasets.
          </Typography>
          <Typography variant="h6" className='cardbutton4'>
            LEARN MORE
          </Typography>
        </CardContent>
        </Box>
        <CardMedia
            component="img4"
            className='cardimg4'
            image=" https://imerit.net/wp-content/uploads/2020/06/Computer-Vision@1x-1.jpg"
            alt="vehicles"
        />
        </Card>
        </div>
          </Item>
    </Grid>
    <Grid item xs={6}>
          <Item>
          <div className='card-2two'>
        <Card className='basecard4' sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle4'>
           NATURAL LANGUAGE PROCESSING
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide14'>
          Teams trained in the medical lexicon process high volumes of text and audio in the healthcare domain.
          </Typography>
          <Typography variant="h6" className='cardbutton4'>
            LEARN MORE
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img4"
        className='cardimg4'
        image="https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x-1.jpg"
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