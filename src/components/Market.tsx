import React from 'react';
import { Users, MessageSquare, GraduationCap, Building, Heart, Youtube } from 'lucide-react';

const Market = () => {
  const marketSegments = [
    {
      icon: <Users className="h-10 w-10" />,
      title: "Everyday Users",
      size: "15M+ potential users",
      description: "Voice assistant for daily tasks, questions, and conversations in Sindhi.",
      revenue: "Freemium + Premium subscriptions"
    },
    {
      icon: <Youtube className="h-10 w-10" />,
      title: "Content Creators",
      size: "10K+ creators",
      description: "Subtitles, voiceovers, and content creation tools for Sindhi media.",
      revenue: "Subscription + Usage-based"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "NGOs & Healthcare",
      size: "1K+ organizations",
      description: "Health education, literacy programs, and community outreach in Sindhi.",
      revenue: "API licensing + Custom solutions"
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Education & Students",
      size: "5M+ students",
      description: "Translation, learning assistance, and educational content in Sindhi.",
      revenue: "Institutional licenses"
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Enterprises",
      size: "500+ companies",
      description: "Banks, government, and businesses serving Sindhi-speaking customers.",
      revenue: "Enterprise API contracts"
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Communication",
      size: "20M+ interactions",
      description: "Real-time translation and communication tools for Sindhi speakers.",
      revenue: "Premium features + API calls"
    }
  ];

  return (
    <section id="market" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Market & Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Serving 30+ million Sindhi speakers worldwide across diverse sectors and use cases.
          </p>
        </div>

        {/* Market Size */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-accent/30 text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">Total Addressable Market</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">30M+</div>
              <div className="text-gray-300">Global Sindhi Speakers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$50B+</div>
              <div className="text-gray-300">AI Voice Assistant Market</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">0%</div>
              <div className="text-gray-300">Current Sindhi Coverage</div>
            </div>
          </div>
        </div>

        {/* Market Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {marketSegments.map((segment, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {segment.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{segment.title}</h3>
              <div className="text-accent text-sm font-medium mb-4">{segment.size}</div>
              <p className="text-gray-300 leading-relaxed mb-4">{segment.description}</p>
              <div className="bg-gray-800/60 px-4 py-2 rounded-xl">
                <p className="text-gray-400 text-xs">{segment.revenue}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Geographic Distribution */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Global Sindhi Population</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15M+</div>
              <div className="text-gray-300 mb-2">Pakistan</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10M+</div>
              <div className="text-gray-300 mb-2">India</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3M+</div>
              <div className="text-gray-300 mb-2">Diaspora</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2M+</div>
              <div className="text-gray-300 mb-2">Other Regions</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '7%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;