import React, { useState, useEffect } from "react";
import "./Simptomi.scss";

import Image from "../../../assets/images/simptomi.png";
import RoditeljstvoImg from "../../../assets/images/Roditeljstvo.png";
import CitatiImg from "../../../assets/images/Onama.png";

import Kategorija from "../../../components/Simptomi/Kategorija/Kategorija";

const Simptomi = () => {
  const [kategorije] = useState({
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Simptomi">
      <Kategorija naslov="Simptomi kod dece" img={Image} kategorija={kategorije} />
      <Kategorija naslov="Roditeljstvo" img={RoditeljstvoImg} kategorija={kategorije} desno />
      <Kategorija naslov="Citati o deci i sreći" img={CitatiImg} kategorija={kategorije} />
    </div>
  );
};

export default Simptomi;
