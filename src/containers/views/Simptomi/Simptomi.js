import React, { useState } from 'react'
import './Simptomi.scss'

import Image from '../../../assets/images/simptomi.png'

import Kategorija from '../../../components/Simptomi/Kategorija/Kategorija'

const Simptomi = () => {
    const [kategorije,] = useState({
        naslov: "Simptomi kod dece",
        img:Image,
        linkovi: [
            {to: "/",text:"Kasalj kod dece"},
            {to: "/",text:"Mučnina kod dece u toku vožnje"},
            {to: "/",text:"Šta je dislalija?"}
        ]
    })

    return (
        <div className="Simptomi">
            <Kategorija kategorija={kategorije}/>
            <Kategorija kategorija={kategorije} desno/>
            <Kategorija kategorija={kategorije}/>
        </div>
    )
}

export default Simptomi