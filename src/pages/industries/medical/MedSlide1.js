import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './MedSlide1.css';

   
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function MedSlide1() {
  return (
    <div>   
       <Box sx={{ flexGrow: 1 }}>
      
      <Grid className='MedSlide1' container spacing={0}>
        <Grid item xs={12}>
          <Item className='grid-med'>
            <br/> <br/><br/>
          <p className='med1'>iMerit works with leading pharmaceutical companies, device manufacturers,
           health plans, and provider networks to deliver quality, secure, HIPAA-compliant data solutions both 
           locally and off-shore. <a href="">Read iMerit’s HIPAA Business Associate Privacy Policy here.</a></p>
           <br/><br/><br/><br/>
          </Item>
        </Grid>
      </Grid>
      </Box>
      
      </div>

    )
    }