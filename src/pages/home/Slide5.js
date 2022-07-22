import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Slide5() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='s5'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item id='s5grid1'><span className='s5text1'>iMERIT < p className='solution5'>SOULTION</p></span>
          <p className='data'>Data annotation throughput, accuracy, and workflow alignment are the most significant drivers to high performing data strategy outcomes. iMerit leverages advanced tools, machine learning algorithms and workflow best practices to enrich, annotate, and label large volumes of unstructured data. While technology solves for throughput, our managed workforce teams solve for accuracy through their deep industry-specific expertise across Computer Vision, NLP and Content Services.</p>
          <Divider/>
          </Item>       
</Grid>
       </Grid>
    </Box>
    
<div className='laps5'><Box sx={{ flexGrow: 1 }}>
      <Grid   container spacing={2} >
        
<Grid item xs={12} lg={2} md={3}>  
<Item><p className='laptext1'><p id='cvision'>computer Vision</p></p></Item>        
</Grid>
<Grid item lg={3.5} md={4.5} >  
<Item><p className='laptext2'><p>Natural Language processing</p></p></Item>        
</Grid>
<Grid item lg={2} md={4.5}>  
<Item><p className='laptext2'><p>Content Services</p></p></Item>        
</Grid>



       </Grid>
       
    </Box></div>
    <div className='tab5'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid   container spacing={0} >
        
<Grid item xs={12} >  
<Item><Divider  sx={{borderBottomWidth: 10,borderBlockColor:'black'}}/>
<p id='cvision769'>computer Vision</p></Item>        
</Grid>
<Grid item xs={12} >  
<Item><Divider  />
<p id='cvision7692'>Natural Language processing</p></Item>        
</Grid>
<Grid item xs={12} >  
<Item><Divider  />
<p id='cvision7692'>Content Services</p>
<Divider  /></Item>        
</Grid>



       </Grid>
       
    </Box>
    
    </div>




  <div className='avatarimage'><Box id='gridav'sx={{ flexGrow: 1 }}>
      <Grid   id='heightadjust'container spacing={0}>
        <Grid item lg={6} md={5.5} sm={6}>
          <Item id='s5butteraligngrid'><p className='avtext1'>Computer Vision</p>
          <p className='avtext2'>iMerit has labeled, annotated, enriched and segmented over 250 million images and videos that power Computer Vision algorithms. iMerit’s delivery team works with complex edge cases and nuanced taxonomies to give clients an extra advantage.</p>
          <Button variant="outlined" href="#outlined-buttons" id='btns11'>
  Learn More     
  <svg id="button-svg"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="triangle" d="M0.4 0.5 C9.9 0.5 19.39 0.5 28.9 0.5 19.39 13.5 9.9 26.5 0.4 39.5 0.4 26.5 0.4 13.5 0.4 0.5 " fill="none" stroke-width="1" data-original="M0.4,0.5h28.5l-28.5,39V0.5z"  className='svgcolor'></path><line id="line" x1="0" y1="20" x2="0" y2="20" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" className='svgcolor'></line></svg>
<span className='hai'>hai</span></Button></Item>
        </Grid>
        <Grid item lg={6} md={6.5} sm={6}>
          <Item id='grids52'>
<span ><Avatar alt="Remy Sharp" src="https://imerit.net/wp-content/uploads/2020/03/computer-vision.jpg"  id='avatar'/><img src='https://imerit.net/wp-content/themes/imerit/images/violet-triangle.svg' className='imgavtar1'/></span>
</Item>
        </Grid>
        
      </Grid>
    </Box></div>  

    </div>
  );
}

