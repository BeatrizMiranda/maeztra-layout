import React, { useState } from "react";

import modalImg from "../../images/modalImg.png";
import { ReactComponent as Email } from "../../images/email.svg";
import "./style.css";

function Modal({ isMobile }) {
  const [openModal, setOpenModal] = useState(true);

  if (!openModal) return null;
  return (
    <>
      <div
        onClick={() => setOpenModal(false)}
        className="fixed w-100 h-100 z-999"
        style={{ background: "rgba(0, 0, 0, 0.7)" }}
      ></div>
      <div className="modalContent bg-white relative z-9999">
        <button
          className="absolute top--2 bg-transparent bn white right-0"
          onClick={() => setOpenModal(false)}
        >
          FECHAR
        </button>
        <div className="flex justify-between">
          {!isMobile && <img src={modalImg} alt="inscreva-se" />}
          <div className="pa4 w-100" style={{ margin: "auto 10px" }}>
            <div className="flex justify-center mb4">
              <Email />
            </div>
            <p className="mb4 tc">Bem vindo a Maeztra</p>
            <p className="tc">Receba em Primeira mão</p>
            <p className="tc mb4">
              <strong>descontos e ofertas exclusivas</strong>
            </p>
            <input
              type="text"
              className="bn br4 w-100 pa3 mb3"
              placeholder="Digite seu email"
              style={{ border: "1px solid #C4C4C4" }}
            />
            <input
              type="button"
              value="Enviar"
              className="stylesBtn bn ph5 br4 w-100"
              onClick={() => setOpenModal(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
