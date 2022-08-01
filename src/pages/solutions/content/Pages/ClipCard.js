import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ClipCard.css'

function ClipCard() {
  return (
    <div className="section5">


<Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={1}>
        
          <Grid item xs={12}>
            <div className="sec5">
            <div className="triangle5"></div>
                <div className="quote5">
                <h1>
            <b>"iMerit is an invaluable partner, providing us with accurate data which helped us develop our property tax software."</b>
            <h3><p>Brandon Van Volkenburgh, CTO &amp; Co-founder, CrowdReason </p></h3>
          </h1>
          <img src='https://imerit.net/wp-content/uploads/2020/05/CrowdReason.jpg' alt=''/>

                </div>
                </div>
         </Grid>

        </Grid>
    </Box>
  

    </div>
  )
}

export default ClipCard