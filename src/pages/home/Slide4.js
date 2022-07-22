import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Slide4() {
  return (<div>
  
  <div className='s4'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} >
        <Grid item xs={12}>
        <Item id='s4studiotext1'>iMERIT DATA STUDIO</Item>
        </Grid>
      
        <Grid item  md={6}>
          <Item id='s4grid4'>
          <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="" id='cube'>
    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
        <img src="https://imerit.net/wp-content/uploads/2021/12/iMerit-GroundControl-hero.jpg" alt="" uk-cover=""  />
        <canvas width="1800" height="1200"></canvas>
    </div>
    <div class="uk-first-column">

        <div class="uk-card-body">
            <span class="uk-card-title1" id='cubetitle'>iMerit Ground Control</span>
        
            <p className='s41text1'>Ground Control is your portal into our comprehensive annotation expertise, workforce scalability and tooling ecosystem. Access project analytics and insights, edge case management and other capabilities through your account.</p>
        
            
        </div>

    </div>
</div>

      </Item>
        </Grid>



        
        <Grid item xs={6} md={6}>
          <Item id='s4grid4'>     <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="" id='cube'>
    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
        <img src="https://imerit.net/wp-content/uploads/2021/11/iMerit-Launches-New-Self-Serve-API-Tool.jpg" alt="" uk-cover=""  />
        <canvas width="1800" height="1200"></canvas>
    </div>
    <div class="uk-first-column">

        <div class="uk-card-body">
            <span class="uk-card-title1" id='cubetitle'>iMERIT SELF-SERVE API

            </span>
        
            <p className='s41text2'>iMerit’s Self-Serve API integrates our capabilities into your data workflow for a secure way to share data, project information, project guidelines, and more with your dedicated iMerit project team.</p>
        
            
        </div>

    </div>
</div>
</Item>
        </Grid>
        
        
        
        <Grid item xs={6} md={6}>
          <Item id='s4grid4'>     <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="" id='cube'>
    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
        <img src="https://imerit.net/wp-content/uploads/2021/12/imerit-EdgeCase-Hero.jpg" alt="" uk-cover=""  />
        <canvas width="1800" height="1200"></canvas>
    </div>
    <div class="uk-first-column">

        <div class="uk-card-body">
            <span class="uk-card-title1" id='cubetitle'>iMerit Edge Case 

            </span>
        
            <p className='s41text3'><p>Build powerful and resilient ML models strengthened by edge cases. Within every dataset, our teams surface the edge cases that ML models will typically break down on. We work with you on the best way to resolve these edge cases as well as similar cases you might see in your projects.</p></p>
        
            
        </div>

    </div>
</div>
</Item>
        </Grid>    
        <Grid item xs={6} md={6}>
          <Item id='s4grid4'>     <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="" id='cube'>
    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
        <img src="https://imerit.net/wp-content/uploads/2021/12/iMerit-PeoplePlatform-Hero.jpg" alt="" uk-cover=""  />
        <canvas width="1800" height="1200"></canvas>
    </div>
    <div class="uk-first-column">

        <div class="uk-card-body">
            <span class="uk-card-title1" id='cubetitle'>iMERIT PEOPLE PLATFORM

            </span>
        
            <p className='s41text2'>iMerit People Platform is a continuous integration and delivery infrastructure for scaling operations. The platform is critical to both optimizing task workflows and skill-matching expert workforces to projects at hand. </p>
        
            
        </div>

    </div>
</div>
</Item>
        </Grid> 
        <Grid item  md={1}></Grid>   
       
      </Grid>
    </Box>
    </div>
   
<div className='s4769'>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
      <Grid item xs={12}>
        <Item id='s4studiotext769'>iMERIT DATA STUDIO</Item>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Item id='s4grid769'>
          <Card >
      <CardActionArea>
        <CardMedia
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/12/iMerit-GroundControl-hero.jpg"
          alt="green iguana"
        />
        <CardContent id='cardheight769'>
          <Typography  component="div" id='card4tittle769'>
           <p className='cubetitle769'>iMerit Ground Control</p>
          </Typography>
          <Typography id='card4boday769'>
          <p className='s41text1769'>Ground Control is your portal into our comprehensive annotation expertise, workforce scalability and tooling ecosystem. Access project analytics and insights, edge case management and other capabilities through your account.</p>
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
          </Item>
        </Grid>
        <Grid item sm={6} xs={12} >
          <Item id='s4grid769'><Card  >
      <CardActionArea>
        <CardMedia
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/11/iMerit-Launches-New-Self-Serve-API-Tool.jpg"
          alt="green iguana"
        />
        <CardContent id='cardheight769'>
          <Typography  component="div" id='card4tittle769'>
           <p className='cubetitle769'>iMERIT SELF-SERVE API</p>
          </Typography>
          <Typography id='card4boday769'>
          <p className='s41text1769'>iMerit’s Self-Serve API integrates our capabilities into your data workflow for a secure way to share data, project information, project guidelines, and more with your dedicated iMerit project team.</p>
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card></Item>
        </Grid>
        <Grid item sm={6} xs={12} >
        <Item id='s4grid769'><Card >
      <CardActionArea>
        <CardMedia
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/12/imerit-EdgeCase-Hero.jpg"
          alt="green iguana"
        />
        <CardContent id='cardheight769'>
          <Typography  component="div" id='card4tittle769'>
           <p className='cubetitle769'>iMerit Edge Case </p>
          </Typography>
          <Typography id='card4boday769'>
          <p className='s41text1769'>Build powerful and resilient ML models strengthened by edge cases. Within every dataset, our teams surface the edge cases that ML models will typically break down on. We work with you on the best way to resolve these edge cases as well as similar cases you might see in your projects.</p>
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card></Item>
        </Grid>
        <Grid item xs={12} sm={6}  >
        <Item id='s4grid769'><Card >
      <CardActionArea>
        <CardMedia
          component="img"
       
          image="https://imerit.net/wp-content/uploads/2021/12/iMerit-PeoplePlatform-Hero.jpg"
          alt="green iguana"
        />
        <CardContent id='cardheight769'>
          <Typography  component="div" id='card4tittle769'>
           <p className='cubetitle769'>iMERIT SELF-SERVE API</p>
          </Typography>
          <Typography id='card4boday769'>
          <p className='s41text1769'>iMerit People Platform is a continuous integration and delivery infrastructure for scaling operations. The platform is critical to both optimizing task workflows and skill-matching expert workforces to projects at hand.</p>
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card></Item>
        </Grid>
      </Grid>
    </Box>
   </div>
      

















    </div>
  );
}

