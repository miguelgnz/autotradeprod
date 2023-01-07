import React from 'react'
import CarCard from '../layout/CarCard/CarCard'

import { CarsData } from '../../utilities/cars-data'
import classes from './CarsGrid.module.css';

function CarsGrid() {
  return (
    <div id='catalogo'>
        <h1 className={classes.carsTitle}> VEHÍCULOS DESTACADOS </h1>
        <div className={classes.carsContainer}>
            {CarsData.map((car) => {
                return (
                <CarCard
                    key={car.id}
                    slides={car.images}
                    year={car.year}
                    title={car.title}
                    price={car.price}
                    transmission={car.transmission}
                    fuel={car.fuel}
                    mileage={car.mileage}
                    extras={car.extras}
                />
                );
            })}
        </div>
    </div>
  )
}

export default CarsGrid