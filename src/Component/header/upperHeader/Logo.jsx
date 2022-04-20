import React from "react";
import image from "../../../images/logo-default.png";
import { Link } from "react-router-dom";

const Logo = ({changeId}) => {
  return (
    <div className="logo">
      <Link onClick={()=>changeId({})} className="home" to="/">
        <img src={image} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
