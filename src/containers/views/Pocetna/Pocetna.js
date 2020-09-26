import React, { useState } from "react";
import  "./Pocetna.scss";

import LogoPart from "../../../assets/images/Logo-part.png";
// import Onama from "../../../assets/images/Onama.png";

import Swiper from "../../../components/Pocetna/Swiper/Swiper";
import ListaVesti from "../../../components/Pocetna/ListaVesti/ListaVesti";

const Pocetna = (props) => {
  const [udarneVesti, ] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [sporedneVesti, ] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [prikaziSporedneVesti, setPrikaziSporedneVesti] = useState(7);
  const [popularnaPretrazivanja, ] = useState([
    "Kašalj kod dece",
    "Pelenski osip kod dece",
    "Kašalj kod dece",
    "Pelenski osip kod dece",
    "Kašalj kod dece",
    "Pelenski osip kod dece",
  ]);

  const povecajPrikazSporednihVesti = () => {
    return setPrikaziSporedneVesti((p) => p + 4);
  };

  const listaPretrazivanja = popularnaPretrazivanja.map((pretrazivajne) => (
    <li>{pretrazivajne}</li>
  ));

  return (
    <div className="Pocetna">
      <div className="naslov">
        <h2>Clanci lekara i vesti</h2>
        <img src={LogoPart} alt="Zdravo i srecno dete" />
      </div>

      <Swiper vesti={udarneVesti} />
      <ListaVesti
        vesti={sporedneVesti}
        prikazi={prikaziSporedneVesti}
        povecajPrikaz={povecajPrikazSporednihVesti}
      />

      <div className="ONama">
        <div className="naslov">
          <h2>O nama</h2>
          <img src={LogoPart} alt="Zdravo i srecno dete" />
        </div>

        <p>
          Sajt zdravo i srećno dete daje savete pedijatra, pruža najnovije vesti
          iz medicine prevashodno pedijatrije, rešava mnogobrojne dileme
          roditelja i sve u cilju zdravog i srećnog deteta.
        </p>
      </div>

      <div className="PopularnaPretrazivanja">
        <div className="naslov">
          <h2>Popularna pretrazivanja</h2>
          <img src={LogoPart} alt="Zdravo i srecno dete" />
        </div>

        <ul>{listaPretrazivanja}</ul>
      </div>
    </div>
  );
};

export default Pocetna;
