import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ColumnGrid1.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ColumnsGrid1() {
  return (
    <div className='division-by1'>
        <h2 className='head-by1'>BY THE NUMBERS</h2>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <p className='numbergeo3'>150</p>
            <hr className='geonew1'></hr>
            <p className='pageo3'>GEOSPATIAL DATA LABELING EXPERTS</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <p className='numbergeo4'>50M</p>
            <hr className='geonew-1'></hr>
            <p className='pageo4'>DATA POINTS ENRICHED FOR GEOSPATIAL USE CASES</p>
          </Item>
        </Grid>
      </Grid>
    </Box>

    </div>
  );
}