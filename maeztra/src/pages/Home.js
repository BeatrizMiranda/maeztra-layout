import React from "react";

import Modal from "../components/Modal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhyBuy from "../components/WhyBuy";
import BannerContent from "../components/BannerContent";
import MainCarousel from "../components/MainCarousel";
import MarcasParceiras from "../components/MarcasParceiras";
import ShelfProducts from "../components/ShelfProducts/ShelfProducts";

import "./styles.css";

function Home() {
  const isMobile = window.screen.width < 769;

  return (
    <>
      <Modal isMobile={isMobile} />
      <Header />
      <MainCarousel isMobile={isMobile} />
      <WhyBuy />
      <MarcasParceiras />
      <ShelfProducts isMobile={isMobile} />
      <BannerContent />
      <Footer isMobile={isMobile} />
    </>
  );
}

export default Home;
