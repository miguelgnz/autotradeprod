import React, {useState} from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import classes from './SocialMedia.module.css'

const SocialMedia = () => {

    const [isFacebookHover, setisFacebookHover] = useState(false)
    const [isInstagramHover, setisInstagramHover] = useState(false)
    const [isWhatsappHover, setisWhatsappHover] = useState(false)
    const [isTiktokHover, setisTiktokHover] = useState(false)

    const handleMouseEnter = (e) => { 
        const iconHovered = e._targetInst.key

        switch (iconHovered) {
            case 'facebook':
                setisFacebookHover(true)
                break;
            case 'instagram':
                setisInstagramHover(true)
                break;
            case 'whatsapp':
                setisWhatsappHover(true)
                break;
            case 'tiktok':
                setisTiktokHover(true)
                break;
            default:
                break;
        }
     }

    const handleMouseLeave = (e) => { 
        const iconUnHovered = e._targetInst.key

        switch (iconUnHovered) {
            case 'facebook':
                setisFacebookHover(false)
                break;
            case 'instagram':
                setisInstagramHover(false)
                break;
            case 'whatsapp':
                setisWhatsappHover(false)
                break;
            case 'tiktok':
                setisTiktokHover(false)
                break;
            default:
                break;
        }
     }

  return (
    <div 
        className={classes.socialContainer}
        id='redessociales'
    >
        <h1 className={classes.socialTitle}>NUESTRAS REDES SOCIALES</h1>
        <a 
            className={classes.socialIconWrapper}
            href="https://www.facebook.com/autotradegt"
            target="_blank"
            rel='noreferrer'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key='facebook'
            style={
                {
                    backgroundColor: isFacebookHover ? '#3B5998' : '#FFFFFF',
                }
            }
        >
            <FaFacebookF 
                style={
                    {
                        color: isFacebookHover ? '#FFFFFF' : '#3B5998',
                        fontSize: isFacebookHover ? '2.3rem' : '2rem',
                    }
                }
            />
        </a>
        <a 
            className={classes.socialIconWrapper}
            href="https://www.instagram.com/autotradegt"
            target="_blank"
            rel='noreferrer'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key='instagram'
            style={
                {
                    backgroundColor: isInstagramHover ? '#bd22a2' : '#FFFFFF',
                }
            }
        >
            <FaInstagram 
                className={classes.socialIcon} 
                style={
                    {
                        color: isInstagramHover ? '#FFFFFF' : '#bd22a2',
                        fontSize: isInstagramHover ? '2.3rem' : '2rem',
                    }
                }
            />
        </a>
        <a 
            className={classes.socialIconWrapper}
            href="https://wa.me/50257458394"
            target="_blank"
            rel='noreferrer'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key='whatsapp'
            style={
                {
                    backgroundColor: isWhatsappHover ? '#25d366' : '#FFFFFF',
                }
            }
        >
            <FaWhatsapp 
                className={classes.socialIcon} 
                style={
                    {
                        color: isWhatsappHover ? '#FFFFFF' : '#25d366',
                        fontSize: isWhatsappHover ? '2.3rem' : '2rem',
                    }
                }
            />
        </a>
        <a 
            className={classes.socialIconWrapper}
            href="https://www.tiktok.com/@autotradegt?"
            target="_blank"
            rel='noreferrer'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key='tiktok'
            style={
                {
                    backgroundColor: isTiktokHover ? '#000000' : '#FFFFFF',
                }
            }
        >
            <FaTiktok 
                className={classes.socialIcon} 
                style={
                    {
                        color: isTiktokHover ? '#FFFFFF' : '#000000',
                        fontSize: isTiktokHover ? '2.3rem' : '2rem',
                    }
                }
            />
        </a>
    </div>
  )
}

export default SocialMedia