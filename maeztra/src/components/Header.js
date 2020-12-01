import React from "react";
import logo from "../images/logo.png";

import { ReactComponent as AccountIcon } from "../images/account.svg";
import { ReactComponent as CartIcon } from "../images/cart.svg";
import { ReactComponent as HeartIcon } from "../images/heart.svg";
import { ReactComponent as NewsIcon } from "../images/icon-dress.svg";
import { ReactComponent as Search } from "../images/search.svg";

function Header() {
  const isMobile = window.screen.width < 769;
  return (
    <div>
      <div className="w-100 pa3 white flex justify-center" style={{ backgroundColor: "#353535" }}>
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </div>
      <header className="header pa3">
        <div className="flex justify-between container center">
          <div className="logo flex justify-center items-center">
            <img src={logo} alt="Maeztra Logo" />
          </div>
          <div className="busca flex justify-center items-center relative">
            {isMobile ? (
              <Search />
            ) : (
              <>
                <input type="search" name="" id="" className="searchInput bn br4" />
                <input
                  type="button"
                  value="Buscar"
                  className="absolute stylesBtn bn ph5 br4 right--1"
                />
              </>
            )}
          </div>
          <div className="flex justify-between">
            {!isMobile && (
              <>
                <div className="minha-conta pa4 flex items-center">
                  <AccountIcon />
                  <span className="pl2">Minha Conta</span>
                </div>
                <div className="favoritos pa4 flex items-center">
                  <HeartIcon /> <span className="pl2">Favoritos</span>
                </div>
              </>
            )}
            <div className="card pa4 flex items-center">
              <CartIcon /> {!isMobile && <span className="pl2">Meu Carrinho</span>}
            </div>
          </div>
        </div>
      </header>
      {!isMobile && (
        <div className="menu">
          <div className="menu-items container pa3 flex justify-between">
            <div className="menu-item emphasize">Novidades</div>
            <div className="menu-item">
              <NewsIcon />
              Vestidos
            </div>
            <div className="menu-item">Roupas</div>
            <div className="menu-item">Sapatos</div>
            <div className="menu-item">Lingerie</div>
            <div className="menu-item">Acessórios</div>
            <div className="menu-item">OUTLET</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
