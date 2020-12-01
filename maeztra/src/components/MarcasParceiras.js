import React from "react";
import comma from "../images/brands/comma.png";
import melissa from "../images/brands/melissa.png";
import foreve21 from "../images/brands/forever21.png";
import zara from "../images/brands/zara.png";
import ann from "../images/brands/ann.png";

function MarcasParceiras() {
  return (
    <div className="mv5">
      <h3 className="flex justify-center pa3 mt5 mb3 titleText" style={{ fontSize: "32px" }}>
        Marcas Parceiras
      </h3>
      <div className="flex container w-100 overflow-auto">
        <img src={comma} alt="Comma" style={{ maxWidth: "20%" }} />
        <img src={melissa} alt="Melissa" style={{ maxWidth: "20%" }} />
        <img src={foreve21} alt="foreve21" style={{ maxWidth: "20%" }} />
        <img src={zara} alt="zara" style={{ maxWidth: "20%" }} />
        <img src={ann} alt="ann" style={{ maxWidth: "20%" }} />
      </div>
    </div>
  );
}

export default MarcasParceiras;
