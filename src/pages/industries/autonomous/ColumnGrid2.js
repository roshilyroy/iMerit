import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ColumnGrid2.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnGrid2() {
  return (
    <div className='auto-column'>
       <h2 className='head-byn'>BY THE NUMBERS</h2>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
      
          <Grid item  xs={4} sm={4} md={4} id='card1'>
            <Item>
            <p className='numberau5'>5,500</p>
            <hr className='aunew2'></hr>
            <p className='aupa5'>FULL-TIME, IN-HOUSE DATA ANNOTATION EXPERTS EMPLOYED BY IMERIT</p>
            </Item>
          </Grid>
          <Grid item  xs={4} sm={4} md={4}>
            <Item>
            <p className='numberau6'>250Mn</p>
            <hr className='aunew2'></hr>
            <p className='aupa6'>DATA POINTS ENRICHED FOR AV USE CASES</p>
            </Item>
          </Grid>
          <Grid item  xs={4} sm={4} md={4}>
            <Item>
          <p className='numberau7'>60%</p>
            <hr className='aunew2'></hr>
            <p className='aupa7'>OF THE TOP AUTONOMOUS VEHICLE PLAYERS PARTNER WITH IMERIT</p>
            </Item>
          </Grid>
      </Grid>
      </Box>

      </div>

  )
}
