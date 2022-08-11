import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './GeoSlide1.css';

   
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function GeoSlide1() {
  return (
    <div>   
       <Box sx={{ flexGrow: 1 }}>
      <Grid className='GeoSlide1' container spacing={0}>
        <Grid item xs={12}>
          <Item className='grid-geo'>
            <br/><br/><br/><br/>
          <p className='geo1'>The iMerit workforce extracts intelligence from remote sensing datasets such 
          as satellite, aerial, and drone imagery to power the development of Artificial Intelligence technology
           in energy, agriculture, logistics, security and mapping.</p>
          </Item>
        </Grid>
      </Grid>
      </Box>
      <br/><br/><br/><br/>
      </div>

    )
    }