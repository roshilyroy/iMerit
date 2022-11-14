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
              <div className="headingse2">AGRICULTURAL AI</div>
              <p className="subtitlese2">
                The iMerit workforce extracts intelligence from unstructured
                data, enabling precision agriculture and smart farming
                technologies to help farmers predict yield, reduce water usage,
                protect crops and automate farm operations.
              </p>
            </>
          </Item>
        </Grid>

        <Grid item sm={3.4}>
          <Item>
            <>
              <img
                className="firstimgse2"
                width="600"
                height="600"
                src="https://imerit.net/wp-content/uploads/2021/04/Agricultural-AI.jpg"
                class="entered lazyloaded"
              />
              <div className="trianglese2"></div>
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
