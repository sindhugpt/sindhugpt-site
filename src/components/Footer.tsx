import React from 'react';
import { Cpu, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Vision', id: 'vision' },
    { name: 'Problem', id: 'problem' },
    { name: 'Solution', id: 'solution' },
  ];

  const productLinks = [
    { name: 'Product', id: 'product' },
    { name: 'Market', id: 'market' },
    { name: 'Roadmap', id: 'roadmap' },
    { name: 'Team', id: 'team' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-accent/80 to-accent p-2 rounded-xl">
                <Cpu className="h-6 w-6 text-gray-900" />
              </div>
              <span className="text-2xl font-bold text-white">SindhuGPT</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              The first AI voice assistant for Sindhi speakers worldwide. 
              Preserving our beautiful language while embracing the future of technology.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <a href="mailto:hello@sindhugpt.com" className="hover:text-accent transition-colors duration-300">
                  hello@sindhugpt.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:+923001234567" className="hover:text-accent transition-colors duration-300">
                  +92 300 123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 mb-12 text-center">
          <blockquote className="text-lg md:text-xl font-light text-gray-200 italic leading-relaxed">
            "In a world where technology speaks every language but ours, 
            we're building bridges between our heritage and our future."
          </blockquote>
          <p className="text-accent font-semibold mt-4">— Our Mission</p>
        </div>

        {/* Social Links & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-accent hover:text-gray-900 text-gray-300 p-3 rounded-xl transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@sindhugpt.com" 
              className="bg-gray-800 hover:bg-accent hover:text-gray-900 text-gray-300 p-3 rounded-xl transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <div className="text-gray-400 text-sm mb-2">
              © 2024 SindhuGPT. All rights reserved.
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-4 text-gray-500 text-xs">
              <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center pt-8 border-t border-gray-800 mt-8">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-400 mx-2" /> for the Sindhi community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;