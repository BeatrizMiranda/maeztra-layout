import React from "react";
import "./styles.css";

function FooterLinks({ isMobile }) {
  return (
    <div style={{ borderTop: "1px solid #EFEFEF" }}>
      <div className={`flex container justify-around ph4 pv5 ${isMobile ? "flex-column" : ""}`}>
        <div className="flex flex-column">
          <button className="footerMenu fw7 pv2 bg-transparent bn tl">Informações</button>
          <ul className={`list ${isMobile ? "dn" : "db"}`}>
            <li>Quem Somos</li>
            <li>Prazo de Envio</li>
            <li>Trocas e Devolução</li>
            <li>Promoções e Cupons</li>
          </ul>
        </div>
        <div className="flex flex-column">
          <button className="footerMenu fw7 pv2 bg-transparent bn tl">Minha Conta</button>
          <ul className={`list ${isMobile ? "dn" : "db"}`}>
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Cadastre-se</li>
          </ul>
        </div>
        <div className="flex flex-column">
          <button className="footerMenu fw7 pv2 bg-transparent bn tl">Onde nos Encontrar</button>
          <ul className={`list ${isMobile ? "dn" : "db"}`}>
            <li>Lojas</li>
            <li>Endereço</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
