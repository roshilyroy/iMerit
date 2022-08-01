import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from './Slide3.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div id={classes.set}>
      <Grid container spacing={0} id={classes.techslide3grid}>
        <Grid item xs={6}>
          <Item id={classes.techgrid5}>
            <h1>TECHNOLOGY ENABLEMENT</h1>
            <p>Our platform brings together tools that manage configuration, annotation,
                 project progress, and analytics, and more in one end-to-end solution.</p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item id={classes.techgrid6}>
            <h1>SOLUTIONS CONSULTING</h1>
            <p>Our subject matter experts guide clients throughout the project lifecycle, 
                from project preparation to project execution and data insights.</p>
          </Item>
        </Grid>
      </Grid>


      <Grid container spacing={0} id={classes.techslide3respo}>
        <Grid item xs={12}>
          <Item id={classes.techgrid5}>
            <h1>TECHNOLOGY ENABLEMENT</h1>
            <p>Our platform brings together tools that manage configuration, annotation,
                 project progress, and analytics, and more in one end-to-end solution.</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item id={classes.techgrid6}>
            <h1>SOLUTIONS CONSULTING</h1>
            <p>Our subject matter experts guide clients throughout the project lifecycle, 
                from project preparation to project execution and data insights.</p>
          </Item>
        </Grid>
      </Grid>
      </div>

    </Box>
  );
}
