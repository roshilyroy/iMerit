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
    <div className=" counth">
      <h2 className="headth head-by1">BY THE NUMBERS</h2>
      <div className="couth">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item sm={8} xs={16}>
            <Item>
              <p className="nu3th  number3">
                <CountUp start={0} end={450} duration={0.5}></CountUp>
              </p>
              <hr className="new1 newth"></hr>
              <div className="a1"></div>
              <p className="pa pa3 pa3th">
                FULL-TIME RETAIL AND E-COMMERCE DATA EXPERTS
              </p>
            </Item>
          </Grid>
          <Grid item sm={8} xs={16}>
            <Item>
              <p className="nu4th number4">
                <CountUp
                  delay={0.5}
                  start={0}
                  end={15}
                  duration={0.5}
                  suffix="M"
                ></CountUp>
              </p>
              <hr className="new1 newth"></hr>
              <div className="a2"></div>
              <p className="pa pa4 pa3th">
                DATA POINTS ENRICHED FOR RETAIL AND E-COMMERCE
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>
      </div>
    </div>
  );
}
