import React from 'react';
import { Mic, Brain, Volume2, ArrowRight } from 'lucide-react';

const Solution = () => {
  const steps = [
    {
      icon: <Mic className="h-12 w-12" />,
      title: "Speech-to-Text",
      description: "Advanced Whisper-based models trained on Sindhi speech patterns and dialects",
      detail: "Understands various Sindhi accents and regional variations"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Understand & Process",
      description: "Fine-tuned LLM (Phi-3/Mistral) with deep Sindhi language comprehension",
      detail: "Contextual understanding of Sindhi culture and expressions"
    },
    {
      icon: <Volume2 className="h-12 w-12" />,
      title: "Natural Speech",
      description: "High-quality TTS using Coqui/Bark for natural Sindhi voices",
      detail: "Emotional and expressive voice synthesis"
    }
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Our Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The first comprehensive AI voice assistant built specifically for Sindhi speakers. 
            Natural, intelligent, and culturally aware.
          </p>
        </div>

        {/* How it Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">How It Works</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="group flex flex-col items-center text-center max-w-sm">
                  <div className="bg-gradient-to-r from-accent/80 to-accent p-6 rounded-3xl mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                    <div className="text-gray-900">{step.icon}</div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">{step.description}</p>
                  <p className="text-accent text-sm font-medium">{step.detail}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block text-accent mx-4">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-accent/30 text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            For the First Time Ever
          </h3>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Sindhi speakers can interact with AI in their own language and voice. 
            Ask questions, get answers, and engage with technology that truly understands you.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-accent/50 transition-colors duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Natural Voices</h4>
            <p className="text-gray-300">Authentic Sindhi pronunciation and intonation that feels like talking to a native speaker.</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-accent/50 transition-colors duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Complete Solution</h4>
            <p className="text-gray-300">End-user apps for consumers plus powerful APIs for developers and enterprises.</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-accent/50 transition-colors duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Affordable Access</h4>
            <p className="text-gray-300">Freemium model ensures everyone can access basic AI assistance in Sindhi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;