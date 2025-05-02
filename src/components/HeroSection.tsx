
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-hero pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-lumian-blue/90 to-lumian-green/90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-white mb-6 animate-fade-in-up">
          AI-Powered <br className="hidden sm:block" />
          <span className="text-white/90">Energy Management</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 animate-fade-in-up font-ibm-plex" style={{ animationDelay: "0.2s" }}>
          Predict energy consumption, improve efficiency, and reduce CO₂ emissions with our smart technology
        </p>
        
        <button 
          onClick={scrollToJoin}
          className="bg-white text-lumian-blue font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto animate-pulse-glow"
        >
          Start Saving Yesterday
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-inter font-semibold mb-2">Sustainability Focused</h3>
            <p className="text-white/80 font-ibm-plex">Join the movement that's changing how businesses manage energy for a greener future.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-inter font-semibold mb-2">Save 25% On Average</h3>
            <p className="text-white/80 font-ibm-plex">Our clients save significantly with our AI-driven predictions and optimization.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-xl font-inter font-semibold mb-2">Reduce CO₂ Emissions</h3>
            <p className="text-white/80 font-ibm-plex">Improve your carbon footprint while enhancing energy efficiency across your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
