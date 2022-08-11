import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './MedAi.css';

   
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
export default function MedAi() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className='MedAi' container spacing={0}>
        <Grid item xs={8}>
          <Item className='grid-Mai'>
          <h1 className="Med"> MEDICAL AI</h1>
          <p className='Medpara'>iMerit collaborates to deploy AI and Machine Learning in the Computer Vision, Natural Language Processing and Content Services ecosystems by enriching, annotating and labeling data.</p>
          </Item>
        </Grid>
        <Grid className='grid-Ai' item xs={4}>
          <Item id='imageAi'>
             <img src='https://imerit.net/wp-content/uploads/2020/06/Medical-AI@1x-1.jpg' alt=''/>
          </Item>
          <Item id='image-Medai1'>
            <img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' alt=''/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
