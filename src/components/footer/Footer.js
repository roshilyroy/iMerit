import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './Footer.css'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';


import Divider from '@mui/material/Divider';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Footer() {
  return (<div>
    <div className='footer'><Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item lg={5} md={5}>
        <Item id='foo1'><Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item lg={12} md={12}>
          <Item id='foo1'><img src='https://imerit.net/wp-content/uploads/2020/03/iMerit-logo.png' alt=''className='fooimg' /></Item>
        </Grid>
        
        <Grid item lg={12} md={12}>
          <Item id='foo1'><br/><p className='footext1'>SUBSCRIBE TO OUR NEWSLETTER</p></Item>
        </Grid>
        <Grid item lg={12} md={12}>
          <Item id='foo1'><p style={{'color':'black','fontSize':'1.1rem'}}>Company Email <span style={{'color':'red'}}>*</span></p><Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="" id="fullWidth" />
    </Box></Item>
        </Grid>
        <Grid item lg={12} md={12}>
        <Item id='foo1'><Checkbox {...label} /><span style={{'color':'black','fontSize':'1rem'}}>I understand that I am agreeing to receive email from iMerit.*</span></Item>
      </Grid>
      <Grid item lg={12} md={12}>
        <Item id='foo1'><span style={{'color':'black','fontSize':'1rem'}}>You may unsubscribe at any time. For more information please review our</span>       
        <a href="https://imerit.net/privacy-policy/" target="_blank" rel="noopener"><p style={{'fontSize':'1rem'}}>Privacy Policy</p></a></Item>
      </Grid>
      <Grid item ld={12} md={12}>
        <Item id='foo1'><br/>
        <Button variant="contained" id='subscribe'>
        subscribe
      </Button></Item>
      </Grid>
      </Grid>
    </Box></Item>
      </Grid>
      <Grid item lg={3} md={1}>
       
      </Grid>
      <Grid item xs={4} lg={4} md={5}>
        <Item id='iconsfoo'>
        <Box sx={{ flexGrow: 1 }}><Grid container spacing={2}>
  <Grid item  lg={12} md={12}>
    <Item id='iconsfoo'>

    <i class="fa fa-linkedin" id='linked'></i>
    <i class="fa fa-youtube" id='linked'></i>
    <i class="fa fa-twitter" id='linked'></i>

     






    </Item>
  </Grid>
  <Grid item xs={6} lg={8} md={8.4}>
    <Item ><p className='foocompny'>company</p>
    <p className='fooaboutus'>About us</p>
    <p className='fooaboutus'>Investors</p>
    <p className='fooaboutus'>Careers</p>
    <p className='fooaboutus'>Awards & Recognition</p>
    <p className='fooaboutus'>Compliance & Certifications</p>
    <p className='fooaboutus'>Social Impact</p>
    <p className='fooaboutus'>Privacy & Whistleblower Policy</p>
    <p className='fooaboutus'>Environmental & Social Policy</p>
    <p className='fooaboutus'>AI Ethics Policy
</p></Item>
  </Grid>
  <Grid item xs={6} lg={4} md={3.6}>
    <Item ><p className='foocontact'>Contact us</p>
    <p className='fooinfo'>info@imerit.net</p>
    <p className='fooinfo'>+1(650)777-7857</p></Item>
  </Grid>
  
</Grid></Box>
        </Item>
      </Grid>
      
    </Grid>
    
  </Box>
  <Divider/>
<p className='footelast'>iMerit @2020 | Privacy & Whistleblower Policy</p>
  </div>
  <div className='footer769'>
  <Grid container spacing={0}>
  <Grid item xs={12} >
    <Item id='foo7691'><img src='https://imerit.net/wp-content/uploads/2020/03/iMerit-logo.png'  alt='' className='footerimg769'></img>
    <img src='https://imerit.net/wp-content/uploads/2020/03/iMerit-logo.png'  alt='' className='footerimg426'></img></Item>
  </Grid>
  <Grid item xs={12} >
    <Item id='foo7692'>


    <i class="fa fa-linkedin" id='linked'></i>
    <i class="fa fa-youtube" id='linked'></i>
    <i class="fa fa-twitter" id='linked'></i>





    </Item>
  </Grid>
  <Grid item xs={12} >
    <Item><p className='foosub769'>Subscribe to our newsletter</p></Item>
  </Grid>
  <Grid item xs={12} >
  <Item id='foo1'><p style={{'color':'black','fontSize':'1.1rem'}}>Company Email <span style={{'color':'red'}}>*</span></p><Box
      sx={{
        width:600,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="" id="fullWidth" />
    </Box></Item>
  </Grid>
  <Grid item xs={12} >
        <Item id='foo1'><Checkbox {...label} /><span style={{'color':'black','fontSize':'1rem'}}>I understand that I am agreeing to receive email from iMerit.<span style={{'color':'red'}}>*</span></span></Item>
      </Grid>
      <Grid item xs={12} >
        <Item id='foo1'><span style={{'color':'black','fontSize':'1rem'}}>You may unsubscribe at any time. For more information please review our       
        <a href="https://imerit.net/privacy-policy/" target="_blank" rel="noopener"><span style={{'fontSize':'1rem'}}> Privacy Policy</span></a></span> </Item>
      </Grid>
      <Grid item xs={12} >
        <Item id='foo1'><br/>
        <Button variant="contained" id='subscribe'>
        subscribe
      </Button></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><p className='foocompny'>company</p>
    <p className='fooaboutus'>About us</p>
    <p className='fooaboutus'>Investors</p>
    <p className='fooaboutus'>Careers</p>
    <p className='fooaboutus'>Awards & Recognition</p>
    <p className='fooaboutus'>Compliance & Certifications</p>
    <p className='fooaboutus'>Social Impact</p>
    <p className='fooaboutus'>Privacy & Whistleblower Policy</p>
    <p className='fooaboutus'>Environmental & Social Policy</p>
    <p className='fooaboutus'>AI Ethics Policy
</p></Item>
        
      </Grid>
      <Grid item xs={6} >
    <Item ><p className='foocontact'>Contact us</p>
    <p className='fooinfo'>info@imerit.net</p>
    <p className='fooinfo'>+1(650)777-7857</p></Item>
  </Grid>

  
</Grid>
<Divider className='divider769'/>
<p className='footelast'>iMerit @2020 | Privacy & Whistleblower Policy</p>
    </div>


  </div>
  )
}

export default Footer