import React, { useState } from "react";
import './Clanci.scss'

import Pretrazi from "../../../components/Simptomi/Pretrazi/Pretrazi";
import Preporucujemo from "../../../components/Univerzalno/Preporucujemo/Preporucujemo";
import Clanak from '../../../components/Clanci/Clanak/Clanak'

const Clanci = (props) => {
  const [preporuceno,] = useState([
    { to: "/kasalj-kod-dece", text: "Kasalj kod dece" },
    {
      to: "/mucnina-kod-dece-u-toku-voznje",
      text: "Mučnina kod dece u toku vožnje",
    },
    { to: "/sta-je-dislalija", text: "Šta je dislalija?" },
  ]);
  const [pretrazi, setPretrazi] = useState("");

  const pretraziHandler = (value) => setPretrazi(value);

  return (
    <div className="Clanci">
      <h1 className="naslov">Članci</h1>
      <div className="podela">
        <div className="glavno">
          <Pretrazi value={pretrazi} pretrazi={pretraziHandler} />
          <Clanak />
          <Clanak />
          <Clanak />
        </div>
        <Preporucujemo linkovi={preporuceno} />
        
      </div>
    </div>
  );
};

export default Clanci;
