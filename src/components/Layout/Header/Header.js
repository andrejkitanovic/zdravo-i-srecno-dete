import React from 'react'
import './Header.scss'

import Logo from '../../../assets/images/Logo.png'
import Navigation from '../Navigation/Navigation'

const header = () => {
    return(
        <div className="Header">
            <img src={Logo} alt="Logo"/>
            <Navigation />
        </div>
    )
}

export default header