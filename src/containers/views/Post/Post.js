import React, { useState , useEffect} from "react";
import "./Post.scss";

import NazadNaslov from "../../../components/Simptomi/NazadNaslov/NazadNaslov";
import Podeli from "../../../components/Univerzalno/Podeli/Podeli";
import Proizvod from "../../../components/Post/Proizvod/Proizvod"

import SlikaProizvoda from '../../../assets/images/Proizvod.png'

const Post = (props) => {
  const [post] = useState({
    naslov: "Kasalj kod dece i sirup",
    tekst: [
      {
        podnaslov: "Šta je kašalj",
        tekst:
          "Kašalj je  refleks – odbrambeni mehanizam kojim uklanjamo “strano telo” iz disajnih puteva – sekret ili čestice koje iritiraju (nadražuju) nervne završetke (receptore za kašalj) u sluznici.Kao i svaki refleks , tako i kašalj započinje nadražajem. Nadražaj disajnih organa je pokretač refleksa kašlja.Nakon toga dolazi do dubokog udaha i potom do snažnog i zvučnog izdisaja-kašlja. Kašalj je najčešće automatski, bez volje čoveka, ali možemo kašljati i namerno.",
      },
      {
        podnaslov: "Koji su uzroci kašlja",
        tekst:
          "Na sreću, većina uzroka kašlja kod dece su bezazleni. Najčešći uzroci  kašlja su infekcija i alergijska oboljenja .Infekcija može biti izazvana virusima,bakterijama i drugim mikroorganizmima. Ređe su uzroci udahnuto strano telo , iritacija iz vazduha(isparavanje boja, dim cigarete, insekticidni sprej) kao i  nagla promena temperature. Ovo nisu jedini  uzroci kašlja. Dugotrajan kašalj može  biti simptom nekih ozbiljnih bolesti i potrebno je detaljnije ispitivanje uzroka kašlja.",
      },
      {
        podnaslov: "Sirup",
        tekst:
          `Kašalj kod dece izaziva ogromnu brigu  roditelja ali kašalj nije bolest, već je  odbrana od bolesti. Kašalj je simptom koji pomaže organizmu deteta da oslobodi disajne puteve. Najčešći uzroci  kašlja su virusne  infekcije i alergijska oboljenja.`,
      },
      {
        tekst:`Dve su  osnovne vrste kašlja: “suvi” (neproduktivni ili nadražajni) i “vlažni” – produktivni. Kašalj  je dosadan i iritirajući,ponekad je produktivan i tada dete iskašljava. Radi olakšavanja kašlja postoje različiti sirupi , većinom na biljnoj osnovi. Preparat sa dokazanim dejstvom je –Hedelix sirup- ekstrakt lista  bršljana.`
      }
    ],
  });
  
  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const [proizvod] = useState({
    naziv:"Hedelix sirup",
    img:SlikaProizvoda,
    opis:"Hedelix® sirup je biljni lek koji sadrži meki ekstrakt lista bršljana. Aktivna komponenta Hedelix sirupa je ekstrakt lista bršljana (hederae helicis extractum spissum)"
  })

  const tekst = post.tekst.map((tekst, index) => (
    <div className="tekst" key={index}>
      <h3>{tekst.podnaslov}</h3>
      <p>{tekst.tekst}</p>
    </div>
  ));

  return (
    <div className="Post">
      <div className="naslov">
        <NazadNaslov title={post.naslov} boja="crvena" />
        <Podeli />
      </div>
      <div className="content">{tekst}</div>
      <Proizvod proizvod={proizvod} />
    </div>
  );
};

export default Post;
