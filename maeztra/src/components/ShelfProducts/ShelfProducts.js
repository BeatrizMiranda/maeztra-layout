import React from "react";
import Slider from "react-slick";

import CardProduct from "./CardProduct";

import prod1 from "../../images/prod1.png";
import prod2 from "../../images/prod2.png";
import { ReactComponent as ArrowLeft } from "../../images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

function ShelfProducts({ isMobile }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 1 : 5,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <div className="container">
      <h3 className="flex justify-center pa3 mt5 mb3 titleText" style={{ fontSize: "32px" }}>
        As Mais Pedidas
      </h3>
      <Slider {...settings}>
        <CardProduct
          colors={["red", "pink"]}
          img={prod1}
          name={"Ruched Rose Print Mini Skirt"}
          description={
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
          }
          price={"R$ 320.00"}
        />
        <CardProduct
          colors={["blue", "orange"]}
          img={prod2}
          name={"Ruched Rose Print Mini Skirt"}
          description={
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
          }
          price={"R$ 320.00"}
        />
        <CardProduct
          colors={["red", "pink"]}
          img={prod1}
          name={"Ruched Rose Print Mini Skirt"}
          description={
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
          }
          price={"R$ 320.00"}
        />
        <CardProduct
          colors={["blue", "orange"]}
          img={prod2}
          name={"Ruched Rose Print Mini Skirt"}
          description={
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
          }
          price={"R$ 320.00"}
        />
        <CardProduct
          colors={["red", "pink"]}
          img={prod1}
          name={"Ruched Rose Print Mini Skirt"}
          description={
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
          }
          price={"R$ 320.00"}
        />
        <CardProduct
          colors={["blue", "orange"]}
          img={prod2}
          name={"Ruched Rose Print Mini Skirt"}
          description={
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
          }
          price={"R$ 320.00"}
        />
      </Slider>
    </div>
  );
}

export default ShelfProducts;
