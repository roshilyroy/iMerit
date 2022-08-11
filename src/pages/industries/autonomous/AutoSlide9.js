import React, { Component } from "react";
import Slider from "react-slick";
import './AutoSlide9.css';

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="sliderau">
        <br/>
        <h2>Working with global AI leaders</h2>
        <Slider {...settings}>
        <div>
          <img src="https://imerit.net/wp-content/uploads/2022/01/microsoft.png" alt="first-logo4"></img>
          </div>
          <div>
            <img src="https://imerit.net/wp-content/uploads/2022/01/Kinatrax.png" alt="second-logo4"></img>
          </div>
          <div>
            <img src="https://imerit.net/wp-content/uploads/2022/01/american_ancestors.png" alt="Third-logo"></img>
          </div>
          <div>
            <img src="https://imerit.net/wp-content/uploads/2022/01/Crowdreason.png" alt="fourth-logo"></img>
          </div>
          <div>
            <img src="https://imerit.net/wp-content/uploads/2022/01/Bilcom.png" alt="fivth-logo"></img>
          </div>
          <div>
             <img src="https://imerit.net/wp-content/uploads/2022/01/sentera.png" alt="sixth-slide"></img>
          </div>
          <div>
             <img src="https://imerit.net/wp-content/uploads/2022/02/Reactive-Reality.png" alt="seventh-slide"></img>
          </div>
          <div>
             <img src="https://imerit.net/wp-content/uploads/2022/01/nuro_logo.png" alt="eighth-slide"></img>
          </div>
          <div>
             <img src="https://imerit.net/wp-content/uploads/2022/01/Kitware.png" alt="ninth-slide"></img>
          </div>
          <div>
             <img src="https://imerit.net/wp-content/uploads/2022/01/raven.png" alt="tenth-slide"></img>
          </div>
          <div>
             <img src="https://imerit.net/wp-content/uploads/2022/01/ebay.png" alt="eleventh-slide"></img>
          </div>
          <div>
            <img src="https://imerit.net/wp-content/uploads/2022/01/tripadvisor.png" alt="twelvth-slide"></img>
          </div>
          <div>
            <img src="https://imerit.net/wp-content/uploads/2022/01/tripadvisor.png" alt="thirteenth-slide"></img>
          </div>
          <div>
            <img src="https://imerit.net/wp-content/uploads/2020/04/autodesk_logo.png" alt="fourtheenth-slide"></img>
          </div>
                 </Slider>
      </div>
    );
  }
}