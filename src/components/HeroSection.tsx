
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
      <div className="absolute inset-0 bg-gradient-to-r from-electric-green/90 to-deep-blue/90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Cheapest Electricity <br className="hidden sm:block" />
          <span className="text-white/90">for a Brighter Future!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Unlock AI-Driven, Blockchain-Secured, Green-Powered Energy at Unbeatable Prices
        </p>
        
        <button 
          onClick={scrollToJoin}
          className="bg-white text-deep-blue font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto animate-pulse-glow"
        >
          Get the Cheapest Electricity Now
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-2">Energy Revolution</h3>
            <p className="text-white/80">Join the movement that's changing how we consume electricity forever.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-semibold mb-2">Save 30% On Average</h3>
            <p className="text-white/80">Our customers save significantly compared to traditional providers.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-xl font-semibold mb-2">100% Carbon Neutral</h3>
            <p className="text-white/80">All our energy comes from renewable sources. Good for the planet, good for your wallet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
