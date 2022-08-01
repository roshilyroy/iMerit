import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from './ground1.module.css';


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
      <Grid className={classes.cslide1} container spacing={0}>
 
        <Grid item xs={8}>
          <Item className={classes.controlgrid1}>
          <h1 className={classes.UI}> iMERIT GROUND CONTROL</h1>
          <p>Single source of truth for managing data annotation workflows through reporting, analytics and insights</p>
          </Item>
        </Grid>
        <Grid className={classes.grid2b} item xs={4}>
          <Item id={classes.img1g}>
             <img src='https://imerit.net/wp-content/uploads/2021/12/iMerit-GroundControl-hero.jpg' alt=''/>
          </Item>
          <Item id={classes.img2g}>
            <img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' alt=''/>
          </Item>
        </Grid>

      </Grid>
      <Grid className={classes.cslide2} container spacing={0}>
 
            <Grid item xs={12}>
              <Item className={classes.controlgrid1}>
              <h1 className={classes.UI}> iMERIT GROUND CONTROL</h1>
              <p>Single source of truth for managing data annotation workflows through reporting, analytics and insights</p>
              </Item>
            </Grid>
            <Grid className={classes.grid2b} item xs={12}>
              <Item id={classes.gimg1}>
                  <img src='https://imerit.net/wp-content/uploads/2021/12/iMerit-GroundControl-hero.jpg' alt=''/>
              </Item>
              <Item id={classes.gimg2}>
                <img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' alt=''/>
              </Item>
            </Grid>

</Grid> 
    </Box>
  );
}
