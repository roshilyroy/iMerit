
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ColumnGrid.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ColumnsGrid() {
  return (
    <div className='mdcol'>
        <h2 className='head-by'>BY THE NUMBERS</h2>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <p className='number1'>100</p>
            <hr className='newmd1'></hr>
            <p className='pa1'>MEDICAL DATA LABELING EXPERTS</p>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <p className='number2'>200M</p>
            <hr className='newmd2'></hr>
            <p className='pa2'>DATA POINTS ENRICHED FOR MEDICAL AI</p>
          </Item>
        </Grid>
      </Grid>
    </Box>

    </div>
  );
}