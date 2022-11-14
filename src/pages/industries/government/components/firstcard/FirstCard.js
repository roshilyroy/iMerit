import React from "react";
import "./Firstcard.css";
function FirstCard() {
  return (
    <div className="firstcards">
      <h1 className="tha cardstitle">SOLUTIONS</h1>
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin cardfour1 card1"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container covercontainer">
          <img
          className="cardfour"
            src="https://imerit.net/wp-content/uploads/2020/06/Computer-Vision@1x-1.jpg"
            alt=""
            uk-cover
          />
        </div>
        <div className="triangle1"></div>
        <div>
          <div class="uk-card-body cardbody">
            <h5 class="uk-card-title thc h21">
              Computer<br></br>Vision
            </h5>
            <h5 class="uk-card-title thc h22">Computer Vision</h5>
            <p>
              iMerit’s specialized image and video labeling teams perform a
              variety of Computer Vision tasks to support deployment of
              autonomous and geospatial-focused applications.
            </p>
            <h6 className="thc thh">LEARN MORE</h6>
          </div>
        </div>
      </div>

      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin cardfour2 card2"
        uk-grid
      >
        <div class="uk-flex-last@s uk-card-media-right uk-cover-container covercontainer">
          <img
          className="cardfour"
            src="https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x-1.jpg"
            alt=""
            uk-cover
          />
        </div>
        <div className="triangle1"></div>
        <div>
          <div class="uk-card-body cardbody">
            <h5 class="thb uk-card-title">natural language processing</h5>
            <p class="">
              Teams trained in domain-specific lexicons work on linguistic
              projects to extract intelligence from vast government records and
              datasets to enable automation of processes.
            </p>
            <h6 className="cardfourlm thb thh">LEARN MORE</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
