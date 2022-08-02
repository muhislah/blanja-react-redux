import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import style from './style.module.css'
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={style.items + " d-flex"}>
            <div className={style.insideitem}>
              <img src={image1} alt="" />
            </div>
            <h3 className="m-auto">Beauty Stylish</h3>
          </div>
          <div className={style.items + "  d-flex"}>
            <div className={style.insideitem}>
              <img src={image2} alt="" />
            </div>
            <h3 className="m-auto">Trends in 2022</h3>
          </div>
          <div className={style.items + "  d-flex"}>
            <div className={style.insideitem}>
            <img src={image3} alt="" />
            </div>
            <h3 className="m-auto">Black Editions</h3>
          </div>
          <div className={style.items + "  d-flex"}>
            <div className={style.insideitem}>
            <img src={image4} alt="" />
            </div>
            <h3 className="m-auto">Casual Richy</h3>
          </div>
        </Slider>
      </div>
    );
  }
}