import React from 'react'

export const Services = () => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nuestros Servicios</h2>
                </div>
                <div className="row text-center">
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Compra</h4>
                        <p className="text-muted">Compramos tu vehículo modelo 2014 en adelante.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-handshake fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Venta</h4>
                        <p className="text-muted">Vehículos SEMI-NUEVOS, de AGENCIA e importados disponibles.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-bullhorn fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Promoción</h4>
                        <p className="text-muted">Promocionamos tu vehículo en venta previo a revisión.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-university fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Financiamiento</h4>
                        <p className="text-muted">Financiamiento bancario disponible previo a evaluación.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
