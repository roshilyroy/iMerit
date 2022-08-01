import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from "./self1.module.css";


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
      <Grid className={classes.selfslide1} container spacing={0}>
 
        <Grid item xs={8} >
          <Item className ={classes.selfgrid1}>
          <h1 className={classes.Symbol }>  iMERIT SELF-SERVE API</h1>
          <p>Fast and easy way to share data and requirements for launching data annotation projects</p>
          </Item>
        </Grid>
        <Grid className={classes.slide1grid2} item xs={4} >
          <Item id={classes.img1s}>
             <img src='https://imerit.net/wp-content/uploads/2021/11/iMERIT-Self-Serve-API.jpg' alt=''/>
          </Item>
          <Item id={classes.img2s}>
            <img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' alt=''/>
          </Item>
        </Grid>

      </Grid>
          
          <Grid className={classes.selfslide2} container spacing={0}>
 
            <Grid item xs={12} >
              <Item className={classes.selfgrid1}>
              <h1 className={classes.Symbol }>  iMERIT SELF-SERVE API</h1>
              <p>Fast and easy way to share data and requirements for launching data annotation projects</p>
              </Item>
            </Grid>
            <Grid className={classes.grid2r} item xs={12} >
              <Item id={classes.img1r}>
                  <img src='https://imerit.net/wp-content/uploads/2021/11/iMERIT-Self-Serve-API.jpg' alt=''/>
              </Item>
              <Item id={classes.img2r}>
                <img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' alt=''/>
              </Item>
            </Grid>
            
            </Grid>
    </Box>
  );
}
