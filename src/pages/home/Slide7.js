import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Slide7() {
  return (<div>
    <div className='s7'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Item id='s7grid1'><span className='s7text1'>BANK ON < p className='s7imertis'>iMERITS</p></span>
          <p className='data'>Working with iMerit leads to transformative, solutions-based outcomes for big data initiatives. We leverage the technologies, processes and teams that best solve for specific data enrichment needs. From LiDAR Annotation, Salience Analysis and Data Extraction to a wide variety of Computer Vision, Natural Language Processing and Content Service use cases, iMerit is your extended technology and workforce solution. Partner with us and we will give you vision and the ability to execute at scale.</p></Item>
        </Grid>
        
      </Grid>
    </Box>
    </div>
    </div>
  );
}
