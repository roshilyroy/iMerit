import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Firstgrid.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FirstGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sm={0.8}>
          <Item></Item>
        </Grid>
        <Grid item sm={6.5}>
          <Item>
            <>
              <div className="headingth2">GOVERNMENT</div>
              <p className="forthsub subtitleth2">
              iMerit collaborates to deploy AI and Machine Learning in the Computer Vision, Natural Language Processing and Content Services ecosystems by enriching, annotating and labeling data.
              </p>
            </>
          </Item>
        </Grid>

        <Grid item sm={3.4}>
          <Item>
            <>
              <img
                className="firstimgth2"
                width="600"
                height="600"
                src="https://imerit.net/wp-content/uploads/2021/07/Government.jpg"
                class="entered lazyloaded"
              />
              <div className="triangleth2"></div>
            </>
          </Item>
        </Grid>

        <Grid item sm={1}>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
