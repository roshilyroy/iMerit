import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './SecondSlide.css';

   
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function secondSlide() {
  return (
    <div>   
       <Box sx={{ flexGrow: 1 }}>
      <Grid className='SecondSlideau' container spacing={0}>
        <Grid item xs={12}>
          <Item className='grid-merit'>
          <br/><br/><br/><br/>
          <p className='merit'>iMerit’s end-to-end data labeling services paired with its 5,
          500 full-time data annotation experts deliver high-quality training data that fuels the machine 
          learning models created by engineering, product and data science teams from leading autonomous vehicle 
          enterprises.</p>
          </Item>
        </Grid>
      </Grid>
      </Box>
      <br/><br/><br/><br/>
      </div>

    )
    }
