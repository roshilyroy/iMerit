import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ground3.css';

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
      <div className='rcg1'>
      <Grid container spacing={2} className='gg1gc'>
        <Grid item xs={12}>
          <Item id='titlegrid1gc'>
            <h1>HOW DOES iMERIT GROUND CONTROL HELP?</h1>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id='datagridgc'>
           <h2>ECOSYSTEM ACCESS</h2>
           <p>Access the output of your projects from any annotation tool through a single source of truth.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id='progridgc'>
           <h2>EDGE CASE MANAGEMENT</h2>
           <p>Understand how edge cases in your datasets can impact your project guidelines and ML models.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id='buildgridgc'>
           <h2>ACTIONABLE ANALYTICS</h2>
           <p>Actionable analytics, progress metrics and insights that drive proactive project management.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id='mlgridgc'>
           <h2>ML DATA PIPELINE INTEGRATION</h2>
           <p>Automate dataset uploads, design new projects, build your review teams and export from Ground Control through the iMerit’s Self-Serve API.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id='compgridgc'>
           <h2>COMPREHENSIVE ANNOTATION</h2>
           <p>Ground Control is a single source of truth for any type of Computer Vision or NLP project.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id='customgridgc'>
           <h2>CUSTOMIZABLE DATA EXPORT</h2>
           <p>When your project data is complete, export your data in the format that works best for your needs.</p>
          </Item>
        </Grid>
      </Grid>
      </div>
      
      
             <div className='rcg'>
                  <Grid container spacing={2} className='gg2gc'>
                    <Grid item xs={12}>
                      <Item id='titlegrid1gc'>
                        <h1>HOW DOES iMERIT GROUND CONTROL HELP?</h1>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item id='datagridgc'>
                      <h2>ECOSYSTEM ACCESS</h2>
                      <p>Access the output of your projects from any annotation tool through a single source of truth.</p>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item id='progridgc'>
                      <h2>EDGE CASE MANAGEMENT</h2>
                      <p>Understand how edge cases in your datasets can impact your project guidelines and ML models.</p>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item id='buildgridgc'>
                      <h2>ACTIONABLE ANALYTICS</h2>
                      <p>Actionable analytics, progress metrics and insights that drive proactive project management.</p>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item id='mlgridgc'>
                      <h2>ML DATA PIPELINE INTEGRATION</h2>
                      <p>Automate dataset uploads, design new projects, build your review teams and export from Ground Control through the iMerit’s Self-Serve API.</p>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item id='compgridgc'>
                      <h2>COMPREHENSIVE ANNOTATION</h2>
                      <p>Ground Control is a single source of truth for any type of Computer Vision or NLP project.</p>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item id='customgridgc'>
                      <h2>CUSTOMIZABLE DATA EXPORT</h2>
                      <p>When your project data is complete, export your data in the format that works best for your needs.</p>
                      </Item>
                    </Grid>
                  </Grid>
             </div>
    </Box>
  );
}
