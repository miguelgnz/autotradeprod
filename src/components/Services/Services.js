import React from 'react'
import { GiShakingHands, GiMoneyStack, GiMagnifyingGlass, GiShoppingCart } from "react-icons/gi";

import classes from './Services.module.css'

const Services = () => {
  return (
    <div>
        <h1 className={classes.servicesTitle}>NUESTROS SERVICIOS</h1>
        <div className={classes.servicesCardsContainer}>
            <div className={classes.servicesCard}>
                <div className={classes.iconWrapper}>
                    <GiShoppingCart className={classes.servicesIcon}/>
                </div>
                <h3 className={classes.serviceTitle}>COMPRA</h3>
                <p className={classes.serviceText}>Compramos tu vehículo modelo 2014 en adelante. </p>
            </div>
            <div className={classes.servicesCard}>
                <div className={classes.iconWrapper}>
                    <GiShakingHands className={classes.servicesIcon}/>
                </div>
                 <h3 className={classes.serviceTitle}>VENTA</h3>
                <p className={classes.serviceText}>Vehículos SEMI-NUEVOS, de AGENCIA e importados disponibles. </p>
            </div>
            <div className={classes.servicesCard}>
                <div className={classes.iconWrapper}>
                    <GiMagnifyingGlass className={classes.servicesIcon}/>
                </div>
                 <h3 className={classes.serviceTitle}>PROMOCIÓN</h3>
                <p className={classes.serviceText}>Promocionamos tu vehículo en venta, previo AVALUO. </p>
            </div>
            <div className={classes.servicesCard}>
                <div className={classes.iconWrapper}>
                    <GiMoneyStack className={classes.servicesIcon}/>
                </div>
                 <h3 className={classes.serviceTitle}>FINANCIAMIENTO</h3>
                <p className={classes.serviceText}>Financiamiento Bancario Disponible. </p>
            </div>
        </div>
    </div>
  )
}

export default Services