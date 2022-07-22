import React from 'react'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { useHistory } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';


import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import Drawe from './Drawe'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';










function Header() {

 
  const[openDrawer,setopenDrawer]=useState(false)
    
  const [anchorEl, setAnchorEl] =useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [servicesMoreAnchorEl, setServiceMoreAnchorEl] = useState(null);
  const [industriesMoreAnchorEl, setIndustryMoreAnchorEl] = useState(null);
  const [resourseMoreAnchorEl, setResourecMoreAnchorEl] = useState(null);


const handlePopoverOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handlePopoverClose = () => {
  setAnchorEl(null);
};

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleClick2 = (event) => {
    setServiceMoreAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setServiceMoreAnchorEl(null);
  }; 
  const handleClick3 = (event) => {
    setIndustryMoreAnchorEl(event.currentTarget);
  };
  const handleClose3 = () => {
    setIndustryMoreAnchorEl(null);
  };
  const handleClick4 = (event) => {
    setResourecMoreAnchorEl(event.currentTarget);
  };
  const handleClose4 = () => {
    setResourecMoreAnchorEl(null);
  }; 
  

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isServiceMenuOpen = Boolean(servicesMoreAnchorEl);
  const isIndustries = Boolean(industriesMoreAnchorEl);
  const isResource= Boolean(resourseMoreAnchorEl);


const open = Boolean(anchorEl);
  const theme =useTheme();
  console.log(theme);
  const isMatch =useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{backgroundColor:'white',color:'black',border:'none'}}>
          <Toolbar>
            {isMatch ? (<>
                         
              <Link to="/">  <img src='https://imerit.net/wp-content/themes/imerit/images/imerit-logo.svg' alt='' className='asus1'/></Link>
              <Link to="/contact"><button type="button" className='specialcont' >Contact us</button> </Link>
              <Link to="/contact"><Button variant="outlined" id='Contactmob' >Contact Us <svg id="button-svg"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="triangle" d="M0.4 0.5 C9.9 0.5 19.39 0.5 28.9 0.5 19.39 13.5 9.9 26.5 0.4 39.5 0.4 26.5 0.4 13.5 0.4 0.5 " fill="none" stroke="#E33D3B" stroke-width="1" data-original="M0.4,0.5h28.5l-28.5,39V0.5z" style={{stroke: '#2c2f3b'}}></path><line id="line" x1="0" y1="20" x2="0" y2="20" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: 'rgb(227, 61, 59)'}}></line></svg>
<span style={{color:'white'}}>hai</span> </Button></Link>
              
             
              
<Drawe/>
              
              </>):(<>          
                <Link to="/"  className='imageicon'><img src='https://imerit.net/wp-content/uploads/2020/03/iMerit-logo.png' alt='' className='asus' /></Link> &nbsp;
                <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Products
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={handleClose}><Link to="/datastudio" >Data Studio</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/selfserve" >Self-serve api</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/groundcontrol" >Ground Control</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/edge" >Edge Case</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/people" >People Platform</Link></MenuItem>

      
      </Menu>&nbsp;

      <Button
        id="basic-button1"
        aria-controls={isMobileMenuOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isMobileMenuOpen ? 'true' : undefined}
        onClick={handleClick1}
      >
        Solutions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={mobileMoreAnchorEl}
        open={isMobileMenuOpen}
       
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem onClick={handleClose1}><Link to="/solution" >Solution overview</Link></MenuItem>
          <MenuItem onClick={handleClose1}><Link to="/computer" >Computer Vision</Link></MenuItem>
          <MenuItem onClick={handleClose1}><Link to="/natural" >Natural language processing</Link></MenuItem>
          <MenuItem onClick={handleClose1}><Link to="/content" >Content Services</Link></MenuItem>
      </Menu>&nbsp;
      


      <Button
        id="basic-button2"
        aria-controls={isServiceMenuOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isServiceMenuOpen ? 'true' : undefined}
        onClick={handleClick2}
      >
        Services
      </Button>
      <Menu
        id="basic-menu2"
        anchorEl={servicesMoreAnchorEl}
        open={isServiceMenuOpen}
       
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button2',
        }}
      >
        <MenuItem onClick={handleClose2}><Link to="/image" >Image Annotation</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/video" >Video Annotation</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/text" >Text Annotation</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/audio" >Audio transcription</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/data" >Data Annotation</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/lidar" >Lidar Annotation</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/sentiment" >Sentiment Analysis</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/content-moderation" >Content Moderation</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/product" >Product Categorization</Link></MenuItem>
          <MenuItem onClick={handleClose2}><Link to="/image-segmentation" >Image Segmentation</Link></MenuItem>
      </Menu>&nbsp;
              



      <Button
        id="basic-button3"
        aria-controls={isIndustries ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isIndustries ? 'true' : undefined}
        onClick={handleClick3}
      >
        Industries
      </Button>
      <Menu
        id="basic-menu3"
        anchorEl={industriesMoreAnchorEl}
        open={isIndustries}
       
        onClose={handleClose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button3',
        }}
      >
        <MenuItem onClick={handleClose3}><Link to="/industries" >Industries Overview</Link></MenuItem>
          <MenuItem onClick={handleClose3}><Link to="/autonomous" >Autonomous Vehicles</Link></MenuItem>
          <MenuItem onClick={handleClose3}><Link to="/geospatial" >Geospatial technology</Link></MenuItem>
          <MenuItem onClick={handleClose3}><Link to="/medical" >Medical ai</Link></MenuItem>
          <MenuItem onClick={handleClose3}><Link to="/financial" >Financial services</Link></MenuItem>
          <MenuItem onClick={handleClose3}><Link to="/commerce" >Commerce</Link></MenuItem>
          <MenuItem onClick={handleClose3}><Link to="/government" >Government</Link></MenuItem>
          <MenuItem onClick={handleClose3}><Link to="/agricultural" >Agricultural ai</Link></MenuItem>
      </Menu>&nbsp;
  




      <Button
        id="basic-button4"
        aria-controls={isResource ? 'basic-menu4' : undefined}
        aria-haspopup="true"
        aria-expanded={isResource ? 'true' : undefined}
        onClick={handleClick4}
      >
        Resources
      </Button>
      <Menu
        id="basic-menu4"
        anchorEl={resourseMoreAnchorEl}
        open={isResource}
       
        onClose={handleClose4}
        MenuListProps={{
          'aria-labelledby': 'basic-button4',
        }}
      >
   <MenuItem onClick={handleClose4}><Link to="/content-library" >Content Library</Link></MenuItem>
          <MenuItem onClick={handleClose4}><Link to="/mldataops" >Ml Dataops summit</Link></MenuItem>
          <MenuItem onClick={handleClose4}><Link to="/women" >Women in tech</Link></MenuItem>
          <MenuItem onClick={handleClose4}><Link to="/news" >News</Link></MenuItem>
          <MenuItem onClick={handleClose4}><Link to="/use" >Use case video</Link></MenuItem>
          <MenuItem onClick={handleClose4}><Link to="/case" >Case studies</Link></MenuItem>
          <MenuItem onClick={handleClose4}><Link to="/blog" >Blog</Link></MenuItem>
          <MenuItem onClick={handleClose4}><Link to="/partners" >Partners</Link></MenuItem>
          <MenuItem onClick={handleClose4}><Link to="/working" >Working with us</Link></MenuItem>
      </Menu>&nbsp;

      <Link to="/contact" ><Button  id='basic-button5'  
      >
      Contact Us
      </Button></Link> &nbsp;

  
     

</>)}
          
           
           



          </Toolbar>
        </AppBar>
      </React.Fragment>
     
    </div>
  )
}

export default Header