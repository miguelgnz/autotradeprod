import './App.css';
import React, { Fragment } from 'react';
import { Masthead } from './components/layout/Masthead';
import Navbar from './components/Navbar/Navbar';
import { Services } from './components/layout/Services';
import CarsGrid from './components/CarsGrid/CarsGrid';
import { About } from './components/layout/About';
import { Contact } from './components/layout/Contact';
import { Footer } from './components/layout/Footer';
import { StickyButtons } from './components/StickyButtons/StickyButtons';
import BannerMessage from './components/BannerMessage/BannerMessage';

const App = () =>
  <Fragment>
    <StickyButtons />
    <Navbar />
    <Masthead />
    <Services />
    <BannerMessage />
    <CarsGrid />
    <Contact />
    <About />
    <Footer />
  </Fragment>  

export default App;
