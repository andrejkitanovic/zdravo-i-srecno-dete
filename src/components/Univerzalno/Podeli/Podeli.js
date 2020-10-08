import React from 'react'
import './Podeli.scss'

import {FaFacebookF,FaTwitter,FaViber} from 'react-icons/fa'

import {FacebookShareButton,TwitterShareButton,ViberShareButton} from 'react-share'

const podeli = () => {

    return <div className="Podeli">
        <p>Podeli objavu:</p>
        <FacebookShareButton url={"https://zdravoisrecnodete.netlify.app/"}><div className="facebook"><FaFacebookF /></div></FacebookShareButton>
        <TwitterShareButton url={"https://zdravoisrecnodete.netlify.app/"}><div className="twitter"><FaTwitter /></div></TwitterShareButton>
        <ViberShareButton url={"https://zdravoisrecnodete.netlify.app/"}><div className="viber"><FaViber /></div></ViberShareButton>
    </div>
}

export default podeli