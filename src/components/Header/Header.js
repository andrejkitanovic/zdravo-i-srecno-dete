import React from 'react'
import classes from './Header.module.scss'

import Logo from '../../assets/images/Logo.png'
import Navigation from '../Navigation/Navigation'

const header = () => {
    return(
        <div className={classes.Header}>
            <img src={Logo} alt="Logo"/>
            <Navigation />
        </div>
    )
}

export default header