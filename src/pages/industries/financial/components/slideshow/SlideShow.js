import React from "react";
import "./SlideShow.css";
function SlideShow() {
  return (

    <div className="slide">
      <h1 className="h1slide">Working with global AI leaders</h1>
      <div
        class="uk-position-relative uk-visible-toggle uk-light ulslide"
        tabindex="-1"
        uk-slider="autoplay: true"
      >
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-5@m uk-child-width-1-3@s uk-grid">
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/02/Reactive-Reality.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/nuro_logo.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/Kitware.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/raven.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>4</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/ebay.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>5</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/tripadvisor.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2020/04/autodesk_logo.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/microsoft.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/Kinatrax.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>4</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/american_ancestors.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>5</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/Crowdreason.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/Bilcom.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/sentera.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img
                src="https://imerit.net/wp-content/uploads/2022/01/logo-orbital-insight.png"
                width="250"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>4</h1>
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
    </div>
    
  );
}

export default SlideShow;
