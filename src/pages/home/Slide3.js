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

export default function Slide3() {
  return (<div>
    <div className='s3'>
    <Box sx={{ width: '100%' }}>
      <Grid container columnSpacing={{ xs:1}}>
        <Grid item lg={12} md={12}>
          <Item id='s3grid1'><span className='s3text1'>The <span className='s3i'>i</span>Merit Advantage</span>
          <p className='s3text2'>iMerit’s data solution brings together technology, talent, and techniques to provide high-quality data and precision at the scale of production required. We meet the need for a consistent supply of data in the process of AI development, from the training data all the way to the validation, and deployment.</p></Item>
        </Grid>
        
        <Grid item lg={4} md={4} xs={6}>
        <Item id='s3grid21'>
            <div className='gradient-line'></div>
            <span className='s32text1'> Technology</span>
            <p  className='s32text2'>iMerit leverages technology to enable rapid scalability, optimum resource utilization, and access analytics and insights to power data-driven decisions. Depending on the client’s needs and goals, iMerit can use proprietary data annotation tools, the client’s tools, or any third-party tools.</p>
          </Item>
          
        </Grid>
        <Grid item md={4} xs={6}>
        <Item id='s3grid21'>
            <div className='gradient-line'></div>
            <span className='s32text1'>TALENT</span>
            <p  className='s32text2'>Our full-time expert workforce undergoes specialized training and has vast annotation experience in different domains. iMerit’s Solution Architects draw upon their deep expertise to help define the requirements, training, workflow, feedback loops, and data validation.</p>
          </Item>

        </Grid>
        <Grid item md={4} xs={12}>
        <Item id='s3grid21'>
            <div className='gradient-line' id='tech769'></div>
            <span className='s32text1' id='tech769'>TECHNIQUE</span>
            <p  className='s32text2' id='tech769'>We create customized workflows that integrate tools and processes, real-time feedback and quality control mechanisms, edge case insights, and enterprise-grade data security protocols. Our end-to-end pipeline builds in process efficiencies to save time and reduce costs.</p>
          </Item>
        </Grid>
        
             </Grid>
    </Box>
    
      </div>
      <div>
    <video src="https://imerit.net/wp-content/uploads/2021/08/Loop-Home-Wide-V6.mp4" width="1920" height="1080" controls="" playsinline="" uk-video="automute: true" class=""></video>
    </div>
    </div>
    
  );
}


