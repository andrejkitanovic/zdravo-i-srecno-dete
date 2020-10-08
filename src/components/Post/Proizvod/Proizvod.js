import React from "react";
import "./Proizvod.scss"

import { Link } from "react-router-dom";

const proizvod = (props) => {
  return (
    <div className="Proizvod">
        <img src={props.proizvod.img} alt={props.proizvod.naziv} />
      <div className="oproizvodu">
        <h4>{props.proizvod.naziv}</h4>
        <p>{props.proizvod.opis}</p>
        <Link to="/simptomi-i-roditeljstvo/proizvod/hedelix">Informacije o sirupu</Link>
      </div>
    </div>
  );
};

export default proizvod;
