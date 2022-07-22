import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './Home.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Slide1() {
  return (<div className='s1'>
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item lg={6} md={7} xs={12} >
          <Item id='s1grid'><span className='s11'>ML Data Solutions</span>
          <span className='s11769'>ML Data <br/>Solutions</span>
          <p className='s12'>Leveraging human intelligence, expertise and technology to provide the data insights needed to advance AI</p>
          <Button variant="outlined" href="#outlined-buttons" id='btns11'>
  Learn More     
  <svg id="button-svg"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="triangle" d="M0.4 0.5 C9.9 0.5 19.39 0.5 28.9 0.5 19.39 13.5 9.9 26.5 0.4 39.5 0.4 26.5 0.4 13.5 0.4 0.5 " fill="none" stroke-width="1" data-original="M0.4,0.5h28.5l-28.5,39V0.5z"  className='svgcolor'></path><line id="line" x1="0" y1="20" x2="0" y2="20" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" className='svgcolor'></line></svg>
<span className='hai'>hai</span></Button>



          </Item>
        </Grid>
        <Grid item lg={6} md={5} xs={12}>
          <Item id='s1imagegrid'><img src='https://i.pinimg.com/736x/0a/9d/15/0a9d1501af3bf7043001022efedc99bc--respiration-chemical-reactions.jpg' alt='' className='imgs1'/></Item>
        </Grid>
        
       
      </Grid>
    </Box>
    </div>
  );
}