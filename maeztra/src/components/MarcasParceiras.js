import React from "react";
import comma from "../images/brands/comma.png";
import melissa from "../images/brands/melissa.png";
import foreve21 from "../images/brands/forever21.png";
import zara from "../images/brands/zara.png";
import ann from "../images/brands/ann.png";

import "./styles.css";

function MarcasParceiras() {
  return (
    <div className="mv5">
      <h3 className="flex justify-center pa3 mt5 mb3 titleText" style={{ fontSize: "32px" }}>
        Marcas Parceiras
      </h3>
      <div className="brandContainer flex container w-100 overflow-auto">
        <img src={comma} alt="Comma" />
        <img src={melissa} alt="Melissa" />
        <img src={foreve21} alt="foreve21" />
        <img src={zara} alt="zara" />
        <img src={ann} alt="ann" />
      </div>
    </div>
  );
}

export default MarcasParceiras;
