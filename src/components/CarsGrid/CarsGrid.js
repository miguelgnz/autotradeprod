import React from 'react'
import CarCard from '../layout/CarCard/CarCard'

import { CarsData } from '../../utilities/cars-data'
import classes from './CarsGrid.module.css';

function CarsGrid() {
  return (
    <div id='catalogo'>
        <div className={classes.carsTitle}>
            <h1>VEHÍCULOS DESTACADOS</h1>
        </div>
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
                    onClick={() => { console.log('first') }}
                />
                );
            })}
        </div>
    </div>
  )
}

export default CarsGrid