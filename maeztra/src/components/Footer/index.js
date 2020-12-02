import React from "react";

import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

function Footer({ isMobile }) {
  return (
    <>
      <NewsLetter isMobile={isMobile} />
      <FooterLinks isMobile={isMobile} />
      <FooterContact isMobile={isMobile} />
    </>
  );
}

export default Footer;
