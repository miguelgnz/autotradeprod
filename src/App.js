import './App.css';
import React, { Fragment } from 'react';
import { Masthead } from './components/layout/Masthead';
import Navbar from './components/layout/Navbar';
import { Services } from './components/layout/Services';
import OutstandinDynamic from './components/layout/OutstandinDynamic';
import { About } from './components/layout/About';
import { Contact } from './components/layout/Contact';
import { Footer } from './components/layout/Footer';

const App = () =>
  <Fragment>
    <Navbar />
    <Masthead />
    <Services />
    <OutstandinDynamic />
    <Contact />
    <About />
    <Footer />
  </Fragment>  

export default App;
