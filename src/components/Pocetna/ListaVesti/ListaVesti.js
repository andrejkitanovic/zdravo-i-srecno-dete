import React from "react";
import classes from "./ListaVesti.module.scss";

import slikaVest from "../../../assets/images/vest.png";

const listaVesti = (props) => {
  const listaVesti = props.vesti.slice(0, props.prikazi).map((vest) => (
    <div className={classes.Vest}>
      <div className={classes.image}>
        <img src={slikaVest} alt="vest" />
      </div>
    </div>
  ));

  let prikaziJos = null

  if(props.vesti.length > props.prikazi){
     prikaziJos = (
      <div className={classes.PrikaziJos} onClick={props.povecajPrikaz}>
        <h3>Prikaži još</h3>
        <p>+ {props.vesti.length - props.prikazi > 4 ? 4 : props.vesti.length - props.prikazi}</p>
        <div className={classes.Dots}>
            <span />
            <span />
            <span />
        </div>
      </div>);

  }

  
  return <div className={classes.ListaVesti}>{listaVesti}{prikaziJos}</div>;
};

export default listaVesti;
