import React from 'react'
import { IoLogoWhatsapp, IoIosPhonePortrait } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

import classes from './StickyButtons.module.css'

export const StickyButtons = () => {
  return (
    <div className={classes.stickyMediaBar}>
        <a className={classes.stickyMediaButton} href='https://wa.me/50257458394' style={{backgroundColor: '#25d366'}}>
            <IoLogoWhatsapp className={classes.stickyMediaIcon}/>
        </a>
        <a className={classes.stickyMediaButton} href='tel:+50257458394' itemprop="telephone">
            <AiFillPhone className={classes.stickyMediaIcon}/>
        </a>
    </div>
  )
}
