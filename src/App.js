import React from 'react';
import './App.css';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';

function App() {
  return (
     <div>
     <Header />
     <Hero />
     <Features/>
     <Testimonial/>
     <CallToAction/>
     <Footer/>
     </div>
  );
}

export default App;
