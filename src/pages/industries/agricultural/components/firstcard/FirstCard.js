import React from "react";
import "./Firstcard.css";
function FirstCard() {
  return (
    <div className="firstcards">
      <h1 className="cardstitle">USE CASES</h1>
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card1"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container covercontainer">
          <img
            src="https://imerit.net/wp-content/uploads/2021/09/Agricultural-Robotics.jpg"
            alt=""
            uk-cover
          />
        </div>
        <div className="triangle1"></div>
        <div>
          <div class="uk-card-body cardbody">
            <h5 class="uk-card-title h21 fi">
              Agricultural<br></br>Robotics
            </h5>
            <h5 class="uk-card-title h22 fi">Agricultural Robotics</h5>
            <p>
              iMerit experts train computer vision models by annotating and
              labeling plants and crops, to automate repetitive tasks like
              harvesting, picking, pruning, seeding, and spraying, allowing
              farmers to focus more on improving overall production yields.
            </p>
          </div>
        </div>
      </div>

      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card2"
        uk-grid
      >
        <div class="uk-flex-last@s uk-card-media-right uk-cover-container covercontainer">
          <img
            src="https://imerit.net/wp-content/uploads/2021/09/Pest-and-Weed-Detection.jpg"
            alt=""
            uk-cover
          />
        </div>
        <div className="triangle1"></div>
        <div>
          <div class="uk-card-body cardbody">
            <h5 class="uk-card-title fi">Pest and Weed Detection</h5>
            <p>
              iMerit’s CV experts annotate the diseased sections of plants,
              enabling machine learning algorithms to detect the exact location
              of pests or weeds and remove them. It helps farmers in reducing or
              eliminating the use of herbicides.
            </p>
          </div>
        </div>
      </div>

      <div className="secondcards">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card1"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container covercontainer">
            <img
              src="https://imerit.net/wp-content/uploads/2021/09/Crop-Monitoring.jpg"
              alt=""
              uk-cover
            />
          </div>
          <div className="triangle1"></div>
          <div>
            <div class="uk-card-body cardbody">
              <h5 class="uk-card-title fi">Crop Monitoring</h5>
              <p>
                iMerit teams extract critical data from aerial imagery of
                farmlands, enabling artificial intelligence systems to assess
                crop health and monitor crop growth on a per crop basis and
                power automatic recommender systems for farmers.
              </p>
            </div>
          </div>
        </div>

        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card2"
          uk-grid
        >
          <div class="uk-flex-last@s uk-card-media-right uk-cover-container covercontainer">
            <img
              src="https://imerit.net/wp-content/uploads/2021/09/Field-and-Soil-Study.jpg"
              alt=""
              uk-cover
            />
          </div>
          <div className="triangle1"></div>
          <div>
            <div class="uk-card-body cardbody">
              <h5 class="uk-card-title fi">Field and Soil Study</h5>
              <p>
                iMerit’s specialists mark fields based on thermal properties of
                soil including thermal conductivity, thermal diffusivity,
                moisture level, and specific heat. It assists farmers in
                determining the most suitable crop location.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdcards">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card1"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container covercontainer">
            <img
              src="https://imerit.net/wp-content/uploads/2021/09/Predictive-Analysis.jpg"
              alt=""
              uk-cover
            />
          </div>
          <div className="triangle1"></div>
          <div>
            <div class="uk-card-body fifth cardbody">
              <h5 class="uk-card-title fi">Predictive Analytics</h5>
              <p>
                iMerit experts extract crucial data from imagery of fields and
                sky to power AI systems to make accurate predictions on soil,
                weather, and crops. Insights are provided to farmers, enabling
                timely decisions for quality produce.
              </p>
            </div>
          </div>
        </div>

        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card2"
          uk-grid
        >
          <div class="uk-flex-last@s uk-card-media-right uk-cover-container covercontainer">
            <img
              src="https://imerit.net/wp-content/uploads/2021/09/Autonomous-Tractors.jpg"
              alt=""
              uk-cover
              className="forthimg"
            />
          </div>
          <div className="triangle1"></div>
          <div>
            <div class="uk-card-body cardbody">
              <h5 class="uk-card-title fi">Autonomous Tractors</h5>
              <p>
                iMerit teams annotate and label land, crops, pests, weeds and
                other agricultural products to power autonomous tractors. The
                sensor and GPS fitted tractors enable precision farming,
                allowing effective land and resource management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
