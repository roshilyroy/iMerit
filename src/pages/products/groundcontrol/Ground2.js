import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import classes from "./ground2.module.css";

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
      <div className={classes.gcslide2}>
      <Grid container spacing={0} className={classes.gc11}>
    
        <Grid  item xs={6}>
          <Item className={classes.gcgroundgrid3}>
            <img className={classes.gcground3img2} src='https://imerit.net/wp-content/uploads/2021/12/GroundControl-fastest-path-to-resilient-ml-data.jpg' alt=''/>
            <div className={classes.gcgroundredtriangle}>
            <span><PlayArrowIcon  className='gcgroundplayicon'/></span>
               <h4>PLAY VIDEO</h4>
               </div> 
          </Item>
        </Grid>
        <Grid  item xs={6}>
          <Item className={classes.gcgroundgrid4}>
            <h2>WHAT IS iMERIT GROUND CONTROL?</h2>
            <p>Ground Control is your fastest path to resilient machine learning data workflows. Focus on your goals, and we’ll take over the rest.</p>
            <p>iMerit Ground Control is a gateway to our tooling ecosystem, scalable infrastructure and comprehensive annotation expertise.
               Gain complete control over your project’s design, edge case insights and workflow analytics
                 to move fast toward your Machine Learning production goals.</p>
            <p id={classes.gcp1}>Our experienced teams:</p>
            <ul>
              <li>Know which tools and processes clients need to deliver the best outcome for their projects</li>
              <li>Evaluate the potential challenges, edge cases possibilities and workflows behind a project</li>
              <li>Leverage our partner ecosystem to secure the best tool for the project’s needs</li>
            </ul>
          </Item>
        </Grid>
   
      </Grid>

      <Grid container spacing={0} className={classes.gc22}>
    
    <Grid  item xs={6}>
      <Item className={classes.gcgroundgrid3}>
        <img className={classes.gcground3img2} src='https://imerit.net/wp-content/uploads/2021/12/GroundControl-fastest-path-to-resilient-ml-data.jpg' alt=''/>
        <div className={classes.gcgroundredtriangle}>
        <span><PlayArrowIcon  className={classes.gcgroundplayicon}/></span>
           <h4>PLAY VIDEO</h4>
           </div> 
      </Item>
    </Grid>
    <Grid  item xs={6}>
      <Item className={classes.gcgroundgrid4}>
        <h2>WHAT IS iMERIT GROUND CONTROL?</h2>
        <p>Ground Control is your fastest path to resilient machine learning data workflows. Focus on your goals, and we’ll take over the rest.</p>
        <p>iMerit Ground Control is a gateway to our tooling ecosystem, scalable infrastructure and comprehensive annotation expertise.
           Gain complete control over your project’s design, edge case insights and workflow analytics
             to move fast toward your Machine Learning production goals.</p>
        <p id={classes.gcp1}>Our experienced teams:</p>
        <ul>
          <li>Know which tools and processes clients need to deliver the best outcome for their projects</li>
          <li>Evaluate the potential challenges, edge cases possibilities and workflows behind a project</li>
          <li>Leverage our partner ecosystem to secure the best tool for the project’s needs</li>
        </ul>
      </Item>
    </Grid>

  </Grid>
      </div>
    </Box>
  );
}



