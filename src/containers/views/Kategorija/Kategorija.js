import React, { useState , useEffect} from "react";
import "./KategorijaView.scss";

import { Link } from "react-router-dom";

import NazadNaslov from "../../../components/Simptomi/NazadNaslov/NazadNaslov";
import Pretrazi from "../../../components/Simptomi/Pretrazi/Pretrazi";
import Preporucujemo from '../../../components/Univerzalno/Preporucujemo/Preporucujemo'

const Kategorija = (props) => {
  const [kategorija] = useState({
    naslov: "Simptomi kod dece",
    img: Image,
    linkovi: [
      { to: "/kasalj-kod-dece", text: "Kasalj kod dece" },
      {
        to: "/mucnina-kod-dece-u-toku-voznje",
        text: "Mučnina kod dece u toku vožnje",
      },
      { to: "/sta-je-dislalija", text: "Šta je dislalija?" },
      { to: "/kasalj-kod-dece", text: "Kasalj kod dece" },
      {
        to: "/mucnina-kod-dece-u-toku-voznje",
        text: "Mučnina kod dece u toku vožnje",
      },
      { to: "/sta-je-dislalija", text: "Šta je dislalija?" },
    ],
    link: "/simptomi-kod-dece",
  });
  const [pretrazi, setPretrazi] = useState("");

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const pretraziHandler = (value) => setPretrazi(value);

  const linkovi = kategorija.linkovi.map((link) =>
    link.text.toLowerCase().includes(pretrazi.toLowerCase()) ? (
      <div className="link">
        <div className="dot" />
        <Link to={"/simptomi-i-roditeljstvo" + kategorija.link + link.to}>
          {link.text}
        </Link>
      </div>
    ) : null
  );

  return (
    <div className="KategorijaView">
      <NazadNaslov title={kategorija.naslov} boja="plava" />
      <div className="podela">
        <div className="glavno">
          <Pretrazi value={pretrazi} pretrazi={pretraziHandler} />
          <div className="linkovi">{linkovi}</div>
        </div>
        <Preporucujemo linkovi={kategorija.linkovi.slice(0,3)} />
      </div>
    </div>
  );
};

export default Kategorija;
