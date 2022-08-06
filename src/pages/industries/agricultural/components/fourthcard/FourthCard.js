import React from "react";
import "./FourthCard.css";
function FourthCard() {
  return (
    <>
    <div className="card4thslidese2">
        <div class="  slidese uk-slider-container-offset" uk-slider="infinite:true">
          <div
            class="uk-position-relative uk-visible-toggle uk-light" 
            tabindex="-1"
          >
            <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-column-small">
              <li>
                <div className="secard card8title1">
                  <div class="uk-card uk-card-default uk-card-body uk-width-3.5-5@m uk-width-medium@s card12nd card4 card14">
                    <p className="p1">whitepaper</p>
                    <div className="bckimg bckimgse1">
                      <div className="overlay">
                        <h4 className="texton">
                        GIS Data Annotation for Farming
                        </h4>
                      </div>
                    </div>
                    <p className="p2">Read more
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="secard card8title1">
                  <div class="uk-card uk-card-default uk-card-body uk-width-3.5-5@m uk-width-medium@s card12nd card4 card24">
                    <p className="p1">post</p>
                    <div className="bckimg bckimgse2">
                      <div className="overlay">
                        <h4 className="texton">
                        Quality Matters: An Engagement Review of Semantic Segmentation for Crops, Weeds
                        </h4>
                      </div>
                    </div>
                    <p className="p2">Read more</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="secard card8title1">
                  <div class="uk-card uk-card-default uk-card-body uk-width-3.5-5@m uk-width-medium@S cardse4 card12nd card4 card34">
                    <p className="p1">post</p>
                    <div className="bckimg bckimgse3">
                      <div className="overlay">
                        <h4 className="texton">
                        How Art and Science Intersect On The iMerit Solutions Team
                        </h4>
                      </div>
                    </div>
                    <p className="p2">Read More</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="secard card8title1">
                  <div class="uk-card uk-card-default uk-card-body uk-width-3.5-5@m uk-width-medium@s card12nd card4 card24">
                    <p className="p1">compilation</p>
                    <div className="bckimg bckimgse4">
                      <div className="overlay">
                        <h4 className="texton">
                        Glossary for Geospatial Terms
                        </h4>
                      </div>
                    </div>
                    <p className="p2">Read more</p>
                  </div>
                </div>
              </li>
            </ul>

            <a
              class="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-previous
              uk-slider-item="previous"
            ></a>
            <a
              class="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-next
              uk-slider-item="next"
            ></a>
          </div>

          <ul class=" uk2dot uk-slider-nav uk-dotnav uk-flex-center uk-margin">
          <li uk-slider-item="0" class=""><a href=""></a></li>
          <li uk-slider-item="1" class=""><a href=""></a></li>
          <li uk-slider-item="2" class=""><a href=""></a></li>
          <li uk-slider-item="3" class=""><a href=""></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FourthCard;
