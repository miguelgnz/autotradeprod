import React from 'react'
import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react';

import classes from './Navbar.module.css'
import navbarLogo from '../../assets/logos/navbar-logo.svg';


const NAV_ITEMS = [
    {
      id: 1,
      title: 'Inicio',
      url: '#',
    },
    {
      id: 2,
      title: 'Servicios',
      url: '#servicios',
    },
    {
      id: 3,
      title: 'Catálogo',
      url: '#catalogo',
    },
    {
      id: 4,
      title: 'Contacto',
      url: '#redessociales',
    },
    {
      id: 5,
      title: 'Quienes Somos',
      url: '#quienessomos',
    },
  ];

const Navbar = () => {

    const [barsClicked, setBarsClicked] = useState(false)

    const handleClick = () => {
        setBarsClicked(!barsClicked);
    };

    const navigationItems = NAV_ITEMS.map((item) => {
        return (
          <li className={classes.navItem} key={item.id}>
            <a href={item.url} onClick={handleClick}>
              {item.title}
            </a>
          </li>
        );
    });

    const navigationClasses = barsClicked
    ? `${classes.navItems} ${classes.active}`
    : `${classes.navItems}`;

  return (
    <nav >
        <div className={classes.navBrand}>
            {/* eslint-disable-next-line */}
            <a href='#'>
                <img src={navbarLogo} alt={'logo'}/>
            </a>
            {/* eslint-disable-next-line */}
            <a className={classes.navTitle} href='#'>
                VALUE <span id={classes.afterTitle}>MOTORS</span>
            </a>
        </div>
        <div className={classes.menuIcon} onClick={handleClick}>
            <Hamburger
            size={25}
            toggled={barsClicked}
            toggle={setBarsClicked}
            distance='lg'
            duration={0.4}
            easing='ease'
            />
        </div>
        <ul className={navigationClasses}>
            {navigationItems}
        </ul>
    </nav>
  )
}

export default Navbar