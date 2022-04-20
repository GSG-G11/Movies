import React from "react";

import UpperHeader from "./upperHeader";
import DownHeader from "./downHeader";
const Header = ({image , changeId }) => {
  return (
    <div className="whole__header">
     <UpperHeader changeId={changeId} />
     <DownHeader image={image}/>
    </div>
  );
};

export default Header;
