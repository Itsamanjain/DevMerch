import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DesktopImage1 from "../assets/June-Desktop-Banner.jpg";
import MobileImage1 from "../assets/June-Mobile-Banner.jpg";
import DesktopImage2 from "../assets/Geek-New-Banner.jpg";
import MobileImage2 from "../assets/Geek-New-Banner-Mobile-View.jpg";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
  };

  const sliderRef = React.createRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const sliderStyle = {
    maxWidth: "100%",
    margin: "0 auto",
    overflow: "hidden",
    position: "relative",
  };

  const controlButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px", // Adjust the size as needed
    height: "40px", // Adjust the size as needed
    padding: "0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  };

  return (
    <div className="relative" style={sliderStyle}>
      <Slider ref={sliderRef} {...settings}>
        <div>
          {isMobile ? (
            <img src={MobileImage1} alt="Mobile Image 1" className="w-full" />
          ) : (
            <img src={DesktopImage1} alt="Desktop Image 1" className="w-full" />
          )}
        </div>
        <div>
          {isMobile ? (
            <img src={MobileImage2} alt="Mobile Image 2" className="w-full" />
          ) : (
            <img src={DesktopImage2} alt="Desktop Image 2" className="w-full" />
          )}
        </div>
      </Slider>

      {/* Manual control buttons */}
      <button onClick={prevSlide} style={{ ...controlButtonStyle, left: "10px" }}>
        {"<"}
      </button>
      <button onClick={nextSlide} style={{ ...controlButtonStyle, right: "10px" }}>
        {">"}
      </button>
    </div>
  );
};
