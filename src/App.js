import './App.css';
import React, { Fragment } from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Services from './components/Services/Services';
import BrandsBanner from './components/BrandsBanner/BrandsBanner';
import CarsGrid from './components/CarsGrid/CarsGrid';
import SocialMedia from './components/SocialMedia/SocialMedia';

import { About } from './components/layout/About';
import { Footer } from './components/layout/Footer';
import { StickyButtons } from './components/StickyButtons/StickyButtons';

const App = () =>
  <Fragment>
    <StickyButtons />
    <Navbar />
    <Header />
    <Services />
    <BrandsBanner />
    <CarsGrid />
    <SocialMedia />
    <About />
    <Footer />
  </Fragment>  

export default App;
