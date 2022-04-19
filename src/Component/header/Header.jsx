import React from "react";

import UpperHeader from "./upperHeader";
import DownHeader from "./downHeader";
const Header = () => {
  return (
    <div className="whole__header">
     <UpperHeader />
     <DownHeader />
    </div>
  );
};

export default Header;
