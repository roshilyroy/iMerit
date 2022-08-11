import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardslideOne.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function CardslideOne() {
  return (
    <Box sx={{ width: '100%' }}>
          <div className='cards'>
      <Grid container rowSpacing={0} columnSpacing={0}>
    <Grid item xs={6}>
          <Item>
        <div className='card1'>
        <Card className='groundcard' sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle'>
          AUTONOMOUS VEHICLES
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide4p'>
          iMerit’s advanced workforce extracts value from 2D and 3D images and video and provides an end-to-end data solution, from pre-annotation processing to dataset validation.          </Typography>
          <Typography variant="h6" className='cardbutton'>
            LEARN MORE
          </Typography>
        </CardContent>
        </Box>
        <CardMedia
            component="img"
            className='cardimg'
            image=" https://imerit.net/wp-content/uploads/2020/06/Object-Tracking-in-Video@1x.jpg"
            alt="ground control"
        />
        </Card>
        </div>
          </Item>
    </Grid>
    <Grid item xs={6}>
          <Item>
          <div className='card2'>
        <Card className='groundcard' sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle'>
          GEOSPATIAL TECHNOLOGY
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide4p'>
          The iMerit workforce gathers relevant data points from remote sensing datasets such as satellite, aerial, and drone imagery to power the development of AI-driven geospatial technology.
          </Typography>
          <Typography variant="h6" className='cardbutton'>
            LEARN MORE
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        className='cardimg'
        image="https://imerit.net/wp-content/uploads/2020/06/Geospatial-Image-Classification@1x.jpg"
        alt="ground control"
      />
    </Card>
    </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item> <div className='card3'>
    <Card className='groundcard' sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle'>
          MEDICAL AI
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide4p'>
          iMerit’s specialized enrichment teams are trained twice, first on the company's tools and technology and second within the domain itself. This knowledge base enables quality work with nuanced use cases.
          </Typography>
          <Typography variant="h6" className='cardbutton'>
            LEARN MORE
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        className='cardimg'
        image=" https://imerit.net/wp-content/uploads/2020/06/Medical-AI@1x-1.jpg"
        alt="ground control"
      />
    </Card>
    </div>
</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <div className='card4'>
    <Card className='groundcard' sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle'>
          FINANCE & INSURANCE TECH
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide4p'>
          Experienced iMerit teams unlock the intelligence contained in visual and text datasets to help companies implement Machine Learning and Robotic Process automation for increased efficiency.
          </Typography>
          <Typography variant="h6" className='cardbutton'>
            LEARN MORE
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        className='cardimg'
        image="https://imerit.net/wp-content/uploads/2020/06/Bounding-Box@1x-1.jpg"
        alt="ground control"
      />
    </Card>
    </div>
    
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item> <div className='card5'>
    <Card className='groundcard' sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle'>
          RETAIL
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide4p'>
          iMerit data annotation services help merchants realize compelling CX for e-commerce and other digital platforms with organized, searchable and relevant data.
          </Typography>
          <Typography variant="h6" className='cardbutton'>
            LEARN MORE
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        className='cardimg'
        image=" https://imerit.net/wp-content/uploads/2020/06/Categorization@1x-1.jpg"
        alt="ground control"
      />
    </Card>
    </div>
</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <div className='card6'>
    <Card className='groundcard' sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className='cardtitle'>
          GOVERNMENT
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className='slide4p'>
          iMerit’s secure and monitored facilities offer a reliable and efficient solution for sensitive data that requires processing for the public sector at the federal, state and local level.
          </Typography>
          <Typography variant="h6" className='cardbutton'>
            LEARN MORE
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        className='cardimg'
        image="https://imerit.net/wp-content/uploads/2020/06/Keypoint-Annotation@1x-1.jpg"
        alt="ground control"
      />
    </Card>
    </div>
    
          </Item>
        </Grid>
      </Grid>
      </div>
    </Box>
  );
}