import React from 'react';
import { DollarSign, Users, Code, Video, TrendingUp, Target } from 'lucide-react';

const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Freemium App",
      description: "Free basic features with premium subscriptions",
      pricing: "PKR 200/month",
      target: "Individual users",
      potential: "15M+ users"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "API SaaS",
      description: "Speech-to-text and text-to-speech APIs for businesses",
      pricing: "Usage-based",
      target: "NGOs, EdTech, Banks",
      potential: "1K+ enterprises"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Creator Tools",
      description: "Subtitles and voiceover services for content creators",
      pricing: "Subscription + Credits",
      target: "YouTubers, Podcasters",
      potential: "10K+ creators"
    }
  ];

  const financials = [
    { metric: "Break-even Timeline", value: "2 months", description: "After initial user acquisition" },
    { metric: "Profit Margin", value: ">80%", description: "Once scaled with cloud efficiency" },
    { metric: "Customer Acquisition", value: "<PKR 50", description: "Through community networks" },
    { metric: "Monthly Growth", value: "25%+", description: "Projected user base expansion" }
  ];

  return (
    <section id="business-model" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Business Model & Revenue
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sustainable revenue streams designed for rapid growth and long-term profitability.
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-accent/80 to-accent p-4 rounded-2xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                <div className="text-gray-900">{stream.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{stream.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{stream.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm">Pricing:</span>
                  <span className="text-accent font-medium">{stream.pricing}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm">Target:</span>
                  <span className="text-white text-sm">{stream.target}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400 text-sm">Potential:</span>
                  <span className="text-accent font-medium text-sm">{stream.potential}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Projections */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Financial Metrics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financials.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-accent/20 to-accent/10 p-6 rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">{item.value}</div>
                  <div className="text-white font-semibold mb-2">{item.metric}</div>
                  <div className="text-gray-300 text-sm">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Opportunity */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-accent/30 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-accent p-4 rounded-2xl">
              <TrendingUp className="h-10 w-10 text-gray-900" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Investment Opportunity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">$3,300</div>
              <div className="text-gray-300">Seed Investment Goal</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3 months</div>
              <div className="text-gray-300">To MVP Launch</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10x ROI</div>
              <div className="text-gray-300">Projected 2-year return</div>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join us in revolutionizing how 30+ million Sindhi speakers interact with AI technology. 
            Be part of the first startup to bring voice AI to this underserved market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;