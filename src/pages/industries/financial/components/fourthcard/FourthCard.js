import React from "react";
import "./FourthCard.css";
function FourthCard() {
  return (
    <>
      <div className="card4th">
        <div className="card8title">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card12nd card4 card41">
            <p className="p1">post</p>
            <div className="bckimg bckimg1">
              <div className="overlay">
                <h4 className="texton">
                  Insurance Processes Made Easy Using Machine Learning
                </h4>
              </div>
            </div>
            <p className="p2">Read more
           
            </p>
          </div>
        </div>

        <div className="card8title">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card12nd card4 card42">
            <p className="p1">post</p>
            <div className="bckimg bckimg2">
              <div className="overlay">
                <h4 className="texton">
                  Deep NLP Shifts from Modeling to Annotation
                </h4>
              </div>
            </div>
            <p className="p2">Read more</p>
          </div>
        </div>

        <div className="card8title">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card12nd card4 card43">
            <p className="p1">video</p>
            <div className="bckimg bckimg3">
              <div className="overlay">
                <h4 className="texton">NLP - Financial Data Enrichment</h4>
              </div>
            </div>
            <p className="p2">watch now</p>
          </div>
        </div>
      </div>

      <div className="card4thslide">
        <div class="uk-slider-container-offset" uk-slider="autoplay: true">
          <div
            class="uk-position-relative uk-visible-toggle uk-light"
            tabindex="-1"
          >
            <ul class="uk-slider-items uk-child-width-1-2@s uk-grid-column-small">
              <li>
                <div className="card8title1">
                  <div class="uk-card uk-card-default uk-card-body uk-width-medium card12nd card4 card14">
                    <p className="p1">post</p>
                    <div className="bckimg bckimg1">
                      <div className="overlay">
                        <h4 className="texton">
                          Insurance Processes Made Easy Using Machine Learning
                        </h4>
                      </div>
                    </div>
                    <p className="p2">Read more</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card8title1">
                  <div class="uk-card uk-card-default uk-card-body uk-width-medium card12nd card4 card24">
                    <p className="p1">post</p>
                    <div className="bckimg bckimg2">
                      <div className="overlay">
                        <h4 className="texton">
                          Deep NLP Shifts from Modeling to Annotation
                        </h4>
                      </div>
                    </div>
                    <p className="p2">Read more</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card8title1">
                  <div class="uk-card uk-card-default uk-card-body uk-width-medium card12nd card4 card34">
                    <p className="p1">video</p>
                    <div className="bckimg bckimg3">
                      <div className="overlay">
                        <h4 className="texton">
                          NLP - Financial Data Enrichment
                        </h4>
                      </div>
                    </div>
                    <p className="p2">watch now</p>
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

          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>
    </>
  );
}

export default FourthCard;
