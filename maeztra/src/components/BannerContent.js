import React from "react";

import banner from "../images/banner.png";

function BannerContent() {
  return (
    <div className="mv5">
      <div className="flex container items-center ">
        <div className="w-30">
          <p className="fw7 pb3" style={{ fontSize: "24px" }}>
            Lorem Ipsum
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce
            proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget
            nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis
            id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit
            massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>
        <img className="w-70 pl5" src={banner} alt="banner" />
      </div>
    </div>
  );
}

export default BannerContent;
