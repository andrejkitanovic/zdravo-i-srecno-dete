import React from "react";
import "./NazadNaslov.scss";

import { useHistory } from "react-router-dom";

const NazadNaslov = (props) => {
    const history = useHistory()
  return (
    <div className="NazadNaslov">
      <div className={"nazad " + (props.boja)} onClick={history.goBack}>
        <span />
        <span />
        <span />
      </div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default NazadNaslov;
