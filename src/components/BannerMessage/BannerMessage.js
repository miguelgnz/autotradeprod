import React, { useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import classes from './BannerMessage.module.css'

const BannerMessage = () => {
    useEffect(() => {
      AOS.init({ duration: 2000})
    }, [])
    

  return (
    <div data-aos="fade-up" className={classes.bannerMsg}>
        <h2 className={classes.bannerText} data-aos="zoom-in">Consulta nuestras publicaciones recientes en Facebook</h2>
    </div>
  )
}

export default BannerMessage