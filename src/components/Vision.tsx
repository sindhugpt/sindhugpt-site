import React from 'react';
import { Globe, Heart, Zap } from 'lucide-react';

const Vision = () => {
  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every language deserves a digital presence. SindhuGPT ensures Sindhi thrives in the AI era,
            connecting our heritage with tomorrow's technology.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-accent/80 to-accent p-4 rounded-2xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
              <Globe className="h-8 w-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
            <p className="text-gray-300 leading-relaxed">
              Connect 30+ million Sindhi speakers across Pakistan, India, and the diaspora through 
              innovative AI technology that understands our language and culture.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-accent/80 to-accent p-4 rounded-2xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
              <Heart className="h-8 w-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Cultural Pride</h3>
            <p className="text-gray-300 leading-relaxed">
              Preserve and promote the beauty of Sindhi language while embracing modern technology.
              Our AI speaks with the heart of our community.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-accent/80 to-accent p-4 rounded-2xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
              <Zap className="h-8 w-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
            <p className="text-gray-300 leading-relaxed">
              Cutting-edge AI models fine-tuned specifically for Sindhi, delivering natural 
              conversations and meaningful interactions in our mother tongue.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-200 italic leading-relaxed">
            "In the digital age, language is power. By giving Sindhi a voice in AI, 
            we're not just building technology—we're building bridges to the future 
            while honoring our past."
          </blockquote>
          <p className="text-accent font-semibold mt-6 text-lg">— SindhuGPT Founding Team</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;