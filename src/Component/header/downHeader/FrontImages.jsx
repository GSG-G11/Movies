import React from "react";
import img1 from "../../../images/slider-5-570x364.jpg";
import img2 from "../../../images/slider-2-570x364.jpg";
const FrontImages = () => {
  return (
    <div className="header__images">
      
      <div className="header__image__cont">
        <img src={img1} alt="img1" />
        <h4>DareDevil</h4>
      </div>

      <div className="header__image__cont">
        <img src={img2} alt="img2" />
        <h4>HAUNTING</h4>
      </div>

    </div>
  );
};

export default FrontImages;
