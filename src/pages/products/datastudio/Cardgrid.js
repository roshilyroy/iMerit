import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import classes from './Slide4.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ width: '100%' }}>
      <div className={classes.slide4cards}>
          <div className={classes.cards}>
      <Grid container rowSpacing={0} columnSpacing={0}>
    <Grid item xs={6}>
          <Item>
        <div className={classes.card1}>
        <Card className={classes.groundcard} sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className={classes.cardtitle}>
            iMERIT GROUND CONTROL
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className={classes.slide4p}>
            Ground control is your portal into our comprehensive annotation expertise, workforce scalablity and
            tooling ecosystem. Access project analytics and insights,edge 
            case management and other capabilities through your account.
          </Typography>
          <Typography variant="h6" className={classes.cardbutton}>
            LEARN MORE
          </Typography>
        </CardContent>
      
        </Box>
        <CardMedia
            component="img"
            className={classes.cardimg}
            image="	https://imerit.net/wp-content/uploads/2021/12/iMerit-GroundControl-hero.jpg"
            alt="ground control"
        />
        </Card>
        </div>

          </Item>
    </Grid>
    <Grid item xs={6}>
          <Item>
          <div className={classes.card2}>
        <Card className={classes.groundcard} sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className={classes.cardtitle}>
            iMERIT SELF- SERVE API
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className={classes.slide4p}>
            iMerit's Self-Serve API integrates our capabilities into your data workfow for a
             secure way to share data, project information, project guidelines, and more with
             your dedicated iMerit project team.
          </Typography>
          <Typography variant="h6" className={classes.cardbutton}>
            LEARN MORE
          </Typography>
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        className={classes.cardimg}
        image="https://imerit.net/wp-content/uploads/2021/11/iMerit-Launches-New-Self-Serve-API-Tool.jpg"
        alt="ground control"
      />
    </Card>
    </div>

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item> <div className={classes.card3}>
    <Card className={classes.groundcard} sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className={classes.cardtitle}>
            iMERIT EDGE CASE
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className={classes.slide4p}>
            Build powerful and resilient ML models will typically break down on.
            We work with you on the best way to resolve these edge cases as well
            as similar cases you might see in your projects.
          </Typography>
          <Typography variant="h6" className={classes.cardbutton}>
            LEARN MORE
          </Typography>
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        className={classes.cardimg}
        image="	https://imerit.net/wp-content/uploads/2021/12/imerit-EdgeCase-Hero.jpg"
        alt="ground control"
      />
    </Card>
    </div>
</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <div className={classes.card4}>
    <Card className={classes.groundcard} sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className={classes.cardtitle}>
            iMERIT PEOPLE PLATFORM
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" className={classes.slide4p}>
           iMerit People Platform is a continuous integration and delivery infrastructure for
            scaling operations. The platform is critical to both optimizing 
            task workflows and skill- matching expert workforces to projects 
            and hand.
          </Typography>
          <Typography variant="h6" className={classes.cardbutton}>
            LEARN MORE
          </Typography>
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        className={classes.cardimg}
        image="https://imerit.net/wp-content/uploads/2021/12/iMerit-PeoplePlatform-Hero.jpg"
        alt="ground control"
      />
    </Card>
    </div>

          </Item>
        </Grid>
      </Grid>
      </div>
<div className={classes.responsive}>
          <Card className={classes.rc1}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://imerit.net/wp-content/uploads/2021/12/iMerit-GroundControl-hero.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.ct}>
                iMERIT GROUND CONTROL
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.cp}>
                Ground control is your portal into our comprehensive annotation expertise, workforce scalablity and
            tooling ecosystem. Access project analytics and insights,edge 
            case management and other capabilities through your account.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.cb}>
              LEARN MORE
              </Button>
            </CardActions>
    </Card>

    <Card className={classes.rc2}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://imerit.net/wp-content/uploads/2021/11/iMerit-Launches-New-Self-Serve-API-Tool.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.ct}>
                iMERIT SELF- SERVE API
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.cp}>
                iMerit's Self-Serve API integrates our capabilities into your data workfow for a
             secure way to share data, project information, project guidelines, and more with
             your dedicated iMerit project team.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.cb}>
              LEARN MORE
              </Button>
            </CardActions>
    </Card>
    <Card className={classes.rc3}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://imerit.net/wp-content/uploads/2021/12/imerit-EdgeCase-Hero.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.ct}>
                iMERIT EDGE CASE
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.cp}>
                Build powerful and resilient ML models strengthened by edge cases that ML models
                will typically break down on.
            We work with you on the best way to resolve these edge cases as well
            as similar cases you might see in your projects.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.cb}>
              LEARN MORE
              </Button>
            </CardActions>
    </Card>

    <Card className={classes.rc4} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://imerit.net/wp-content/uploads/2021/12/iMerit-PeoplePlatform-Hero.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.ct}>
                iMERIT PEOPLE PLATFORM
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.cp}>
                iMerit People Platform is a continuous integration and delivery infrastructure for
            scaling operations. The platform is critical to both optimizing 
            task workflows and skill- matching expert workforces to projects 
            and hand.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.cb}>
              LEARN MORE
              </Button>
            </CardActions>
    </Card>  
            
          </div>
      </div>
    </Box>
  );
}
