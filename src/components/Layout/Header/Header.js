import React from "react";
import "./Header.scss";

import Logo from "../../../assets/images/Logo.png";
import Navigation from "../Navigation/Navigation";

const header = () => {
  return (
    <div className="Header">
      <div className="container">
        <img src={Logo} alt="Logo" />
        <Navigation />
      </div>
    </div>
  );
};

export default header;
