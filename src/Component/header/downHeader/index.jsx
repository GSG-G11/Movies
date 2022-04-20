import React from "react";

import FrontImages from "./FrontImages";
import './downHeader.css'
const Downheader = ({image}) => {
  return (
    <div >
      <FrontImages image={image}/>
    </div>
  );
};

export default Downheader;
