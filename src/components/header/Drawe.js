import React from 'react'
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';

const Drawe=() => {
  
    const[openDrawer,setopenDrawer]=useState(false);
    const [anchorEl, setAnchorEl] =useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);




    const [opens, setOpens] = React.useState(true);

  const handleClicks = () => {
    setOpens(!opens);
  };
  const [opensa, setOpensa] = React.useState(true);

  const handleClicksa = () => {
    setOpensa(!opensa);
  };
  const [opensb, setOpensb] = React.useState(true);

  const handleClicksb = () => {
    setOpensb(!opensb);
  };
  const [opensc, setOpensc] = React.useState(true);

  const handleClicksc = () => {
    setOpensc(!opensc);
  };
  const [opensd, setOpensd] = React.useState(true);

  const handleClicksd = () => {
    setOpensd(!opensd);
  };


  
    
    
  return (
    <div>
        <React.Fragment >
            <Drawer anchor='top' open={openDrawer}
            Close={()=>setopenDrawer(false)}  >
             <span>  <Link to="/">  <img src='https://imerit.net/wp-content/themes/imerit/images/imerit-logo.svg' alt='' className='imerit1'/></Link>
             <Link to="/contact"><button type="button" className='specialcont1' >Contact us</button> </Link>
              <Link to="/contact"><Button variant="outlined" id='Contactmob' >Contact Us <svg id="button-svg"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="triangle" d="M0.4 0.5 C9.9 0.5 19.39 0.5 28.9 0.5 19.39 13.5 9.9 26.5 0.4 39.5 0.4 26.5 0.4 13.5 0.4 0.5 " fill="none" stroke="#E33D3B" stroke-width="1" data-original="M0.4,0.5h28.5l-28.5,39V0.5z" style={{stroke: '#2c2f3b'}}></path><line id="line" x1="0" y1="20" x2="0" y2="20" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: 'rgb(227, 61, 59)'}}></line></svg>
<span style={{color:'white'}}>hai</span> </Button></Link>

                 <CloseIcon  onClick={()=>setopenDrawer(false)} className='closeicon'>
                                          </CloseIcon></span>

                                          <List>
      <ListItem>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
      
      <ListItemButton onClick={handleClicks}>
      
        <ListItemText primary="products" id='productbtn'/>
        {opens ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      < Collapse in={opens} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
           
          <List>
            <ListItem>
            <Link to="/datastudio" >Data Studio</Link>
            </ListItem>
            <ListItem>
            <Link to="/selfserve" >Self-serve api</Link>
            </ListItem>
            <ListItem>
            <Link to="/groundcontrol" >Ground Control</Link>
           </ListItem>
           <ListItem>
           <Link to="/edge" >Edge Case</Link>
           </ListItem>
           <ListItem>
           <Link to="/people" >People Platform</Link>
           </ListItem>
          </List>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
</ListItem>
<ListItem>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nava"
      aria-labelledby="nested-list-subheader"
      
    >
      
      <ListItemButton onClick={handleClicksa}>
       
        <ListItemText primary="Soultions" />
        {opensa ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      < Collapse in={opensa} Close={()=>setOpensa(opensa)} >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
           
          <List>
            <ListItem>
            <Link to="/solution" >Solution overview</Link>
            </ListItem>
            <ListItem>
            <Link to="/computer" >Computer Vision</Link>
            </ListItem>
            <ListItem>
            <Link to="/natural" >Natural language processing</Link>
           </ListItem>
           <ListItem>
           <Link to="/content" >Content Services</Link>
           </ListItem>
           
          </List>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
</ListItem>
<ListItem>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="navb"
      aria-labelledby="nested-list-subheader"
      
    >
      
      <ListItemButton onClick={handleClicksb}>
       
        <ListItemText primary="Services" />
        {opensb ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      < Collapse in={opensb} Close={()=>setOpensb(opensb)} >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
           
          <List>
            <ListItem>
            <Link to="/image" >Image Annotation</Link>
            </ListItem>
            <ListItem>
            <Link to="/video" >Video Annotation</Link>
            </ListItem>
            <ListItem>
            <Link to="/text" >Text Annotation</Link>
           </ListItem>
           <ListItem>
           <Link to="/audio" >Audio transcription</Link>
           </ListItem>
           <ListItem>
           <Link to="/data" >Data Annotation</Link>
           </ListItem>
           <ListItem>
           <Link to="/lidar" >Lidar Annotation</Link>
           </ListItem>
           <ListItem>
           <Link to="/sentiment" >Sentiment Analysis</Link>
           </ListItem>
           <ListItem>
           <Link to="/content-moderation" >Content Moderation</Link>
           </ListItem>
           <ListItem>
           <Link to="/content-moderation" >Content Moderation</Link>
           </ListItem>
           <ListItem>
           <Link to="/image-segmentation" >Image Segmentation</Link>
           </ListItem>
          </List>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
</ListItem>
<ListItem>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="navc"
      aria-labelledby="nested-list-subheader"
      
    >
      
      <ListItemButton onClick={handleClicksc}>
       
        <ListItemText primary="Industries" />
        {opensc ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      < Collapse in={opensc} Close={()=>setOpensc(opensc)} >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
           
          <List>
            <ListItem>
            <Link to="/industries" >Industries Overview</Link>
            </ListItem>
            <ListItem>
            <Link to="/autonomous" >Autonomous Vehicles</Link>
            </ListItem>
            <ListItem>
            <Link to="/medical" >Medical ai</Link>
           </ListItem>
           <ListItem>
           <Link to="/financial" >Financial services</Link>
           </ListItem>
           <ListItem>
           <Link to="/commerce" >Commerce</Link>
           </ListItem>
           <ListItem>
           <Link to="/government" >Government</Link>
           </ListItem>
           <ListItem>
           <Link to="/agricultural" >Agricultural ai</Link>
           </ListItem>
           
          </List>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
</ListItem>
<ListItem>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="navd"
      aria-labelledby="nested-list-subheader"
      
    >
      
      <ListItemButton onClick={handleClicksd}>
       
        <ListItemText primary=" Resources" />
        {opensd ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      < Collapse in={opensd} Close={()=>setOpensd(opensd)} >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
           
          <List>
            <ListItem>
            <Link to="/content-library" >Content Library</Link>
            </ListItem>
            <ListItem>
            <Link to="/mldataops" >Ml Dataops summit</Link>
            </ListItem>
            <ListItem>
            <Link to="/women" >Women in tech</Link>
           </ListItem>
           <ListItem>
           <Link to="/news" >News</Link>
           </ListItem>
           <ListItem>
           <Link to="/use" >Use case video</Link>
           </ListItem>
           <ListItem>
           <Link to="/case" >Case studies</Link>
           </ListItem>
           <ListItem>
           <Link to="/blog" >Blog</Link>
           </ListItem>
           <ListItem>
           <Link to="/partners" >Partners</Link>
           </ListItem>
           <ListItem>
           <Link to="/working" >Working with us</Link>
           </ListItem>
          </List>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
</ListItem>
<ListItem>
  <List>
    <ListItem>
    <Link to="/contact" >
  <ListItemText primary='Contact us' >Contact us</ListItemText>
  </Link>
  </ListItem>
  </List>

</ListItem>
    </List>
 

            </Drawer>
            <IconButton onClick={()=>setopenDrawer(!openDrawer)}><span class="menu-label">MENU</span>
                <MenuIcon id='menu' ></MenuIcon>
                
            </IconButton>
        </React.Fragment>
    </div>
  )
}

export default Drawe

