import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from './self3.module.css';

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
      
      <Grid container spacing={0}className={classes.normalgrid}>
        <Grid item xs={12}>
          <Item id={classes.titlegrid}>
            <h1>HOW DOES iMERIT SELF-SERVE API HELP?</h1>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <img id={classes.chart} src='https://imerit.net/wp-content/uploads/2021/12/iMerit-Self-Serve-API.jpg' alt=''/>
          </Item>
        </Grid>
  
        <Grid item xs={4} >
          <Item id={classes.datagridself}>
           <h2>INTEGRATE WITH DATA PIPELINES</h2>
           <p>The iMerit’s Self-Serve API opens up project setup and configuration options through a RESTFUL API. This allows for a more efficient and more secure way to integrate iMerit into data workflows.</p>
          </Item>
        </Grid>
        <Grid item xs={4} >
          <Item id={classes.progridself}>
           <h2>CREATE CUSTOM PROJECTS</h2>
           <p>Use data workflows to automatically create ready-to-annotate projects. This allows for rapid experimentation and easy scalability as teams find validation in their ML initiatives.</p>
          </Item>
        </Grid>
        <Grid item xs={4} >
          <Item id={classes.buildgridself}>
           <h2>PREPARE OR BUILD PROJECT</h2>
           <p>Use the iMerit’s Self-Serve API to prep projects for annotation, or build projects to facilitate deeper conversations with iMerit Solution Architects on the best annotation strategy.</p>
          </Item>
        </Grid>
    </Grid>
        <Grid container spacing={0} className={classes.respogrid}>
        <Grid item xs={12}>
          <Item id={classes.titlegridself}>
            <h1>HOW DOES iMERIT SELF-SERVE API HELP?</h1>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <img id={classes.chartr} src='https://imerit.net/wp-content/uploads/2021/12/iMerit-Self-Serve-API.jpg' alt=''/>
          </Item>
        </Grid>
              
              <Grid item xs={6}>
                <Item id={classes.datagridselfr}>
                <h2>INTEGRATE WITH DATA PIPELINES</h2>
                <p>The iMerit’s Self-Serve API opens up project setup and configuration options through a RESTFUL API. This allows for a more efficient and more secure way to integrate iMerit into data workflows.</p>
                </Item>
              </Grid>
              <Grid item xs={6} >
                <Item id={classes.progridselfr}>
                <h2>CREATE CUSTOM PROJECTS</h2>
                <p>Use data workflows to automatically create ready-to-annotate projects. This allows for rapid experimentation and easy scalability as teams find validation in their ML initiatives.</p>
                </Item>
              </Grid>
              <Grid item xs={12} >
                <Item id={classes.buildgridselfr}>
                <h2>PREPARE OR BUILD PROJECT</h2>
                <p>Use the iMerit’s Self-Serve API to prep projects for annotation, or build projects to facilitate deeper conversations with iMerit Solution Architects on the best annotation strategy.</p>
                </Item>
              </Grid>
            
      </Grid>
    
    </Box>
  );
}
