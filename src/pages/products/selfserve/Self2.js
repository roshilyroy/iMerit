import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from "./self2.module.css";
//import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
 
      <Grid container className={classes.selfgrid2}>
    
        <Grid  item xs={6}>
          <Item className={classes.sgrid3}>
            <img src='https://imerit.net/wp-content/uploads/2021/11/imerit-api.jpeg' alt=''/>
          </Item>
        </Grid>
        <Grid  item xs={6}>
          <Item className={classes.sgrid4}>
            <h2>WHAT IS iMERIT SELF-SERVE API?</h2>
            <p>iMerit’s Self-Serve API is the fastest and most direct way for teams to rapidly spin up and configure their iMerit projects. Once project creation is complete, our Solutions Architects and Delivery Leads schedule time with your teams to understand project outcomes and how we’ll work together to ensure those outcomes.</p>
            <p id='p1'>Using the API gives you access to the following functionality:</p>
            <ul>
              <li>Creating your project details</li>
              <li>Linking your data to the project</li>
              <li>Creating class ontologies</li>
              <li>Assigning annotation types to each class</li>
              <li>Assigning users to your project</li>
              <li>Uploading additional detailed project instructions</li>
              <li>Retrieving project analytics</li>
              <li>Downloading completed data</li>
            </ul>
            <br/><br/><br/>
            <a href='/' id={classes.link}>Access the API documentation here </a>
            <br/>
          </Item>
        </Grid>
   
      </Grid>


      <Grid container className={classes.selfgrid2r}>
    
            <Grid  item xs={12}>
              <Item className={classes.sgrid3}>
                <img src='https://imerit.net/wp-content/uploads/2021/11/imerit-api.jpeg' alt=''/>
              </Item>
            </Grid>
            <Grid  item xs={12}>
              <Item className={classes.sgrid4}>
                <h2>WHAT IS iMERIT SELF-SERVE API?</h2>
                <p>iMerit’s Self-Serve API is the fastest and most direct way for teams to rapidly spin up and configure their iMerit projects. Once project creation is complete, our Solutions Architects and Delivery Leads schedule time with your teams to understand project outcomes and how we’ll work together to ensure those outcomes.</p>
                <p id={classes.p1r}>Using the API gives you access to the following functionality:</p>
                <ul>
                  <li>Creating your project details</li>
                  <li>Linking your data to the project</li>
                  <li>Creating class ontologies</li>
                  <li>Assigning annotation types to each class</li>
                  <li>Assigning users to your project</li>
                  <li>Uploading additional detailed project instructions</li>
                  <li>Retrieving project analytics</li>
                  <li>Downloading completed data</li>
                </ul>
                <br/><br/><br/>
                <a href='/' id={classes.linkr}><p id={classes.access}>Access the API documentation here</p> </a>
                <br/>
              </Item>
            </Grid>

  </Grid>
    </Box>
  );
}



