import React from "react";
import logo from "../../images/wedeyy-svg-heritage.svg";

const Logo = props => (
  <img
    src={logo}
    width={props.width}
    height={props.height}
    alt="Wedeyy Heritage"
    className="Logo"
  />
);

export default Logo;
