import React from "react";
import "./OnlyTitle.css";
function OnlyTitle() {
  return (
    <div className="lstpara">
      <div className="gradline gl1"></div>
      <h2 class="h2-alt">
        Getting <br />
        <strong>Started!</strong>
      </h2>
      <p className="paraitem">
        The need for speed in high-quality data annotation has never been
        greater. iMerit combines the best of predictive and automated annotation
        technology with world-class data annotation and subject matter experts
        to deliver the data you need to get to production, fast.
      </p>
      <div className="svgbut1">
        <a href="#" className="svgtitle1">
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
            stroke="#e33d3b"
            stroke-width="1"
            stroke-miterlimit="10"
            style={{ stroke: "#e33d3b" }}
          ></line>
          <line
            id="line1first"
            x1="0"
            y1="40"
            x2="50"
            y2="-25"
            fill="none"
            stroke="#e33d3b"
            stroke-width="1"
            stroke-miterlimit="10"
            style={{ stroke: "#e33d3b" }}
          ></line>
          <line
            id="line2first"
            x1="0"
            y1="0"
            x2="0"
            y2="40"
            fill="none"
            stroke="#e33d3b"
            stroke-width="1"
            stroke-miterlimit="10"
            style={{ stroke: "#e33d3b" }}
          ></line>
          <line
            id="linefirst"
            x1="0"
            y1="20"
            x2="30"
            y2="20"
            fill="none"
            stroke="#e33d3b"
            stroke-width="0"
            stroke-miterlimit="10"
            style={{ stroke: "#e33d3b" }}
          ></line>
        </svg>
      </div>
      <div className="gradline gl2"></div>
    </div>
  );
}

export default OnlyTitle;
