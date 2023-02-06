import React, {useState} from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsXLg } from 'react-icons/bs';
import { GiGearStickPattern, GiGasPump, GiCarWheel } from 'react-icons/gi';
import { FaTachometerAlt } from 'react-icons/fa';

import classes from './Modal.module.css'

const Modal = ({isVisible, onClose, carDetails}) => {
    const [current, setCurrent] = useState(0);

    const sliderData = carDetails.images
    const length = carDetails.images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

  return (
    <>
        {isVisible && (
            <div>
                <div className={classes.overlay} onClick={onClose} />
                <div className={classes.modal} >
                    {/* Modal Content */}
                    <h1 className={classes.modalTitle}>
                        {`${carDetails.title}  ${carDetails.year}`}
                    </h1>
                    
                    <BsXLg className={classes.closeBtn} onClick={onClose}/>

                    <div className={classes.mainContainer}>
                        <div className={classes.imagePresentation}>
                            <BsFillArrowLeftCircleFill className={classes.leftArrow} onClick={prevSlide}/>
                            <BsFillArrowRightCircleFill className={classes.rightArrow} onClick={nextSlide}/>
                            {sliderData.map((slide, index) => {
                                return(
                                    <div
                                        className={
                                        index === current
                                            ? `${classes.slide} ${classes.active}`
                                            : `${classes.slide}`
                                        }
                                        key={index}
                                    >
                                    {index === current && (
                                        <img src={slide} alt='slide' className={classes.sliderImg} />
                                    )}
                                    </div>
                                )
                            })}
                        </div>
                        <div className={classes.specsList}>
                            <ul className={classes.specsListed}>
                                <li className={classes.specItem}>
                                    <GiGearStickPattern className={classes.specIcon}/>
                                    <span className={classes.specDetail}>Transmisión: {carDetails.transmission}</span>
                                </li>
                                <li className={classes.specItem}>
                                    <GiGasPump className={classes.specIcon}/>
                                    <span className={classes.specDetail}>Combustible: {carDetails.fuel}</span>
                                </li>
                                <li className={classes.specItem}>
                                    <FaTachometerAlt className={classes.specIcon}/>                                  
                                    <span className={classes.specDetail}>Kilometros: {`${carDetails.mileage}.000`}</span>
                                </li>
                                <li className={classes.specItem}>
                                    <GiCarWheel className={classes.specIcon}/>
                                    <span className={classes.specDetail}>Motor: {carDetails.motor}</span>                                
                                </li>
                                {/* <li className={classes.specItem}>
                                    <FaPlus className={classes.specIcon}/>
                                    <span className={classes.specDetail}>Extras: {carDetails.extras}</span>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Modal