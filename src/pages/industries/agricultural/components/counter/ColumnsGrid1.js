import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./ColumnGrid1.css";

import CountUp from "react-countup";
import { Opacity } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function ColumnsGrid1() {
  return (
    <div className="counterss">
      <h2 className="head-by1 hfs">BY THE NUMBERS</h2>
      <div className="couse">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item sm={4} xs={15}>
            <Item>
              <p className="numberse3">
              <CountUp
                  start={0}
                  end={500}
                  duration={0.5}
                  suffix="+"
                ></CountUp>
              </p>
              <hr className="newse1"></hr>
              
              <p className="pase pase4">TRAINED DATA LABELERS AND QA EXPERTS</p>
            </Item>
          </Grid>
          <Grid item sm={4} xs={15}>
            <Item>
              <p className="numberse4">
                <CountUp
                  delay={0.5}
                  start={0}
                  end={10}
                  duration={0.5}
                  suffix="MM"
                ></CountUp>
              </p>
              <hr className="newse1"></hr>
              
              <p className="pase pase4">
              AGRICULTURAL IMAGES LABELED
              </p>
            </Item>
          </Grid>
          <Grid item sm={4} xs={15}>
            <Item>
              <p className="numberse5">
                <CountUp
                  delay={1}
                  start={0}
                  end={95}
                  duration={0.5}
                  suffix="%"
                ></CountUp>
              </p>
              <hr className="newse1"></hr>
              
              <p className="pase pase5">
              ACCURACY IN PLANT SEMANTIC SEGMENTATION
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>
      </div>
    </div>
  );
}
