import React from 'react'
import img1 from '../../assets/about/1.png'
import img2 from '../../assets/about/2.jpg'
import img3 from '../../assets/about/3.jpg'
import img4 from '../../assets/about/4.jpg'

export const About = () => {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Sobre Nosotros</h2>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={img1} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">¿Quiénes somos?</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Somos un predio virtual con más de 8 años de experiencia en el mercado, poniendo a disposición de nuestros clientes vehículos 100% confiables a precios competitivos con opción de financiamiento bancario, consignación o pago de contado.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={img4} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Nuestros Vehículos</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Contamos con un stock de vehículos de alto rendimiento, semi-nuevos, de agencia e importados, modelos 2012 en adelante a los mejores precios. Trabajamos con previa cita y puedes llevar a tu mecánico de confianza para revisión.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={img2} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Financiamiento bancario</h4>
                            </div>
                            <div className="timeline-body">
                                
                                <div className="requirements-list">
                                
                                    <ul className='requirements-ul'>
                                    <p className="text-muted">*Requisitos:</p>
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
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={img3} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Otras formas de pago</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Recibimos tu vehículo como parte del pago total previo a una revisión correspondiente. Recibimos únicamente vehículos de agencia y algunas marcas en particular, visíta nuestras redes sociales para más información.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Aseguramos
                                <br />
                                tu
                                <br />
                                compra!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
