import React from 'react'

import {NavLink} from 'react-router-dom'
import './Navigation.scss'

const navigation = () => {

    return(
        <div className="Navigation">
            <NavLink activeClassName="active" to="/" exact>POČETNA</NavLink>
            <NavLink activeClassName="active" to="/simptomi-i-roditeljstvo">SIMPTOMI I RODITELJSTVO</NavLink>
            <NavLink activeClassName="active" to="/clanci">ČLANCI</NavLink>
            <NavLink activeClassName="active" to="/kongresi-pedijatri">KONGRESI-PEDIJATRIJA</NavLink>
        </div>
    )
}

export default React.memo(navigation)