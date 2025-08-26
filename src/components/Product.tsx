import React from 'react';
import { Smartphone, Globe, Code, Zap } from 'lucide-react';

const Product = () => {
  const products = [
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile App",
      description: "Native iOS and Android apps with voice assistant, translation, and conversation features.",
      features: ["Voice commands", "Real-time translation", "Offline mode", "Cultural context"]
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Platform",
      description: "Browser-based interface for desktop users with advanced text and voice capabilities.",
      features: ["Web-based chat", "Document translation", "Voice synthesis", "Multi-device sync"]
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Developer APIs",
      description: "RESTful APIs for enterprises, NGOs, and developers to integrate Sindhi AI capabilities.",
      features: ["Speech-to-text API", "Text-to-speech API", "Translation API", "Custom training"]
    }
  ];

  const techStack = [
    { name: "Speech Recognition", tech: "Whisper (OpenAI) + Custom Sindhi Training" },
    { name: "Language Model", tech: "Phi-3 / Mistral fine-tuned for Sindhi" },
    { name: "Text-to-Speech", tech: "Coqui TTS / Bark with Sindhi voices" },
    { name: "Infrastructure", tech: "Cloud-native, scalable deployment" }
  ];

  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Product & Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions for Sindhi speakers across all platforms and use cases.
          </p>
        </div>

        {/* Product Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Technology Stack</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-800/40 rounded-2xl border border-gray-600 hover:border-accent/50 transition-colors duration-300">
                <div className="bg-accent p-2 rounded-xl">
                  <Zap className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-gray-300 text-sm">{item.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">What Makes Us Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-accent/10 backdrop-blur-sm p-6 rounded-2xl border border-accent/30">
              <h4 className="text-xl font-bold text-accent mb-3">Cultural Intelligence</h4>
              <p className="text-gray-300">AI that understands Sindhi cultural context, idioms, and expressions.</p>
            </div>
            <div className="bg-accent/10 backdrop-blur-sm p-6 rounded-2xl border border-accent/30">
              <h4 className="text-xl font-bold text-accent mb-3">Multi-Platform</h4>
              <p className="text-gray-300">Consistent experience across mobile, web, and API integrations.</p>
            </div>
            <div className="bg-accent/10 backdrop-blur-sm p-6 rounded-2xl border border-accent/30">
              <h4 className="text-xl font-bold text-accent mb-3">Scalable Architecture</h4>
              <p className="text-gray-300">Built to serve millions of users with enterprise-grade reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;