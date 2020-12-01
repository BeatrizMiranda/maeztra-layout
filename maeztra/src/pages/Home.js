import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import WhyBuy from "../components/WhyBuy";
import BannerContent from "../components/BannerContent";
import MainCarousel from "../components/MainCarousel";
import MarcasParceiras from "../components/MarcasParceiras";
import ShelfProducts from "../components/ShelfProducts/ShelfProducts";

import "./styles.css";

function Home() {
  return (
    <>
      <Header />
      <MainCarousel />
      <WhyBuy />
      <MarcasParceiras />
      <ShelfProducts />
      <BannerContent />
      <Footer />
    </>
  );
}

export default Home;
