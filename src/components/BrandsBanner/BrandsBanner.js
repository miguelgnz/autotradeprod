import React from 'react'
import classes from './BrandsBanner.module.css';

import 'car-makes-icons/dist/style.css';

const BrandsBanner = () => {
  return (
    <div className={classes.mainWrapper}>
      {/* <h1 className={classes.title}>LAS MEJORES MARCAS DISPONIBLES</h1> */}
      <div className={classes.brandsBanner}>
        <i className='car-toyota' />
        <i className='car-mitsubishi' />
        <i className='car-volkswagen' />
        <i className='car-nissan' />
        <i className='car-honda' />
        <i className='car-bmw' />
        <i className='car-mazda' />
        <i className='car-kia' />
        <i className='car-hyundai' />
      </div>
    </div>
  )
}

export default BrandsBanner