import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import './Gridcardtwo.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gridcardtwo() {
  return (
    <div className='med-grid1'>
        <div>
          <h2 className='med-ser'>
            SERVICES
          </h2>
          <br/><br/><br/>
        </div>
       
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      
          <Grid item  xs={2} sm={4} md={4} id='card1'>
            <Item>
               <CardMedia
                   component="img" id='grid-one'
                   image="https://imerit.net/wp-content/uploads/2020/06/Medical-AI@1x-1.jpg" 
                   alt="image" 
                 />
                 <h3 className='h1'>DIGITAL PATHOLOGY</h3>
            <p className='txt1'>iMerit’s Pathologist-led specialized teams annotate cells and tissues on Whole Slide Images (WSI) to help pharmaceutical companies develop next generation products and treatments across a whole host of diseases.</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Medical-video-labeling.jpg" 
                   alt="image" 
                 />
                 <h3 className='h2'>DIGITAL RADIOLOGY</h3>
            <p className='txt2'>iMerit’s Radiologist-led imaging enrichment and annotation teams process tens of thousands of plain films, CTs, MRIs and ultrasound images to produce ground truth data for advanced diagnostic technology.</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/06/Prescription-Handwritten-Transcribed@1x.jpg" 
                   alt="image" 
                 />
                 <h3 className='h3'>MEDICAL TEXT & DOCUMENTS</h3>
            <p className='txt3'>From information extraction to advanced NLP, iMerit’s experts in the medical lexicon dissect text and audio in medical records, digital documents, and clinical trial data to power robotic process automation, clinical decision support algorithms, and virtual assistants.</p>
            </Item>
          </Grid>
      

          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" id="grid-two"
                   image="https://imerit.net/wp-content/uploads/2020/11/Robotic-surgery.jpg" 
                   alt="image" 
                 />
                 <h3 className='h4'>ROBOTIC-ASSISTED SURGERY AND ENDOSCOPY</h3>
            <p className='txt4'>Global leaders in robotics and endoscopy rely on iMerit’s expert computer vision data teams to drive innovation in instrument tracking, lesion detection, and phase identification.</p>
            </Item>
          </Grid>
          <Grid item  xs={2} sm={4} md={4}>
            <Item>
               <CardMedia
                   component="img" 
                   image="https://imerit.net/wp-content/uploads/2020/11/Biomechanics-Sports-medicine.jpg" 
                   alt="image" 
                 />
                 <h3 className='h5'>BEHAVIORAL HEALTH, SPORTS MEDICINE</h3>
            <p className='txt5'>From advanced home monitoring to professional athlete biomechanics, iMerit works with innovative companies to help create advanced solutions in safety and performance</p>
            </Item>
          </Grid>
         

          
         
        
     </Grid>
   </Box>
    
   </div>
  );
       } 