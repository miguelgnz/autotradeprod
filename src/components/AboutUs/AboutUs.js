import React from 'react'

import classes from './AboutUs.module.css'
import logo from '../../assets/logos/navbar-logo.svg'
import vehicles from '../../assets/about/interior.jpeg'
import agreement from '../../assets/about/agreement.jpeg'
import carkeys from '../../assets/about/carkeys.jpg'

const AboutUs = () => {
  return (
      <div id='quienessomos'>
          <h1 className={classes.aboutTitle}>QUIÉNES SOMOS</h1>
          <div className={classes.panel}>
              <div 
                className={classes.panelImage}
              >
                <div 
                  className={classes.imageWrapper}
                  style={
                    {
                      width: '230px',
                      height: '230px'
                    }
                  }
                >
                  <img src={logo} alt='logo' className={classes.imageElement}/>
                </div>
              </div>
              <div className={classes.panelInfo}>
                <h2 className={classes.panelTitle}>SOBRE NOSOTROS</h2>
                <p className={classes.panelParagraph}>
                  Somos un predio virtual con más de 15 años de experiencia en el mercado, 
                  poniendo a disposición de nuestros clientes vehículos 100% confiables a precios competitivos. 
                  Ofrecemos FINANCIAMIENTO BANCARIO, CONSIGNACIÓN o PAGO DE CONTADO.
                </p>
              </div>
          </div>
          <div className={classes.panelReverse}>
            <div className={classes.panelImage}>
              <div className={classes.imageWrapper}>
                <img src={vehicles} alt='vehiculos' className={classes.imageElement}/>
              </div>
            </div>
            <div className={classes.panelInfo}>
              <h2 className={classes.panelTitle}>NUESTROS VEHÍCULOS</h2>
              <p className={classes.panelParagraph}>
                Contamos con un stock de vehículos de alto rendimiento, semi-nuevos, de agencia e importados, 
                modelos 2012 en adelante a los mejores precios. Trabajamos con previa cita y puedes llevar a 
                tu mecánico de confianza para revisión.
              </p>
            </div>
          </div>
          <div className={classes.panel}>
            <div className={classes.panelImage}>
              <div className={classes.imageWrapper}>
                <img src={agreement} alt='financiamiento' className={classes.imageElement}/>
              </div>
            </div>
            <div className={classes.panelInfo}>
              <h2 className={classes.panelTitle}>FINANCIAMIENTO BANCARIO</h2>
              <ul className={classes.panelList}>
                <li><strong>Enganche mínimo del 30%</strong></li>
                <li>Llenar formulario</li>
                <li>Constancia de ingresos actualizada, firmada y sellada</li>
                <li>Últimos 3 estados de cuenta bancarios a nombre del TITULAR del crédito, firmados y sellados por el banco</li>
                <li>DPI y un documento secundario</li>
                <li>NIT o RTU actualizado</li>
                <li>Recibo de servicios</li>
              </ul>
            </div>
          </div>
          <div className={classes.panelReverse}>
            <div className={classes.panelImage}>
              <div className={classes.imageWrapper}>
                <img src={carkeys} alt='pagos' className={classes.imageElement}/>
              </div>
            </div>
            <div className={classes.panelInfo}>
              <h2 className={classes.panelTitle}>OTRAS FORMAS DE PAGO</h2>
              <p className={classes.panelParagraph}>
                Recibimos tu vehículo como parte del pago total previo a una revisión correspondiente. Recibimos 
                únicamente vehículos de agencia y algunas marcas en particular, visita nuestras redes sociales para 
                más información.
              </p>
            </div>
          </div>
      </div>
  )
}

export default AboutUs