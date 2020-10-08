import React from "react";
import "./Pretrazi.scss"

import {MdSearch} from 'react-icons/md'

const pretrazi = (props) => {
  return (
    <div className={"Pretrazi " + (props.value ? "active" : "")}>
        <MdSearch />
      <input type="text" placeholder="Pretrazi" value={props.value} onChange={(e) => props.pretrazi(e.target.value)}/>
    </div>
  );
};

export default pretrazi