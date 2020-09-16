import React from 'react'

import {NavLink} from 'react-router-dom'
import classes from './Navigation.module.scss'

const navigation = () => {

    return(
        <div className={classes.Navigation}>
            <NavLink activeClassName={classes.active} to="/" exact>POČETNA</NavLink>
            <NavLink activeClassName={classes.active} to="/simptomi-i-roditeljstvo">SIMPTOMI I RODITELJSTVO</NavLink>
            <NavLink activeClassName={classes.active} to="/clanci">ČLANCI</NavLink>
            <NavLink activeClassName={classes.active} to="/kongresi-pedijatri">KONGRESI-PEDIJATRIJA</NavLink>
        </div>
    )
}

export default React.memo(navigation)