import React , {useState , useEffect} from "react";
import './Proizvod.scss'

import NazadNaslov from "../../../components/Simptomi/NazadNaslov/NazadNaslov";
import Podeli from "../../../components/Univerzalno/Podeli/Podeli";

const Proizvod = (props) => {
  const [proizvod] = useState({
    naziv: "Hedelix sirup",
    // img: SlikaProizvoda,
    opis:
      "Hedelix® sirup je biljni lek koji sadrži meki ekstrakt lista bršljana. Aktivna komponenta Hedelix sirupa je ekstrakt lista bršljana (hederae helicis extractum spissum)",
  });

  useEffect(() => {
    window.scrollTo(0,0);
  },[])


  return (
    <div className="ProizvodView">
      <div className="naslov">
        <NazadNaslov title={proizvod.naziv} boja="zelena" />
        <Podeli />
      </div>
    </div>
  );
};

export default Proizvod;
