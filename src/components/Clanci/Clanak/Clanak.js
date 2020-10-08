import React from "react";
import './Clanak.scss'

import Podeli from '../../Univerzalno/Podeli/Podeli'

import Doktor from '../../../assets/images/Doktor.png'

const clanak = (props) => {
    return (
  <div className="Clanak">
      <div className="doktor">
        <img src={Doktor} alt="Doktor" />
        <div className="odoktoru">
            <h4>Doktor Aleksa Marković</h4>
            <p>18 - MART - 2020</p>
            <p>Pedijatrija/ Psihologija / Logopedija</p>
        </div>
      </div>
    <h3>Naslov clanka</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <Podeli />
  </div>)
};

export default clanak