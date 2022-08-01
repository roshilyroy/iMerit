import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Slide2.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


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
      <div id='dsslide2'>
      <Grid container spacing={0} id='dsslide2grid'>
    
        <Grid  item xs={6}>
          <Item id='dsdatagrid3'>
            <img id='dsdataimg1' src='https://imerit.net/wp-content/uploads/2021/12/imerit-datastudio-high-quality-data.jpg' alt=''/>
            <div id='dsdataredtriangle'> </div> 
            
               <h4 id='dsplaytext'>PLAY VIDEO</h4>
               <span><PlayArrowIcon  id='dsdataplayicon'/></span>

          </Item>
        </Grid>
        <Grid  item xs={6}>
          <Item id='dsdatagrid4'>
            <h2>WHAT IS iMERIT DATA STUDIO?</h2>
            <p>iMerit Data Studio connects the last mile of human-in-the-loop annotation with the agility, flexibility and transparency needed for mission-critical machine learning workflows. iMerit brings applied knowledge, annotation expertise, and annotation infrastructure to every project.</p>
            <p id='dsstudiop1'>Our end-to-end AI data solution, iMerit Data Studio, delivers high-quality data at scale.</p>
            <ul>
              <li>Rapid Team Scalability</li>
              <li>Experts-in-the-Loop</li>
              <li>Tool Inclusive Annotation</li>
              <li>Flexible Data Formats</li>
              <li>Objective Quality Metrics</li>
            </ul>
          </Item>
        </Grid>
   
      </Grid>


      <Grid container spacing={0} id='dsslide2responsive'>
    
    <Grid  item xs={6}>
      <Item id='dsdatagrid3'>
        <img id='dsdataimg1' src='https://imerit.net/wp-content/uploads/2021/12/imerit-datastudio-high-quality-data.jpg' alt=''/>
        <div id='dsdataredtriangle'> </div> 
        
           <h4 id='dsplaytext'>PLAY VIDEO</h4>
           <span><PlayArrowIcon  id='dsdataplayicon'/></span>

      </Item>
    </Grid>
    <Grid  item xs={6}>
      <Item id='dsrdatagrid4'>
        <h2 id='dsrh'>WHAT IS iMERIT DATA STUDIO?</h2>
        <p>iMerit Data Studio connects the last mile of human-in-the-loop annotation with the agility, flexibility and transparency needed for mission-critical machine learning workflows. iMerit brings applied knowledge, annotation expertise, and annotation infrastructure to every project.</p>
        <p id='dsstudiop1'>Our end-to-end AI data solution, iMerit Data Studio, delivers high-quality data at scale.</p>
        <ul>
          <li>Rapid Team Scalability</li>
          <li>Experts-in-the-Loop</li>
          <li>Tool Inclusive Annotation</li>
          <li>Flexible Data Formats</li>
          <li>Objective Quality Metrics</li>
        </ul>
      </Item>
    </Grid>

  </Grid>



      </div>
    </Box>
  );
}



