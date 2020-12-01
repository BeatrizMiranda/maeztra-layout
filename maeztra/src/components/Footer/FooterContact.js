import React from "react";

import facebook from "../../images/social/facebook.png";
import insta from "../../images/social/insta.png";
import link from "../../images/social/link.png";
import youtube from "../../images/social/youtube.png";

import master from "../../images/payment/master.png";
import visa from "../../images/payment/visa.png";

import logoWhite from "../../images/logoWhite.png";
import vtex from "../../images/vtex.png";

function FooterContact() {
  return (
    <div style={{ backgroundColor: "#353535" }}>
      <div className="flex container justify-between pa3 items-center">
        <div className="socialMedia">
          <img className="pa3" src={facebook} alt="facebook" />
          <img className="pa3" src={link} alt="linkedIn" />
          <img className="pa3" src={insta} alt="instagram" />
          <img className="pa3" src={youtube} alt="Youtube" />
        </div>
        <div className="payments">
          <img className="pa3" src={master} alt="master" />
          <img className="pa3" src={visa} alt="visa" />
          <img className="pa3" src={master} alt="master" />
          <img className="pa3" src={visa} alt="visa" />
        </div>
        <div className="developed flex">
          <div className="flex flex-column pv3">
            <span className="white pl3" style={{ fontSize: "12px" }}>
              Powered By:
            </span>
            <img className="pa3" src={vtex} alt="VTEX" />
          </div>
          <div className="flex flex-column pv3">
            <span className="white pl3" style={{ fontSize: "12px" }}>
              Developed By:
            </span>
            <img className="pa3" src={logoWhite} alt="Maeztra" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
