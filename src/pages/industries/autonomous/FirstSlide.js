import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './FirstSlide.css';

   
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
export default function FirstSlide() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className='FirstSlide' container spacing={0}>
        <Grid item xs={8}>
          <Item className='grid-auto'>
          <h1 className="autoveh"> AUTONOMOUS VEHICLES</h1>
          <p className='autovehpara'>iMerit is a leading global technology services company providing high quality data annotation across computer vision, natural language processing and content services that powers machine learning and artificial intelligence applications for large enterprises across the autonomous transportation sector</p>
          </Item>
        </Grid>
        <Grid className='grid-2' item xs={4}>
          <Item id='image1'>
             <img src='https://imerit.net/wp-content/uploads/2020/06/Object-Tracking-in-Video@1x.jpg' alt='' />
          </Item>
          <Item id='image2'>
            <img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' alt=''/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
   
  

