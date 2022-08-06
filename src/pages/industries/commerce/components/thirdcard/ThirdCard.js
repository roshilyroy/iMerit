import React from "react";
import "./ThirdCard.css";
function ThirdCard() {
  return (
    <div className="cardth3th">
      <h2 class="h2-alt">
        Featured
        <br />
        <strong>Content</strong>
      </h2>
      <div class="uk-card  thirdcard" uk-grid>
        <div class=" uk-cover-container">
          <img
            src="https://imerit.net/wp-content/uploads/2020/09/Data-Deduplication-retail.jpg"
            className="thirdcardimg"
            alt=""
            uk-cover
          />
        </div>
        <div>
          <div class="uk-card-body thirdcardabout">
            <p class="content-type">WHITEPAPER</p>
            <h3 className="card3title ctth">
              <a href="#">Data Services & Annotation for Commerce</a>
            </h3>
            <div className="contntth content2">
              <a class="featured-asset-cta" href="#">
                Read More
                <img
                  class="crdlogo lazy loaded"
                  src="https://imerit.net/wp-content/themes/imerit/images/featured-cta-after.svg"
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