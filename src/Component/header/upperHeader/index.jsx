import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "./upperHeader.css"
const UpperHeader = () => {
  return (
    <div className="upper__header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default UpperHeader;
