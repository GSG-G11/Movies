import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "./upperHeader.css"
const UpperHeader = ({changeId} ) => {
  return (
    <div className="upper__header">
      <Logo changeId ={changeId} />
      <Navigation changeId ={changeId} />
    </div>
  );
};

export default UpperHeader;
