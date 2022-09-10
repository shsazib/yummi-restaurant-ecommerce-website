import React, { Component } from "react";
import './clientSays.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from './image/96x96_photo1.jpg';
import Img2 from './image/96x96_photo2.jpg';
import Img3 from './image/96x96_photo4.jpg';
import Img4 from './image/xclient_1.png.pagespeed.ic.dEpYy830gJ.png';



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="full-slider">
        <Slider {...settings} className="slider-main">
          <div className="testimonialSlider">
            <img src={Img1} alt="Img1"/>
            <h4>Rebecca Johnson<span>, CA, USA</span></h4>
            <p>"Donec pretium vulputate sapien neci faucibus in ornare quam. Consequat interdum varius sit amet mattis vulputate enim nulla. Purus faucibus ornar."</p>
          </div>
          <div className="testimonialSlider">
          <img src={Img2} alt="Img2"/>
            <h4>ANJELINA<span>, USA</span></h4>
            <p>"Donec pretium vulputate sapien nec  in ornare quam. Consequat interdum varius sit amet mattis vulputate enim nulla. Purus faucibus ornar."</p>
          </div>
          <div className="testimonialSlider">
          <img src={Img3} alt="Img3"/>
            <h4>Mek Born <span>,Canada</span></h4>
            <p>"Donec pretium vulputate sapien nec sagittis aliquam. Consequat interdum varius sit amet mattis vulputate enim nulla. Purus faucibus ornar."</p>
          </div>
          <div className="testimonialSlider">
          <img src={Img4} alt="Img4"/>
            <h4>Andarson <span>,Japan</span></h4>
            <p>"Donec pretium vulputate sapien nec sagittis aliquam.  faucibus in ornare quam. Consequat interdum varius enim nulla. Purus faucibus ornar."</p>
          </div>
        </Slider>
      </div>
    );
  }
}