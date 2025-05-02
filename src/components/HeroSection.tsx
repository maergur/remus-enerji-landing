
import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

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
      className="relative min-h-screen flex items-center bg-gradient-to-r from-deep-blue/90 to-electric-green/80 overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-electric-green/5" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-light-green" />
              <span className="text-light-green font-medium">%100 Yenilenebilir Enerji</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Remus Energy <br />
              <span className="text-white/90 text-2xl md:text-4xl mt-2 block">Dijital Enerji Tedarikçiniz</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Yapay zeka ve %100 yenilenebilir enerji kaynaklarıyla desteklenmiş 
              en avantajlı elektrik fiyatlarına hemen şimdi sahip olun.
            </p>
            
            <button 
              onClick={scrollToJoin}
              className="bg-white text-deep-blue font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 animate-pulse-glow"
            >
              Şimdi Geçiş Yap
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-3 px-5 rounded-full">
                <p className="text-white text-sm">%100 Yenilenebilir Enerji</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 px-5 rounded-full">
                <p className="text-white text-sm">Ortalama %30 Tasarruf</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 px-5 rounded-full">
                <p className="text-white text-sm">Sözleşme Yok</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <img 
                src="/lovable-uploads/954d197c-1594-41a8-91b0-5591c0b7e659.png" 
                alt="Remus Energy Tablet Mockup" 
                className="w-full h-auto max-w-md lg:max-w-lg mx-auto"
              />
              
              <div className="absolute inset-[8.5%] top-[3.5%] overflow-hidden rounded-[14px]">
                <img 
                  src="/lovable-uploads/d773e683-761f-451c-8f4d-e45e9bbe1226.png" 
                  alt="Remus Energy Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
