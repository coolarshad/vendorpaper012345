import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "../config";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";

export default class Carousel extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={slider1} />
          </div>
          <div>
            <img src={slider2} />
          </div>
         
        </Slider>
      </div>
    );
  }
}