import React, { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

import NavBar from './components/NavBar';
import MobileNavBar from './components/MobileNavBar'
import Hero from './components/Hero';
import Quote from './components/Quote';
import OurStory from './components/OurStory';
import Programme from './components/Programme';
import Gift from './components/Gift';
import Gallery from './components/Gallery';
import Live from './components/Live';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <>
    <MobileNavBar />
    <NavBar />
<div>
    <Hero/>
    <Quote/>
    <OurStory/>
    <div className="space-y-20">
    <Programme/>
    <Gift/>
    <Gallery/>
    <Live/>
    <Footer/>
    </div>
</div>
  

    </>
  );
}

export default App;
