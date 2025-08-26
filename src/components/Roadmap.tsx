import React from 'react';
import { Calendar, Users, Rocket, Globe, CheckCircle, Clock, Target } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      phase: "Foundation",
      timeline: "0-3 months",
      status: "in-progress",
      icon: <CheckCircle className="h-8 w-8" />,
      description: "Data collection and model training",
      milestones: [
        "Sindhi speech dataset collection (1000+ hours)",
        "Fine-tune Whisper for Sindhi speech recognition",
        "Train Phi-3 model on Sindhi language corpus",
        "Develop TTS models with natural Sindhi voices",
        "Core API development and testing"
      ],
      funding: "$1,000 invested"
    },
    {
      phase: "MVP Launch",
      timeline: "3-6 months",
      status: "planned",
      icon: <Rocket className="h-8 w-8" />,
      description: "First public release of apps and APIs",
      milestones: [
        "Launch mobile app for iOS and Android",
        "Deploy web application platform",
        "Release developer APIs (beta)",
        "Onboard first 500 beta users",
        "Establish partnerships with 2-3 NGOs"
      ],
      funding: "$2,300 additional needed"
    },
    {
      phase: "Growth",
      timeline: "6-12 months",
      status: "planned",
      icon: <Users className="h-8 w-8" />,
      description: "Scale to 5,000+ active users",
      milestones: [
        "Reach 5,000 monthly active users",
        "Launch premium subscription tiers",
        "Integrate with major Sindhi media platforms",
        "Expand to enterprise customers",
        "Break-even achievement"
      ],
      funding: "Revenue-funded growth"
    },
    {
      phase: "Expansion",
      timeline: "Year 2",
      status: "planned",
      icon: <Globe className="h-8 w-8" />,
      description: "Multi-language expansion and scale",
      milestones: [
        "Expand to other regional languages",
        "International market entry (UAE, UK, US)",
        "Advanced AI features (emotion, context)",
        "Partnership with government initiatives",
        "Series A funding preparation"
      ],
      funding: "Seeking Series A"
    }
  ];

  const currentMetrics = [
    { label: "Development Progress", value: "65%", description: "Core models in training" },
    { label: "Beta Users", value: "150", description: "Early testers enrolled" },
    { label: "API Partnerships", value: "3", description: "NGOs in discussion" },
    { label: "Funding Secured", value: "$1K", description: "Of $3.3K goal" }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Roadmap & Milestones
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our strategic path to becoming the leading AI voice platform for Sindhi speakers.
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-accent/30 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Current Status</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {currentMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-white font-medium mb-1">{metric.label}</div>
                <div className="text-gray-300 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className={`relative ${index !== phases.length - 1 ? 'pb-8' : ''}`}>
              {/* Connector Line */}
              {index !== phases.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-accent/50 to-accent/20"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Phase Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                  phase.status === 'in-progress' 
                    ? 'bg-accent text-gray-900' 
                    : 'bg-gray-700 text-accent'
                }`}>
                  {phase.icon}
                </div>

                {/* Phase Content */}
                <div className="flex-grow bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Phase {index + 1}: {phase.phase}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-accent">
                          <Calendar className="h-4 w-4 mr-2" />
                          {phase.timeline}
                        </div>
                        <div className={`flex items-center ${
                          phase.status === 'in-progress' ? 'text-accent' : 'text-gray-400'
                        }`}>
                          <Clock className="h-4 w-4 mr-2" />
                          {phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="bg-accent/20 text-accent px-4 py-2 rounded-xl text-sm font-medium">
                        {phase.funding}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-lg">{phase.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold flex items-center">
                      <Target className="h-5 w-5 mr-2 text-accent" />
                      Key Milestones
                    </h4>
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Success Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
              <div className="text-2xl font-bold text-accent mb-3">Break-even in 2 months</div>
              <div className="text-gray-300">After MVP launch with initial user base</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
              <div className="text-2xl font-bold text-accent mb-3">5K users by month 12</div>
              <div className="text-gray-300">Growing community of Sindhi AI users</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
              <div className="text-2xl font-bold text-accent mb-3">{'>'}80% profit margin</div>
              <div className="text-gray-300">Sustainable, scalable business model</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;