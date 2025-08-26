import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Product from './components/Product';
import Market from './components/Market';
import BusinessModel from './components/BusinessModel';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <Hero />
      <Vision />
      <Problem />
      <Solution />
      <Product />
      <Market />
      <BusinessModel />
      <Roadmap />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;