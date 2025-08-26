import React from 'react';
import { ArrowRight, Users, Building, TrendingUp, Mail, MessageCircle, Phone } from 'lucide-react';

const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Ready to Give Sindhi <br />a Digital Voice?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join the movement to bring AI technology to 30+ million Sindhi speakers worldwide. 
            Whether you're a user, partner, or investor - we have a place for you.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Users CTA */}
          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-accent/80 to-accent p-6 rounded-3xl w-fit mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
              <Users className="h-12 w-12 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Users</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Be among the first to talk to AI in Sindhi. Join our waitlist and get early access to SindhuGPT.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYkfl9WyXYcYub00VSJR7PDbP7aYdWspan-d8xnh3tjd8-Yw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-accent hover:bg-accent/80 text-gray-900 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <Users className="h-5 w-5" />
                Join Waitlist
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <div className="mt-4 text-accent text-sm font-medium">
              150+ people already registered
            </div>
          </div>

          {/* Partners CTA */}
          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-accent/80 to-accent p-6 rounded-3xl w-fit mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
              <Building className="h-12 w-12 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Partners</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              NGOs, EdTech, healthcare organizations - let's bring AI to your Sindhi-speaking communities.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="group w-full border-2 border-accent text-accent hover:bg-accent hover:text-gray-900 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Building className="h-5 w-5" />
              Partner with Us
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-4 text-gray-400 text-sm">
              Organizations welcome
            </div>
          </div>

          {/* Investors CTA */}
          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-accent/80 to-accent p-6 rounded-3xl w-fit mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Investors</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              $3,300 seed investment → MVP in 3 months → Break-even in 2 months. Join our vision.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/your-investor-form-or-deck-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="h-5 w-5" />
                View Investor Deck
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <div className="mt-4 text-gray-400 text-sm">
              Seeking $3,300 seed funding
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Email Us</h4>
              <a 
                href="mailto:sindhugpt.ai@gmail.com" 
                className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
              >
                sindhugpt.ai@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">WhatsApp</h4>
              <a 
                href="https://wa.me/923140665954" 
                className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
              >
                +92 314 066 5954
              </a>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Call Us</h4>
              <a 
                href="tel:+923102486472" 
                className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
              >
                +92 310 248 6472
              </a>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center border-t border-gray-700 pt-8">
            <blockquote className="text-xl md:text-2xl font-light text-gray-200 italic leading-relaxed mb-4">
              "Every conversation in Sindhi with AI is a step toward preserving our heritage and embracing our future."
            </blockquote>
            <p className="text-accent font-semibold">— SindhuGPT Team</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">30M+</div>
            <div className="text-gray-300 text-sm">Sindhi Speakers to Serve</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">0</div>
            <div className="text-gray-300 text-sm">Current AI Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">$3.3K</div>
            <div className="text-gray-300 text-sm">Investment Goal</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3 mo</div>
            <div className="text-gray-300 text-sm">To MVP Launch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
