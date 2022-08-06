import React from "react";
import "./Firstcard.css";
function FirstCard() {
  return (
    <div className="firstcards">
      <h1 className="tha cardstitle">SOLUTIONS</h1>
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card1"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container covercontainer">
          <img
            src="https://imerit.net/wp-content/uploads/2020/06/Moderation-Verification@1x-1.jpg"
            alt=""
            uk-cover
          />
        </div>
        <div className="triangle1"></div>
        <div>
          <div class="uk-card-body cardbody">
            <h5 class="uk-card-title thb h21">
              Content<br></br>Services
            </h5>
            <h5 class="uk-card-title thb h22">Content Services</h5>
            <p>
              Teams trained in detailed product taxonomies and paths tackle
              nuanced data enrichment projects to improve customer experience.
            </p>
            <h6 className="thb thh">LEARN MORE</h6>
          </div>
        </div>
      </div>

      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card2"
        uk-grid
      >
        <div class="uk-flex-last@s uk-card-media-right uk-cover-container covercontainer">
          <img
            src="https://imerit.net/wp-content/uploads/2020/06/Computer-Vision@1x-1.jpg"
            alt=""
            uk-cover
          />
        </div>
        <div className="triangle1"></div>
        <div>
          <div class="uk-card-body cardbody">
            <h5 class="thc uk-card-title">Computer Vision</h5>
            <p>
              iMerit's specialized image and video labeling teams perform a
              variety of Computer Vision tasks to power Machine Learning in
              retail and e-commerce.
            </p>
            <h6 className="thc thh">LEARN MORE</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
