import React from "react";
import "./SecondCard.css";
function SecondCard() {
  return (
    <>
      <h1 className="cardstitle title2">CAPABILITIES</h1>
      <div className="card2nd">
        <div className="card8title c3f cse21">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card12nd card1f2nd">
            <img src="https://imerit.net/wp-content/uploads/2021/09/Polygon-Annotation.jpg" />
          </div>
          <div className="cardtext cardtexts ct1">
            <h1>POLYGON ANNOTATION</h1>
            <p>
            Expert annotators plot points on each vertex of the target object, regardless of shape. For instance, they outline boundaries of fruits to power growth progress detection.
            </p>
          </div>
        </div>
        <div className="card8title c3f cse22">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card22nd card2f2nd">
            <img src="https://imerit.net/wp-content/uploads/2021/09/Bounding-Boxes.jpg" />
          </div>
          <div className="cardtext cardtexts ct2">
            <h1>BOUNDING BOXES</h1>
            <p>
            iMerit Computer Vision experts use rectangular box annotation to localize entities including produce for crop monitoring and pests and weeds to prevent and control crop diseases.
            </p>
          </div>
        </div>
        <div className="card8title c3f cse23">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card32nd card3f2nd">
            <img src="https://imerit.net/wp-content/uploads/2021/09/Semantic-Segmentation.jpg" />
          </div>
          <div className="cardtext cardtexts ct3">
            <h1>SEMANTIC SEGMENTATION</h1>
            <p>
            iMerit experts perform pixel-perfect semantic segmentation of crops and weeds sourced from proximal RGB and NDVI imagery to power smart farming technologies.
            </p>
          </div>
        </div>
        <div className="card8title c3f cse24">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card42nd card4f2nd">
            <img src="https://imerit.net/wp-content/uploads/2021/09/3D-Annotation.png" />
          </div>
          <div className="cardtext cardtexts ct4">
            <h1>3D ANNOTATION</h1>
            <p>
            Annotation on 3D images is performed by the iMerit team to create an elevation map of farmlands and assist use cases like land segmentation and soil analysis.
            </p>
          </div>
        </div>
        <div className="cs3 csf3 card8title c3f cse25">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card52nd card5f2nd">
            <img
              src="https://imerit.net/wp-content/uploads/2021/09/Path-Planning.jpg"
              className="card5img"
            />
          </div>
          <div className="cardtext cardtexts ct5">
            <h1>PATH PLANNING</h1>
            <p>
            iMerit’s workforce performs path planning, also known as motion planning, to let autonomous agriculture tractors find the most optimal path between two points.
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default SecondCard;
