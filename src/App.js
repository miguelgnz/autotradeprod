import './App.css';
import React, { Fragment } from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Services from './components/Services/Services';
import BrandsBanner from './components/BrandsBanner/BrandsBanner';
import CarsGrid from './components/CarsGrid/CarsGrid';
import BannerMessage from './components/BannerMessage/BannerMessage';
import SocialMedia from './components/SocialMedia/SocialMedia';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

import { StickyButtons } from './components/StickyButtons/StickyButtons';

const App = () =>
  <Fragment>
    <StickyButtons />
    <Navbar />
    <Header />
    <Services />
    <BrandsBanner />
    <CarsGrid />
    <BannerMessage />
    <SocialMedia />
    <AboutUs />
    <Footer />
  </Fragment>  

export default App;
