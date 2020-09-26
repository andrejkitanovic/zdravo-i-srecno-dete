import React from 'react'
import './Kategorija.scss'

import {Link} from 'react-router-dom'

const kategorija = props => {

    const linkovi = props.kategorija.linkovi.map(link => <div className="link"><div className="dot" /><Link to={link.to}>{link.text}</Link></div>)

    

    return (
        <div className={"Kategorija" + (props.desno ? " desno" : "")}>
            <h2>{props.kategorija.naslov}</h2>
            <div className="flex">
                <img src={props.kategorija.img} alt={props.kategorija.naslov}/>
                <div className="links">
                    {linkovi}
                    <button>Prikazi vise</button>
                </div>
            </div>
        </div>
    )
}

export default kategorija