import  React from 'react';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Header() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Link to="/" >iMerit</Link> &nbsp;

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Products</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/datastudio" >Data Studio</Link></MenuItem>
          <MenuItem><Link to="/selfserve" >Self-serve api</Link></MenuItem>
          <MenuItem><Link to="/groundcontrol" >Ground Control</Link></MenuItem>
          <MenuItem><Link to="/edge" >Edge Case</Link></MenuItem>
          <MenuItem><Link to="/people" >People Platform</Link></MenuItem>
        </Select>
      </FormControl> &nbsp;

      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Solutions</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/solution" >Solution overview</Link></MenuItem>
          <MenuItem><Link to="/computer" >Computer Vision</Link></MenuItem>
          <MenuItem><Link to="/natural" >Natural language processing</Link></MenuItem>
          <MenuItem><Link to="/content" >Content Services</Link></MenuItem>
        </Select>
      </FormControl> &nbsp;


      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Services</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/image" >Image Annotation</Link></MenuItem>
          <MenuItem><Link to="/video" >Video Annotation</Link></MenuItem>
          <MenuItem><Link to="/text" >Text Annotation</Link></MenuItem>
          <MenuItem><Link to="/audio" >Audio transcription</Link></MenuItem>
          <MenuItem><Link to="/data" >Data Annotation</Link></MenuItem>
          <MenuItem><Link to="/lidar" >Lidar Annotation</Link></MenuItem>
          <MenuItem><Link to="/sentiment" >Sentiment Analysis</Link></MenuItem>
          <MenuItem><Link to="/content-moderation" >Content Moderation</Link></MenuItem>
          <MenuItem><Link to="/product" >Product Categorization</Link></MenuItem>
          <MenuItem><Link to="/image-segmentation" >Image Segmentation</Link></MenuItem>
        </Select>
      </FormControl> &nbsp;

      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Industries</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/industries" >Industries Overview</Link></MenuItem>
          <MenuItem><Link to="/autonomous" >Autonomous Vehicles</Link></MenuItem>
          <MenuItem><Link to="/geospatial" >Geospatial technology</Link></MenuItem>
          <MenuItem><Link to="/medical" >Medical ai</Link></MenuItem>
          <MenuItem><Link to="/financial" >Financial services</Link></MenuItem>
          <MenuItem><Link to="/commerce" >Commerce</Link></MenuItem>
          <MenuItem><Link to="/government" >Government</Link></MenuItem>
          <MenuItem><Link to="/agricultural" >Agricultural ai</Link></MenuItem>
        </Select>
      </FormControl> &nbsp;

      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Resources</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/content-library" >Content Library</Link></MenuItem>
          <MenuItem><Link to="/mldataops" >Ml Dataops summit</Link></MenuItem>
          <MenuItem><Link to="/women" >Women in tech</Link></MenuItem>
          <MenuItem><Link to="/news" >News</Link></MenuItem>
          <MenuItem><Link to="/use" >Use case video</Link></MenuItem>
          <MenuItem><Link to="/case" >Case studies</Link></MenuItem>
          <MenuItem><Link to="/blog" >Blog</Link></MenuItem>
          <MenuItem><Link to="/partners" >Partners</Link></MenuItem>
          <MenuItem><Link to="/working" >Working with us</Link></MenuItem>
        </Select>
      </FormControl> &nbsp;

      <Link to="/contact" >Contact Us</Link> &nbsp;
    </>
  )
}

export default Header