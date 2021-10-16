import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MCsecond = () => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon style={{ color: "grey", fontSize: "15px" }} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon
          style={{ color: "grey", fontSize: "15px", marginLeft: "0" }}
        />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
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
    <div className="mctwo mx-2">
      <Slider {...settings}>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
        <div className="carousel-img">
          <Link to="/" className="link">
            <p className="text-center link-p">Hello</p>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default MCsecond;
