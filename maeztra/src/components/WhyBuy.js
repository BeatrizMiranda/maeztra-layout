import React from "react";
import delivery from "../images/whyBue/delivery.png";
import discount from "../images/whyBue/discount.png";
import estoque from "../images/whyBue/estoque.png";
import troca from "../images/whyBue/troca.png";
import importados from "../images/whyBue/importados.png";

function WhyBuy() {
  return (
    <div className="w-100 overflow-auto">
      <p className="tc titleText fw8 pa4 mt4">Por que comprar na Maeztra?</p>
      <div className="flex justify-between container">
        <div className="flex pa3 ph4 items-center whyBuyContainer br2">
          <img className="mh2 mr3" src={importados} alt="Produtos importados" />
          <div className="flex flex-column">
            <p className="fw7 whyBuyContainerTitle">Produtos Importados</p>
            <p className="whyBuyContainerDesc">Produtos de alta qualidade</p>
          </div>
        </div>
        <div className="flex pa3 ph4 items-center whyBuyContainer br2">
          <img className="mh2 mr3" src={estoque} alt="Estoque no Brasil" />
          <div className="flex flex-column">
            <p className="fw7 whyBuyContainerTitle">Produtos Importados</p>
            <p className="whyBuyContainerDesc">Produtos de alta qualidade</p>
          </div>
        </div>
        <div className="flex pa3 ph4 items-center whyBuyContainer br2">
          <img className="mh2 mr3" src={troca} alt="Troca Garantiads" />
          <div className="flex flex-column">
            <p className="fw7 whyBuyContainerTitle">Produtos Importados</p>
            <p className="whyBuyContainerDesc">Produtos de alta qualidade</p>
          </div>
        </div>
        <div className="flex pa3 ph4 items-center whyBuyContainer br2">
          <img className="mh2 mr3" src={discount} alt="discount de 5%" />
          <div className="flex flex-column">
            <p className="fw7 whyBuyContainerTitle">Produtos Importados</p>
            <p className="whyBuyContainerDesc">Produtos de alta qualidade</p>
          </div>
        </div>
        <div className="flex pa3 ph4 items-center whyBuyContainer br2">
          <img className="mh2 mr3" src={delivery} alt="Frete Grátis" />
          <div className="flex flex-column">
            <p className="fw7 whyBuyContainerTitle">Produtos Importados</p>
            <p className="whyBuyContainerDesc">Produtos de alta qualidade</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyBuy;
