import React from "react";
import Slider from "react-slick";

import mobileBanner from "../images/mobileBanner.png";
import mainBanner from "../images/mainBanner.png";
import { ReactComponent as ArrowLeft } from "../images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../images/arrowRight.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

function MainCarousel({ isMobile }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  const image = isMobile ? mobileBanner : mainBanner;

  return (
    <div className="w-100 mainCarousel">
      <Slider {...settings}>
        <CarrouselItem
          img={image}
          mainText={"Promoções de Outono"}
          description={"Confiras os melhores looks para combinar com você nesse Outono"}
          button={"Conferir"}
        />
        <CarrouselItem
          img={image}
          mainText={"Promoções de Outono"}
          description={"Confiras os melhores looks para combinar com você nesse Outono"}
          button={"Conferir"}
        />
      </Slider>
    </div>
  );
}

const CarrouselItem = ({ img, mainText, description, button }) => {
  return (
    <div className="relative tc white">
      <img src={img} alt="main banner" className="w-100" />
      <div className="absolute mainBannerText tl">
        <h2 className="mainBannerTitle mb5">{mainText}</h2>
        <p className="mainBannerDesc">{description}</p>
        <div className="mt5">
          <button className="stylesBtn bn ph5 br4">{button}</button>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
