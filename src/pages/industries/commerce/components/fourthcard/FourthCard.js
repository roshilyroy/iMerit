import React from "react";
import "./FourthCard.css";
function FourthCard() {
  return (
    <>
      <div className="card4th">
        <div className="card8title">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card12nd card4 card41">
            <p className="p1">post</p>
            <div className="bckimg bckimg4">
              <div className="overlay">
                <h4 className="texton">
                How AI Investment in Retail Works And Where iMerit Comes In
                </h4>
              </div>
            </div>
            <p className="p2">Read more</p>
          </div>
        </div>

        <div className="card8title">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card12nd card4 card42">
            <p className="p1">video</p>
            <div className="bckimg bckimg5">
              <div className="overlay">
                <h4 className="texton">
                E-Commerce- Product Categorization
                </h4>
              </div>
            </div>
            <p className="p2">watch now</p>
          </div>
        </div>

        <div className="card8title">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card12nd card4 card43">
            <p className="p1">post</p>
            <div className="bckimg bckimg6">
              <div className="overlay">
                <h4 className="texton">The E-Commerce Cat and Mouse Between Humans and Machines</h4>
              </div>
            </div>
            <p className="p2">Read more</p>
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
                    <div className="bckimg bckimg4">
                      <div className="overlay">
                        <h4 className="texton">
                        How AI Investment in Retail Works And Where iMerit Comes In
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
                    <p className="p1">video</p>
                    <div className="bckimg bckimg5">
                      <div className="overlay">
                        <h4 className="texton">
                        E-Commerce- Product Categorization
                        </h4>
                      </div>
                    </div>
                    <p className="p2">watch now</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card8title1">
                  <div class="uk-card uk-card-default uk-card-body uk-width-medium card12nd card4 card34">
                    <p className="p1">post</p>
                    <div className="bckimg bckimg6">
                      <div className="overlay">
                        <h4 className="texton">
                        The E-Commerce Cat and Mouse Between Humans and Machines
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

          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>


      <div className="svgbut3">
        <a href="#" className="svgtitle1">
         VIEW MORE
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



    </>
  );
}

export default FourthCard;
