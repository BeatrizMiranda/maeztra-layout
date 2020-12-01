import React from "react";
import "../styles.css";

function FooterLinks() {
  return (
    <div style={{ borderTop: "1px solid #EFEFEF" }}>
      <div className="flex container justify-around ph4 pv5">
        <div className="flex flex-column">
          <p className="fw7 pv2">Informações</p>
          <ul className="list">
            <li>Quem Somos</li>
            <li>Prazo de Envio</li>
            <li>Trocas e Devolução</li>
            <li>Promoções e Cupons</li>
          </ul>
        </div>
        <div className="flex flex-column">
          <p className="fw7 pv2">Minha Conta</p>
          <ul className="list">
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Cadastre-se</li>
          </ul>
        </div>
        <div className="flex flex-column">
          <p className="fw7 pv2">Onde nos Encontrar</p>
          <ul className="list">
            <li>Lojas</li>
            <li>Endereço</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
