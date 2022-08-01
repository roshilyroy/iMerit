import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ground4.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className='groundgrid1' container spacing={0}>
        <Grid item xs={4}>
          <Item id='groundpic1'>
            <img src='https://imerit.net/wp-content/uploads/2021/12/Easy-to-use-dashboard-to-navigate-through-all-projects.jpg' alt=''/>
            <p>Easy-to-use dashboard to navigate through all projects, with live updated data and single-page navigation.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id='groundpic2'>
            <img src='https://imerit.net/wp-content/uploads/2021/12/Real-time-quality-reporting.jpg' alt=''/>
            <p>Real-time quality reporting enables dynamic troubleshooting and resource allocation.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id='groundpic3'>
            <img src='https://imerit.net/wp-content/uploads/2021/12/Easily-access-and-interact-with-project-information.jpg' alt=''/>
            <p>Customers can easily access and interact with project information, which improves their time-to-value.</p>
          </Item>
        </Grid>
      </Grid>

              <Grid className='groundgrid1rt' container spacing={0}>
                <Grid item xs={6}>
                  <Item id='groundpic1r'>
                    <img src='https://imerit.net/wp-content/uploads/2021/12/Easy-to-use-dashboard-to-navigate-through-all-projects.jpg' alt=''/>
                    <p>Easy-to-use dashboard to navigate through all projects, with live updated data and single-page navigation.</p>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item id='groundpic2r'>
                    <img src='https://imerit.net/wp-content/uploads/2021/12/Real-time-quality-reporting.jpg' alt=''/>
                    <p>Real-time quality reporting enables dynamic troubleshooting and resource allocation.</p>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item id='groundpic3r'>
                    <img src='https://imerit.net/wp-content/uploads/2021/12/Easily-access-and-interact-with-project-information.jpg' alt=''/>
                    <p>Customers can easily access and interact with project information, which improves their time-to-value.</p>
                  </Item>
                </Grid>
              </Grid>




    </Box>
  );
}
