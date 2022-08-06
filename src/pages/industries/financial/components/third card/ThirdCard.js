import React from "react";
import "./ThirdCard.css";
function ThirdCard() {
  return (
    <div>
      <h2 class="h2-alt">
        Featured
        <br />
        <strong>Content</strong>
      </h2>
      <div class="uk-card  thirdcard" uk-grid>
        <div class=" uk-cover-container">
          <img
            src="https://imerit.net/wp-content/uploads/2021/06/Fintech_Finance_Virtual_Arena.jpg"
            className="thirdcardimg"
            alt=""
            uk-cover
          />
        </div>
        <div>
          <div class="uk-card-body thirdcardabout">
            <p class="content-type">post</p>
            <h3 className="card3title">
              <a href="#">iMerit at Fintech Finance Virtual Arena</a>
            </h3>
            <div className="content2">
              <a class="featured-asset-cta" href="#">
                Read More
                <img
                  data-src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"
                  class="crdlogo lazy loaded"
                  src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"
                  data-was-processed="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdCard;
