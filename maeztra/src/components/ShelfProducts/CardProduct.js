import React from "react";

import "./styles.css";

function CardProduct({ colors, img, name, description, price }) {
  return (
    <div className="flex flex-column  mh3">
      <div className="items-center flex w-100">
        <img src={img} alt={name} style={{ maxWidth: "230px" }} />
      </div>
      <div className="skuSelect flex pv3">
        {colors.map((color) => (
          <label class="skuSelector">
            <input type="radio" name="skuSelectorItem" />
            <span style={{ backgroundColor: color }} class="checkmark"></span>
          </label>
        ))}
      </div>
      <div className="price fw7 pb3 pt4" style={{ fontSize: "20px", color: "#353535" }}>
        {price}
      </div>
      <div className="prodName pv3 fw6">{name}</div>
      <div className="prodDesc fw3" style={{ fontSize: "12px" }}>
        {description}
      </div>
      <div className="addToCart w-100 flex mt4">
        <button className="stylesBtn bn ph5 br4 br2 w-100">Adicionar</button>
      </div>
    </div>
  );
}

export default CardProduct;
