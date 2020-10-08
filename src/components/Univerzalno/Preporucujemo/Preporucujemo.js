import React from "react";
import "./Preporucujemo.scss";

import { Link } from "react-router-dom";

const preporucujemo = (props) => {
  const linkovi = props.linkovi.map((link,index) => (
    <div className="link" key={index}>
      <div className="line" />
      <Link to={"/simptomi-i-roditeljstvo" + link.to}>
        {link.text}
      </Link>
    </div>
  ));

  return (
    <div className="Preporucujemo">
      <h3>Preporučeno</h3>
      {linkovi}
    </div>
  );
};

export default preporucujemo;
