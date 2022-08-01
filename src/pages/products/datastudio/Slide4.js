import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import classes from './Slide4.module.css';


export default function MediaControlCard() {


  return (<div>
    <div id={classes.card1}>
    <Card id={classes.groundcard} sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" id={classes.cardtitle}>
            iMERIT GROUND CONTROL
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" id={classes.slide4p}>
            Ground control is your portal into our comprehensive annotation expertise, workforce scalablity and
            tooling ecosystem. Access project analytics and insights,edge 
            case management and other capabilities through your account.
          </Typography>
          <Typography variant="h6" id={classes.cardbutton}>
            LEARN MORE
          </Typography>
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        id={classes.cardimg}
        image="	https://imerit.net/wp-content/uploads/2021/12/iMerit-GroundControl-hero.jpg"
        alt="ground control"
      />
    </Card>
    </div>
    

    
</div>
  );
}
