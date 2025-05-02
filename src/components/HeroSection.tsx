
import React from 'react';
import { ArrowRight, Laptop } from 'lucide-react';

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
      className="relative min-h-screen flex items-center bg-lumian-blue pt-16 overflow-hidden"
    >
      {/* Decorative elements - subtle patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMEI2N0EiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Content */}
          <div className="text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-white mb-6">
              Daha Yeşil <span className="text-lumian-green">Enerji</span>, <br />
              Daha Akıllı <span className="text-lumian-green">Teknoloji</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 font-ibm-plex max-w-xl">
              Yapay zeka destekli enerji çözümlerimizle tüketiminizi optimize edin, 
              maliyetlerinizi düşürün ve karbon ayak izinizi azaltın.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <span className="text-lumian-green font-bold">%30</span>
                <p className="text-white text-sm">Enerji Tasarrufu</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <span className="text-lumian-green font-bold">%25</span>
                <p className="text-white text-sm">Maliyet Azalımı</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <span className="text-lumian-green font-bold">%50</span>
                <p className="text-white text-sm">CO₂ Azalımı</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                className="bg-lumian-green hover:bg-opacity-90 transition-all text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                onClick={scrollToJoin}
              >
                HEMEN BAŞLA
                <ArrowRight size={16} />
              </button>
              
              <button 
                onClick={scrollToJoin}
                className="border border-white/30 hover:bg-white/10 transition-all text-white font-bold py-4 px-8 rounded-lg"
              >
                DAHA FAZLA BİLGİ
              </button>
            </div>

            <div className="flex items-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-lumian-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Kolay kurulum
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-lumian-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                7/24 Destek
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-lumian-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Anlık analizler
              </div>
            </div>
          </div>
          
          {/* Right Column - MacBook Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-lumian-green/20 blur-3xl rounded-full"></div>
              <div className="relative bg-lumian-blue/80 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-2xl">
                <div className="relative">
                  {/* MacBook frame */}
                  <div className="relative z-10 rounded-t-xl overflow-hidden bg-gray-800 pt-4 pb-2 px-2">
                    <div className="h-1.5 w-12 mx-auto mb-2 rounded-full bg-gray-700"></div>
                    <div className="bg-gray-900 rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzU1ODY5NA&ixlib=rb-4.0.3&q=80&w=800" 
                        alt="Lumian Enerji Dashboard"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  {/* MacBook base */}
                  <div className="relative z-20 bg-gradient-to-b from-gray-700 to-gray-800 h-4 -mt-1 mx-3 rounded-b-lg shadow-lg"></div>
                  <div className="relative z-10 bg-gray-800 h-1 -mt-1 mx-10 rounded-b-lg shadow-lg"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-black/30 blur-md rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative objects */}
      <div className="absolute top-20 left-10">
        <div className="h-24 w-24 bg-lumian-green/10 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10">
        <div className="h-32 w-32 bg-lumian-green/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
