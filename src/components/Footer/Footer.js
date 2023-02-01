import React from 'react'

import classes from './Footer.module.css'

import { BsPhone} from 'react-icons/bs';
import { CiMail } from "react-icons/ci";

import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className={classes.mainContainer}>
            <div className={classes.footerSection}>
                <h3 className={classes.footerTitle}>ENLACES</h3>
                <div className={classes.contactList}>
                    {/* eslint-disable-next-line */}
                    <a className={classes.footerLink} href='#'>Inicio</a>
                    <a className={classes.footerLink} href='#servicios'>Servicios</a>
                    <a className={classes.footerLink} href='#catalogo'>Catálogo</a>
                    <a className={classes.footerLink} href='#redessociales'>Contacto</a>
                    <a className={classes.footerLink} href='#quienessomos'>Quienes Somos</a>
                </div>
            </div>
            <div className={classes.footerSection}>
                <h3 className={classes.footerTitle}>CONTÁCTANOS</h3>
                <div className={classes.contactList}>
                    <div className={classes.footerListElement}> 
                        <BsPhone className={classes.footerListIcon}/> 
                        <p>+502 5745-8394</p>
                    </div>
                    <div className={classes.footerListElement}> 
                        <CiMail className={classes.footerListIcon}/> 
                        <p>autotrade.gt@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={classes.footerSection}>
                <h3 className={classes.footerTitle}>SÍGUENOS</h3>
                <div className={classes.socialMediaList}>
                    <a 
                        className={classes.footerSocialIcon} 
                        href='https://www.facebook.com/autotradegt'
                        target="_blank"
                        rel='noreferrer'
                    >
                        <FaFacebook />
                    </a>
                    <a 
                        className={classes.footerSocialIcon} 
                        href='https://www.instagram.com/autotradegt'
                        target="_blank"
                        rel='noreferrer'
                    >
                        <FaInstagram />
                    </a>
                    <a 
                        className={classes.footerSocialIcon} 
                        href='https://www.tiktok.com/@autotradegt?'
                        target="_blank"
                        rel='noreferrer'
                    >
                        <FaTiktok />
                    </a>
                </div>
                <div className={classes.copyrightTextContainer}>
                    <p className={classes.bottomText}>Copyright &copy; Auto Trade GT 2021</p>
                    <p className={classes.bottomText}>Sitio Web desarrollado por Miguel Gnz</p>
                </div>
            </div>
    </div>
  )
}

export default Footer