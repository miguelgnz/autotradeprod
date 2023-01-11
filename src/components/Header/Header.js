import React from 'react'
import Slide from './Slide'

import mitsubishi from '../../assets/header/mitsubishi.jpeg'
import hilux from '../../assets/header/hilux1.jpeg'
import toyota from '../../assets/header/toyota.jpeg'

import classes from './Header.module.css'


const slides = [
    {
        id: 1,
        image: mitsubishi,
        text: 'ASEGURAMOS TU COMPRA',
    },
    {
        id: 2,
        image: hilux,
        text: 'SEMINUEVOS DE AGENCIA',
    },
    {
        id: 3,
        image: toyota,
        text: 'VEHICULOS CONFIABLES A LOS MEJORES PRECIOS',
    }
]

const Header = () => {



  return (
    <header className={classes.headerMainContainer}>
        <Slide slides={slides}/>
    </header>
  )
}

export default Header