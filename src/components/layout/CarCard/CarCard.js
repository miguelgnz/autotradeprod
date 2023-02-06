import React, { useState, useEffect } from 'react';
import { GiGearStickPattern, GiGasPump } from 'react-icons/gi';
import { FaTachometerAlt } from 'react-icons/fa';

import classes from './CarCard.module.css';
import MoreInfoBtn from './MoreInfoBtn';

const CarCard = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    const actualSlides = props.slides;
    // eslint-disable-next-line
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    // eslint-disable-next-line
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => {
          return prev + 1 === length ? 0 : prev + 1
        });
        }, 3000);
        return () => clearInterval(interval);
    },[current, length]);

  return (
    <div className={classes.mainCard} >
      {actualSlides.map((slide, index) => {
        return (
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
        );
      })}
      <div className={classes.cardTitles}>
        <p className={classes.cardTitle} id={classes.carModel}>
          {props.year}
        </p>
        <h3 className={classes.cardTitle} id={classes.carTitle}>
          {props.title}
        </h3>
        {/* <p className={classes.cardTitle}>{`Q${props.price}`}</p> */}
        <MoreInfoBtn carDetails={
            {
              title: props.title,
              images: props.slides,
              year: props.year,
              transmission: props.transmission,
              fuel: props.fuel,
              mileage: props.mileage,
              price: props.price,  
              motor: props.motor,
              extras: props.extras
          }
        }/>
      </div>
      <div className={classes.cardIcons}>
        <div className={classes.cardIconElement}>
          <GiGearStickPattern className={classes.cardIcon} />
          <p>{props.transmission}</p>
        </div>
        <div className={classes.cardIconElement}>
          <GiGasPump className={classes.cardIcon} />
          <p>{props.fuel}</p>
        </div>
        <div className={classes.cardIconElement}>
          <FaTachometerAlt className={classes.cardIcon} />
          <p>{`${props.mileage}K KM`}</p>
        </div>
      </div>
    </div>
  )
}

export default CarCard