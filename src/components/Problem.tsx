import React from 'react';
import { AlertCircle, Smartphone, Users, GraduationCap } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Exclusion",
      description: "Mainstream AI assistants don't understand Sindhi, leaving millions unable to benefit from voice technology."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Language Barrier",
      description: "Healthcare, education, and government services lack Sindhi language support in digital platforms."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Limited Resources",
      description: "Students and professionals struggle with translation and communication tools that don't support Sindhi."
    },
    {
      icon: <AlertCircle className="h-8 w-8" />,
      title: "Cultural Gap",
      description: "Technology advancement without linguistic inclusion threatens the digital presence of our language."
    }
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            30+ million Sindhi speakers worldwide are being left behind in the AI revolution. 
            It's time to change that.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="group bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm p-8 rounded-3xl border border-red-700/30 hover:border-red-400/50 transition-all duration-300">
              <div className="text-red-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Story Example */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">A Real Story</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-light text-gray-200 italic leading-relaxed text-center">
              "A farmer in rural Sindh owns a smartphone but can't ask for crop advice in Sindhi. 
              He knows exactly what he needs to know, but the language barrier prevents him from 
              accessing AI-powered agricultural guidance that could improve his harvest."
            </blockquote>
            <div className="flex justify-center mt-8">
              <div className="bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-3 rounded-full">
                <p className="text-gray-900 font-semibold">This is the gap we're filling.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">0</div>
            <div className="text-gray-300">Major AI assistants supporting Sindhi</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">30M+</div>
            <div className="text-gray-300">People digitally underserved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
            <div className="text-gray-300">Market opportunity untapped</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;