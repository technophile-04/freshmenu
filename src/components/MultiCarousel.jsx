import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const MultiCarousel = () => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon style={{ color: "grey", fontSize: "60px" }} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{ color: "grey", fontSize: "60px" }} />
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="multiContainer mx-auto">
      <Slider {...settings}>
        <div className="carousel-img">
          <Link to="/">
            <img
              className="cimg mx-auto"
              alt="cimg"
              src="https://picsum.photos/460/320"
            />
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/">
            <img
              className="cimg mx-auto"
              alt="cimg"
              src="https://picsum.photos/460/320"
            />
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/">
            <img
              className="cimg mx-auto"
              alt="cimg"
              src="https://picsum.photos/460/320"
            />
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/">
            <img
              className="cimg mx-auto"
              alt="cimg"
              src="https://picsum.photos/460/320"
            />
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/">
            <img
              className="cimg mx-auto"
              alt="cimg mx-auto"
              src="https://picsum.photos/460/320"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default MultiCarousel;
