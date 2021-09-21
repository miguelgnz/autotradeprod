import React, { Component } from 'react'
import data from '../../utilities/data'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class OutstandinDynamic extends Component {
    state={
        opened: false,
        selectedCar: null,
        selectedTitle: '',
        selectedSlots: [],
        selectedSpecs: []
    }
    render() {
        const modalStyles={
            display: 'block',
            maxWidth: '90%'
        }

        const modalFooterStyle = {
            justifyContent: 'center'
        }
        
        const openModal = (title, id, slots, specs) => {
            this.setState({
                opened: !this.state.opened,
                selectedCar: id,
                selectedTitle: title,
                selectedSlots: slots,
                selectedSpecs: specs
            });
            document.body.style.overflow = 'hidden';
        }

        const closeModal=()=>{
            this.setState({ opened: !this.state.opened });
            document.body.style.overflow = 'unset';
        }

        const closeBtn = <button className='btn-close' onClick={() => closeModal()}></button>;

        return (
            <>
                <div className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">vehículos destacados</h2>
                            <h3 className="section-subheading text-muted">(Sujetos a disponibilidad)</h3>
                        </div>
                        <div className="row">
                            {data.carData.map((item, index) => {
                                return (
                                    <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                                        <div className="portfolio-item">
                                            <a
                                                className="portfolio-link"
                                                data-bs-toggle="modal"
                                                onClick={() => openModal(item.title, item.id, item.imgSlots, item.specs)}
                                                href='#modalPopup'
                                            >
                                                <div className="portfolio-hover">
                                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                                </div>
                                                <img className="img-fluid" src={item.imgSrc} alt="..." />
                                            </a>
                                            <div className="portfolio-caption">
                                                <div className="portfolio-caption-heading">{item.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <Modal
                        isOpen={this.state.opened}
                        style={modalStyles}
                        scrollable={false}
                        size="lg"
                    >
                        <ModalHeader close={closeBtn}>
                        <h2 className='text-uppercase'> {this.state.selectedTitle} </h2>
                        </ModalHeader>
                        <ModalBody>
                        <div className='container'>
                            <div className='modal-grid-row'>
                                <div className='modal-grid-col'>
                                    <img src={this.state.selectedSlots.slot1} alt="..."></img>
                                </div>
                                <div className='modal-grid-col'>
                                    <img src={this.state.selectedSlots.slot2} alt="..."></img>
                                </div>
                                <div className='modal-grid-col'>
                                    <img src={this.state.selectedSlots.slot3} alt="..."></img>
                                </div>
                            </div>
                            <div className='modal-grid-row'>
                                <div className='modal-grid-col'>
                                    <img src={this.state.selectedSlots.slot4} alt="..."></img>
                                </div>
                                <div className='modal-grid-col'>
                                    <img src={this.state.selectedSlots.slot5} alt="..."></img>
                                </div>
                                <div className='modal-grid-col'>
                                    <img src={this.state.selectedSlots.slot6} alt="..."></img>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter style={modalFooterStyle}>
                    <ul className="list-inline">
                        <li className='modal-footer-list'>
                            <strong>MOTOR:  </strong>
                            {this.state.selectedSpecs.motor}
                        </li>
                        <li className='modal-footer-list'>
                            <strong>TRANSMISIÓN:  </strong>
                            {this.state.selectedSpecs.transmision} 
                        </li>
                        <li className='modal-footer-list'>
                            <strong>KILOMETRAJE:  </strong>
                            {this.state.selectedSpecs.kilometraje}
                        </li>
                        <li className='modal-footer-list'>
                            <strong>COMBUSTIBLE:  </strong>
                            {this.state.selectedSpecs.combustible}
                        </li>
                    </ul>
                </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default OutstandinDynamic