import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { ImageCard } from "./";

const MultiCarousel = () => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i
          class="fas fa-chevron-right"
          style={{ color: "rgb(168, 165, 165)", fontSize: "3rem" }}
        ></i>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i
          class="fas fa-chevron-left"
          style={{ color: "rgb(168, 165, 165)", fontSize: "3rem" }}
        ></i>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="multiContainer mb-5 mx-auto">
      <Slider {...settings}>
        <ImageCard img="https://picsum.photos/480/320" />
        <ImageCard img="https://picsum.photos/480/320" />
        <ImageCard img="https://picsum.photos/480/320" />
        <ImageCard img="https://picsum.photos/480/320" />
        <ImageCard img="https://picsum.photos/480/320" />
      </Slider>
    </div>
  );
};

export default MultiCarousel;
