import React from 'react';
import { ArrowRight, Users, Building, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="bg-gradient-to-r from-accent/80 to-accent p-6 rounded-3xl shadow-2xl">
            <div className="text-4xl font-bold text-gray-900">سِ</div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-accent bg-clip-text text-transparent">
          Giving Sindhi a <br />
          <span className="text-accent">Digital Voice</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          The first AI voice assistant for 30+ million Sindhi speakers worldwide. 
          Bringing cutting-edge AI technology to preserve and promote our beautiful language.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-accent/90 to-accent hover:from-accent hover:to-accent/80 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-accent/25 hover:scale-105"
          >
            <Users className="h-5 w-5" />
            Join Waitlist
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group border-2 border-accent text-accent hover:bg-accent hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:scale-105"
          >
            <Building className="h-5 w-5" />
            Partner with Us
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:scale-105"
          >
            <TrendingUp className="h-5 w-5" />
            Investor Deck
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-accent/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-accent mb-2">30M+</div>
            <div className="text-gray-300">Sindhi Speakers Worldwide</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-accent/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-accent mb-2">First</div>
            <div className="text-gray-300">AI Voice Assistant for Sindhi</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-accent/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-accent mb-2">$3.3K</div>
            <div className="text-gray-300">Seed Investment Goal</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;