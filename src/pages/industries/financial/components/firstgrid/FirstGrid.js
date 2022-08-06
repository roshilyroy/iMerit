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
        <Grid item sm={7}>
          <Item>
            <>
              <div className="heading">FINANCIAL SERVICES</div>
              <p className="subtitle">
                Financial data experts unlock the intelligence contained in
                unstructured visual, audio and text data sets to help the
                world’s leading companies in finance implement machine learning
                and RPA for increased efficiency.
              </p>
              <div className="svgbut2">
                <a href="#" className="svgtitle">
                  LET'S CONNECT
                </a>

                <svg
                  id="button-svg2"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                >
                  <line
                    id="line3first"
                    x1="0"
                    y1="0"
                    x2="30"
                    y2="0"
                    fill="none"
                    stroke="#531cb3"
                    stroke-width="1"
                    stroke-miterlimit="10"
                    style={{ stroke: "#531cb3" }}
                  ></line>
                  <line
                    id="line1first"
                    x1="0"
                    y1="40"
                    x2="50"
                    y2="-25"
                    fill="none"
                    stroke="#531cb3"
                    stroke-width="1"
                    stroke-miterlimit="10"
                    style={{ stroke: "#531cb3" }}
                  ></line>
                  <line
                    id="line2first"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="40"
                    fill="none"
                    stroke="#531cb3"
                    stroke-width="1"
                    stroke-miterlimit="10"
                    style={{ stroke: "#531cb3" }}
                  ></line>
                  <line
                    id="linefirst"
                    x1="0"
                    y1="20"
                    x2="30"
                    y2="20"
                    fill="none"
                    stroke="#531cb3"
                    stroke-width="0"
                    stroke-miterlimit="10"
                    style={{ stroke: "#531cb3" }}
                  ></line>
                </svg>
              </div>
            </>
          </Item>
        </Grid>

        <Grid item sm={3.1}>
          <Item>
            <>
              <img
                className="firstimg"
                width="600"
                height="600"
                src="https://imerit.net/wp-content/uploads/2020/06/Data-Extraction@1x.jpg"
                alt="Data experts unlock the intelligence in unstructured visual, audio and text data sets in finance"
                data-lazy-src="https://imerit.net/wp-content/uploads/2020/06/Data-Extraction@1x.jpg"
                data-ll-status="loaded"
                class="entered lazyloaded"
                data-was-processed="true"
              />
              <div className="triangle"></div>
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
