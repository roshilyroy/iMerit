import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from './Slide1.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
  
    <Box sx={{ flexGrow: 1 }}>
      <Grid id={classes.studio1} container spacing={0}>
 
        <Grid item xs={8}>
          <Item id={classes.studiog1}>
          <h1 id={classes.Segoe}>  iMERIT DATA STUDIO</h1>
          <p>End-to-end AI data solution leveraging technology and experts-in-the-loop to create high quality data</p>
          </Item>
        </Grid>
        <Grid id={classes.studiog2} item xs={4}>
          <Item id={classes.img1n}>
             <img src='https://imerit.net/wp-content/uploads/2021/12/iMerit-DataStudio-Hero.jpg' alt=''/>
          </Item>
          <Item id={classes.img2n}>
            <img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' alt=''/>
          </Item>
        </Grid>

      </Grid>

      <Grid id={classes.studio2} container spacing={0}>
 
            <Grid item xs={12}>
              <Item id={classes.studiog1r}>
              <h1 id={classes.Segoe }>  iMERIT DATA STUDIO</h1>
              <p>End-to-end AI data solution leveraging technology and experts-in-the-loop to create high quality data</p>
              </Item>
            </Grid>
            <Grid id={classes.studiog2r} item xs={12}>
              <Item id={classes.imgrespo1}>
                  <img src='https://imerit.net/wp-content/uploads/2021/12/iMerit-DataStudio-Hero.jpg' alt=''/>
              </Item>
              <Item id={classes.imgrespo2}>
                <img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' alt=''/>
              </Item>
            </Grid>

            </Grid>


    </Box>
  );
}
