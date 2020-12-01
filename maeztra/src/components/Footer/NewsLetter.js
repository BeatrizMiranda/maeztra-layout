import React from "react";

function NewsLetter() {
  const isMobile = window.screen.width < 769;

  return (
    <div className="mt5" style={{ borderTop: "1px solid #EFEFEF" }}>
      <div
        className={`container flex justify-center items-center flex-wrap ${
          isMobile ? "pa2" : "pa5"
        }`}
      >
        <p className="mr3 fw8">Recebe Nossa Newsletter</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Digite seu e-mail"
            name=""
            id=""
            className="searchInput bn br4 pa3"
          />
          <input type="button" value="Enviar" className="absolute stylesBtn bn ph5 br4 right--1" />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
