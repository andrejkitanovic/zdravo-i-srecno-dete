import React from "react";
import "./Kategorija.scss";

import { Link } from "react-router-dom";

const kategorija = (props) => {
  const linkovi = props.kategorija.linkovi.slice(0, 3).map((link) => (
    <div className="link">
      <div className="dot" />
      <Link to={"/simptomi-i-roditeljstvo" + props.kategorija.link + link.to}>
        {link.text}
      </Link>
    </div>
  ));

  return (
    <div className={"Kategorija" + (props.desno ? " desno" : "")}>
      <div className="container">
        <h2>{props.naslov}</h2>
        <div className="flex">
          <img src={props.img} alt={props.kategorija.naslov} />
          <div className="links">
            {linkovi}
            <Link
              to={"/simptomi-i-roditeljstvo" + props.kategorija.link}
              className="button"
            >
              Prikazi vise
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kategorija;
